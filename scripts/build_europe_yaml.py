import datetime
import json
import pathlib
import re
import time
import urllib.parse
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parents[1]
TARGET = ROOT / 'data' / 'europe'
TARGET.mkdir(parents=True, exist_ok=True)
APP = (ROOT / 'app.js').read_text(encoding='utf-8')
MATCH = re.search(r'const countriesText=`([^`]+)`', APP)
if not MATCH:
    raise RuntimeError('Country catalog not found in app.js')
COUNTRIES = []
for line in MATCH.group(1).split(';'):
    flag, code, name, english, eu = line.split('|')
    iso = ''.join(chr(ord(char) - 127397) for char in flag)
    if not re.fullmatch(r'[A-Z]{2}', iso):
        raise RuntimeError(f'Invalid flag code: {flag}')
    COUNTRIES.append((iso.lower(), code, name))

def quote(value):
    return json.dumps(str(value), ensure_ascii=False)

def get_candidates(iso):
    query = f'''SELECT DISTINCT ?place ?placeLabel ?plate WHERE {{
      ?country wdt:P297 "{iso.upper()}".
      ?place wdt:P17 ?country; wdt:P395 ?plate.
      SERVICE wikibase:label {{ bd:serviceParam wikibase:language "de,en". }}
    }} LIMIT 5000'''
    url = 'https://query.wikidata.org/sparql?' + urllib.parse.urlencode({'query': query, 'format': 'json'})
    for attempt in range(3):
        try:
            request = urllib.request.Request(url, headers={'Accept': 'application/sparql-results+json', 'User-Agent': 'Kennzeichen-Sofortfinder/2.2 (research; GitHub basecore/kennzeichen-sofortfinder)'})
            with urllib.request.urlopen(request, timeout=25) as response:
                data = json.load(response)
            entries = set()
            for row in data['results']['bindings']:
                code = row['plate']['value'].strip().upper()
                if not re.fullmatch(r'[A-ZÄÖÜ0-9-]{1,8}', code):
                    continue
                entity = row['place']['value']
                if not re.fullmatch(r'https?://www.wikidata.org/entity/Q[0-9]+', entity):
                    continue
                label = row.get('placeLabel', {}).get('value', entity.rsplit('/', 1)[-1])
                entries.add((code, label, entity))
            return sorted(entries), None
        except Exception as error:
            if attempt == 2:
                return [], str(error)
            time.sleep(2 ** attempt + 1)

def write_yaml(iso, sign, name, entries, error):
    modes = {'it': 'modern_regular_serial_not_geographic_optional_province_on_right', 'es': 'modern_regular_serial_not_geographic', 'fr': 'modern_regular_serial_not_geographic_department_can_be_chosen'}
    lines = [
        'schema_version: 1',
        'country_iso2: ' + quote(iso.upper()),
        'international_vehicle_code: ' + quote(sign),
        'country_name_de: ' + quote(name),
        'geographic_rule: ' + quote(modes.get(iso, 'requires_country_specific_validation')),
        'coverage: ' + quote('source_unavailable' if error else 'wikidata_candidates_unverified'),
        'app_ready: false',
        'source_property: "https://www.wikidata.org/wiki/Property:P395"',
        'source_license: "CC0 1.0"',
        'generated_utc: ' + quote(datetime.datetime.now(datetime.timezone.utc).isoformat()),
        'error: ' + quote(error or ''),
        'entries:',
    ]
    if not entries:
        lines[-1] = 'entries: []'
    for code, label, entity in entries:
        lines.extend(['  - code: ' + quote(code), '    place: ' + quote(label), '    wikidata: ' + quote(entity)])
    (TARGET / (iso + '.yaml')).write_text('\n'.join(lines) + '\n', encoding='utf-8')

manifest = {}
for iso, sign, name in COUNTRIES:
    if iso in {'de', 'at', 'ch'}:
        manifest[iso] = {'status': 'existing_local_community_list', 'path': '../' + iso + '.yaml'}
        continue
    entries, error = get_candidates(iso)
    write_yaml(iso, sign, name, entries, error)
    manifest[iso] = {'status': 'source_unavailable' if error else 'wikidata_candidates_unverified', 'count': len(entries), 'path': iso + '.yaml'}
    time.sleep(1)
(TARGET / 'manifest.json').write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')

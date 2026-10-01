# Kennzeichen-Sofortfinder Europa 🚗

**Version 2.3.1 · 10.01.2026** · [Web-App](https://basecore.github.io/kennzeichen-sofortfinder/) · [GitHub-Projekt](https://github.com/basecore/kennzeichen-sofortfinder)

Die schnelle ABC-Suche nutzt die lokal gespeicherten Community-Listen `data/de.yaml`, `at.yaml` und `ch.yaml`. Deutschland ist voreingestellt. Das große Schild zeigt einen EU-Sternkreis statt einer zweiten Landesflagge; Ortsnamen sind vergrößert und nur die Ergebnisschilder führen zu Ortsartikeln oder einer spezifischen Wikipedia-Suche.

## Weitere Länder: separat gekennzeichneter Recherchemodus

Die App verlinkt unter „Europa-Daten (Recherche)“ auf [research.html](https://basecore.github.io/kennzeichen-sofortfinder/research.html). Dort ist jedes im Länder-Menü enthaltene Land mit seiner lokalen YAML-Datei unter `data/europe/<iso>.yaml` verknüpft; DE/AT/CH nutzen die bestehenden Quelldateien. Die Länderdateien wurden aus Wikidatas Eigenschaft [P395](https://www.wikidata.org/wiki/Property:P395) generiert (CC0), sind aber `app_ready: false`: Es sind **unverifizierte Recherchekandidaten**, keine vollständig geprüften aktuell gültigen Ortslisten. Erst nach bewusstem Aktivieren der Warn-Checkbox werden sie sichtbar. Bei mehr als 100 Treffern werden aus Leistungsgründen zuerst 100 angezeigt; die Präfixsuche durchsucht trotzdem alle geladenen Einträge. Ein Tipp auf einen Kandidaten führt zu dessen Wikidata-Eintrag, nicht zu einem unbelegt geratenen Stadtartikel. Länder ohne nutzbaren Ortscode oder mit nicht erreichbarer Datenquelle zeigen einen Hinweis statt erfundener Orte. Besonders bei heutigen italienischen, spanischen und französischen Seriennummern kann aus den Zeichen kein verlässlicher Zulassungsort abgeleitet werden.

`data/europe/manifest.json` nennt den Status und Umfang je Land; [data/europe/README.md](https://github.com/basecore/kennzeichen-sofortfinder/blob/main/data/europe/README.md) erläutert die methodischen Grenzen. Die normale ABC-Suche bleibt von ungeprüften Wikidata-Ergebnissen unberührt. Neue Quellen dürfen erst nach länderspezifischem Quellenabgleich als geprüft in die Hauptsuche integriert werden.

## Daten, Offline und Versionen

Die lokalen DE/AT/CH-Daten stammen aus [offene-daten/kennzeichen](https://github.com/offene-daten/kennzeichen) unter CC0; vollständig im Sinn der Quelldatei, nicht zwingend amtlich tagesaktuell. Nach erstem erfolgreichen Laden werden sie lokal gespeichert. Polen wird in der normalen Suche aus Wikipedia geladen, Ukraine nutzt hinterlegte Regionscodes, Italien nur ausgewählte optionale Provinzcodes. Bei Länderrecherche lädt die App eine YAML-Datei aus dem eigenen GitHub-Pages-Projekt; besuchte Dateien kann der Service Worker zwischenspeichern. Nicht beim Fahren bedienen.

GitHub Pages unter [Settings → Pages](https://github.com/basecore/kennzeichen-sofortfinder/settings/pages) aus `main` und `/(root)` veröffentlichen.

- **2.3.0 · 30.09.2026:** Eigene, deutlich als ungeprüft markierte Europa-Recherche mit Links zu allen Länder-YAMLs.
- **2.2.1 · 30.09.2026:** Korrektur des lokalen Dateipfads `D → de.yaml`, `A → at.yaml`.
- **2.2.0 · 30.09.2026:** Lokale Listen DE/AT/CH, größere Treffer, EU-Sternkreis.

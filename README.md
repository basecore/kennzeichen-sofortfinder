# Kennzeichen-Sofortfinder Europa 🚗

**Version 2.2.0 · 30.09.2026** · [Web-App](https://basecore.github.io/kennzeichen-sofortfinder/) · [GitHub-Projekt](https://github.com/basecore/kennzeichen-sofortfinder)

## Bedienung

Deutschland ist beim Start ausgewählt. Die Landesflagge steht **nur im Länder-Menü**; das stilisierte Schild zeigt bei EU-Ländern links einen gelben Sternkreis und das internationale Länderkürzel. Bei Nicht-EU-Ländern wird kein fälschliches EU-Symbol angezeigt. Tippe bis zu drei Buchstaben: die Liste zeigt sämtliche passenden Kürzel der geladenen Datenquelle, ohne die frühere Beschränkung auf 60 Starttreffer. Nicht mögliche nächste Buchstaben sind grau. Die Ortsnamen der Ergebnisschilder sind vergrößert; ein Tipp auf ein Ergebnis öffnet den Ort bei Wikipedia. Ein kleiner Pfeil ersetzt den wiederholten Schriftzug „Wikipedia“. Das große Schild oben ist kein Link.

## Daten und Offline-Nutzung

Die vollständigen Quelldateien `data/de.yaml`, `data/at.yaml` und `data/ch.yaml` liegen **im selben GitHub-Repository** und werden durch [.github/workflows/vendor-plates.yml](https://github.com/basecore/kennzeichen-sofortfinder/blob/main/.github/workflows/vendor-plates.yml) aus [offene-daten/kennzeichen](https://github.com/offene-daten/kennzeichen) (CC0) übernommen und auf eine Mindestanzahl geprüft. Die App lädt diese Dateien direkt von GitHub Pages, nicht mehr aus GitHub Raw oder einem fremden CDN. Nach dem ersten erfolgreichen Laden wird die vollständige Liste auch im Browser gespeichert und offline verwendet. Eine kleine Notfallliste wird **nicht** mehr als vollständiger Bestand ausgegeben. Falls die lokale Datei auf GitHub Pages fehlt, zeigt die App einen konkreten Fehler samt Schaltfläche zum erneuten Laden statt elf Kürzel als vermeintliche Gesamtliste. `data/source.json` enthält Abrufzeit und Anzahl je Datei.

Polnische Stadtkürzel werden weiterhin aus [Wikipedia](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Poland) geladen und bei Erfolg lokal gespeichert; bei Nichterreichbarkeit ohne gespeicherte Komplettliste ist dort keine vollständige Ortsliste verfügbar. Wikipedia-Inhalte: [CC BY-SA](https://en.wikipedia.org/wiki/Wikipedia:Copyrights), Urheber über Versionsgeschichte des Artikels. Ukrainische Regionscodes liegen in der App. Für Italien sind nur einige optionale Provinzcodes vom rechten Rand bekannt; aktuelle Serienbuchstaben bezeichnen keinen Ort. Weitere Länder sind mit Ländercode und einem Informationslink auswählbar, aber ohne verifizierte Ortsdaten werden keine Orte erfunden.

Die CC0-Kürzelliste ist eine Community-Liste, nicht die amtlich vollständige KBA-Liste; neue oder historische Kürzel können fehlen. Für verbindliche Zuordnungen siehe die [KBA-Übersicht](https://www.kba.de/DE/Service/Kennzeichen/kennzeichen_node.html). Das App-Datum ist nicht das Aktualitätsdatum der Quelldaten. Nicht beim Fahren bedienen.

## PWA und Versionsverlauf

GitHub Pages unter [Settings → Pages](https://github.com/basecore/kennzeichen-sofortfinder/settings/pages) aus `main` und `/(root)` veröffentlichen. Der Service Worker lädt HTML bei Internetverbindung zuerst frisch und speichert danach die App-Oberfläche; das Skript trägt eine Versionskennung im Dateilink, damit veraltete JS-Dateien nicht dauerhaft geladen werden.

- **2.2.0 · 30.09.2026:** Lokale Komplettlisten für DE/AT/CH; alle Treffer; größere Ortsnamen; EU-Symbol statt doppelter Flagge; dezenter Linkpfeil.
- **2.1.1 · 30.09.2026:** Fehler bei der Ergebnisdarstellung behoben.
- **2.1.0 · 30.09.2026:** Stadtlinks auf den Ergebnisschildern, nicht auf dem oberen Schild.

# Kennzeichen-Sofortfinder Europa 🚗

**Version 2.2.0 · 30.09.2026** · [Web-App](https://basecore.github.io/kennzeichen-sofortfinder/) · [GitHub-Projekt](https://github.com/basecore/kennzeichen-sofortfinder)

## Bedienung

Deutschland ist beim Start ausgewählt. Die Landesflagge erscheint einmal im Länder-Menü. Der blaue Bereich des stilisierten Schilds zeigt bei EU-Ländern das EU-Sternensymbol und darunter den Ländercode; Nicht-EU-Länder zeigen dort nur den Code. Das obere Schild ist kein Link. Die Ergebnisschilder unten zeigen groß Kürzel und Orts- oder Kreisname; ein Tippen öffnet den entsprechenden Wikipedia-Ort oder eine gezielte Wikipedia-Suche. Das Wort „Wikipedia“ steht nicht mehr auf jedem Treffer. Nicht mögliche nächste Buchstaben sind grau. Bei drei Buchstaben mit × neu beginnen.

## Vollständige lokale Listen

Die **vollständigen Dateien der verwendeten Community-Datenquelle** für Deutschland, Österreich und Schweiz liegen jetzt direkt unter [`data/`](https://github.com/basecore/kennzeichen-sofortfinder/tree/main/data) im Repository: `de.yaml`, `at.yaml`, `ch.yaml` und `source.json` mit Abrufdatum und Anzahl. Quelle: [offene-daten/kennzeichen](https://github.com/offene-daten/kennzeichen), CC0. Die App lädt zuerst diese Dateien vom eigenen GitHub-Pages-Host, validiert sie und speichert sie zusätzlich im Browser. Die 11 deutschen Notfalltreffer werden nicht mehr als Ersatzliste gezeigt. Kann die vollständige Liste weder lokal noch aus Browserdaten oder Ausweichquellen geladen werden, zeigt die App einen Fehler statt unbemerkt unvollständige Treffer. Der Service Worker legt die drei Datendateien zusätzlich für Offline-Nutzung ab. Änderungen der Datenquelle werden über `.github/workflows/vendor-plates.yml` geprüft und versioniert; nach automatischer Datenaktualisierung kann ein neuer GitHub-Pages-Build nötig sein.

**Wichtig:** „Vollständig“ bedeutet alle Einträge **dieser Datenquelle**, nicht garantiert alle aktuell amtlich zugeteilten Kürzel. Für Deutschland mit der [aktuellen KBA-Übersicht](https://www.kba.de/DE/Service/Kennzeichen/kennzeichen_node.html) abgleichen. App-Versionsdatum und Datenstand sind verschieden.

Polen nutzt weiterhin eine Wikipedia-Liste und bei fehlgeschlagenem Abruf nur eine ausdrücklich markierte vorläufige Auswahl; Quelle [Wikipedia](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Poland), [CC BY-SA](https://en.wikipedia.org/wiki/Wikipedia:Copyrights). Ukraine zeigt regionale Kürzel aus [Wikipedia](https://de.wikipedia.org/wiki/Kfz-Kennzeichen_(Ukraine)). Italien hat auf modernen Standardkennzeichen keine Ortskodierung in den Serienbuchstaben: angezeigt werden nur ausgewählte optionale Provinzcodes rechts. Für andere Länder ohne verlässliche Ortsdaten wird keine Stadt erfunden.

## Installation und Updates

Für [GitHub Pages](https://github.com/basecore/kennzeichen-sofortfinder/settings/pages) `main` und `/(root)` als Veröffentlichungsquelle wählen. Die App im Browser öffnen und zum Startbildschirm hinzufügen. `sw.js` lädt HTML und lokale Datendateien bei Verbindung bevorzugt aus dem Netz und nutzt sonst die gespeicherte Version. Die Dateien in `data/` werden beim Installieren nach Möglichkeit mitgespeichert. Manifest und App-Icons bleiben unverändert. Nicht während des Fahrens bedienen.

## Versionsverlauf

- **2.2.0 · 30.09.2026:** Lokale DE/AT/CH-Komplettlisten, größere Ortsnamen, vereinfachte Trefferschilder und EU-Symbol im blauen Feld.
- **2.1.1 · 30.09.2026:** Ergebnisanzeige nach JavaScript-Fehler repariert.
- **2.1.0 · 30.09.2026:** Orts-Wikipedia-Links auf Ergebnissen und zusätzliche Datenquellen.

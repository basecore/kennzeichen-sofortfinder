# Kennzeichen-Sofortfinder Europa 🚗

**Version 2.0.0 · 30.09.2026** · [Web-App](https://basecore.github.io/kennzeichen-sofortfinder/) · [GitHub-Projekt](https://github.com/basecore/kennzeichen-sofortfinder)

Smartphone-PWA für Kennzeichen: Deutschland ist vorausgewählt. Im Länder-Menü sind europäische Staaten und einige Sondergebiete mit Flagge und internationalem Länderkürzel aufgeführt. Auf der stilisierten Kennzeichenansicht steht der Ländercode links; bei EU-Staaten steht ein Sternsymbol statt der Nationalflagge. Dies ist eine Orientierungshilfe, keine exakte Reproduktion amtlicher Kennzeichen.

## Bedienung und Wikipedia

Land wählen, mögliche Buchstaben antippen, Orts- oder Kreisbezeichnung lesen. Nicht mögliche nächste Buchstaben bleiben grau. Einen Treffer antippen, um ihn auf dem großen Kennzeichen zu übernehmen. Ein Tipp auf das große Kennzeichen öffnet Wikipedia in einem neuen Tab: bei ausgewähltem Ort eine Wikipedia-Suche nach diesem Ort (mit direktem Sprung, falls ein gleichnamiger Artikel existiert), sonst den Wikipedia-Artikel beziehungsweise die Suche zum Kennzeichensystem des gewählten Landes.

## Datenabdeckung und Grenzen

- **Deutschland, Österreich und Schweiz:** regionale Codes aus [offene-daten/kennzeichen](https://github.com/offene-daten/kennzeichen), CC0. Diese Länder werden beim ersten Öffnen mit Internet geladen und lokal gespeichert.
- **Polen:** polnische Kreis- und Stadtkürzel werden nach Länderwechsel aus [Wikipedia, „Vehicle registration plates of Poland“](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Poland) ausgelesen und lokal gespeichert. Wenn Wikipedia nicht erreichbar ist oder die Tabellenstruktur wechselt, zeigt die App deutlich gekennzeichnet nur eine kleine integrierte Auswahl häufiger Codes. Der Wikipedia-Inhalt steht unter [CC BY-SA](https://en.wikipedia.org/wiki/Wikipedia:Copyrights); Quelle und Beitragende über den verlinkten Artikel und dessen Versionsgeschichte.
- **Ukraine:** regionale Kürzel aus der [Wikipedia-Übersicht](https://de.wikipedia.org/wiki/Kfz-Kennzeichen_(Ukraine)), mit den Standardpaaren von 2004 und 2013. Es sind überwiegend Oblaste, nicht Städte; historische und Sonderkennzeichen sind nicht enthalten.
- **Italien:** Die normalen Serienbuchstaben aktueller Schilder verraten keinen Herkunftsort. Die App kennt nur ausgewählte, fakultative Provinzcodes vom **rechten** blauen Streifen, etwa MI; ein fehlender Eintrag ist keine Aussage über die Gültigkeit des Kennzeichens. [Hintergrund bei Wikipedia](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Italy).
- **Alle weiteren Länder im Menü:** Länderkennung und Flagge werden angezeigt; ohne belastbar integrierte Ortsdaten werden **keine Städte geraten**. Tippen auf das Schild öffnet Informationen zum jeweiligen Kennzeichensystem auf Wikipedia. Sonder-, historische und individuell gestaltete Kennzeichen können abweichen.

Die Kennzeichenlisten stammen aus Communityquellen und können unvollständig oder veraltet sein. App-Version und Datum sind **nicht** der Datenstand. Ein Land mit nationaler Seriennummer kann aus den Buchstaben nicht geografisch entschlüsselt werden. Mehr zu den unterschiedlichen Systemen: [Europäische Kennzeichen](https://en.wikipedia.org/wiki/European_vehicle_registration_plate). Nicht während des Fahrens bedienen.

## Installation und Pflege

Unter [Settings → Pages](https://github.com/basecore/kennzeichen-sofortfinder/settings/pages) „Deploy from a branch“, Branch `main`, Ordner `/(root)` aktivieren. App im Browser öffnen und „Zum Startbildschirm hinzufügen“ wählen. Für Deutschland, Österreich, Schweiz und Polen ist zum erstmaligen Laden der vollständigen Ortsliste eine Internetverbindung nötig; danach werden diese Daten lokal gespeichert. Die App-Oberfläche selbst wird vom Service Worker offline zwischengespeichert. Die bestehenden PNG-Icons (192, 512, maskierbar und Apple Touch), `icon.svg` und `manifest.webmanifest` bleiben erhalten. Bei Änderungen an der Oberfläche die Cache-Version in `sw.js` anheben.

## Versionsverlauf

- **2.0.0 · 30.09.2026:** Europa-Länderauswahl, Flaggen und internationale Kürzel, landesspezifische Hinweise und Wikipedia-Link auf dem Kennzeichen.
- **1.1.1 · 30.09.2026:** Unmögliche Folgebuchstaben ausgegraut.
- **1.1.0 · 30.09.2026:** PWA-Logo, Icons und Dokumentation.

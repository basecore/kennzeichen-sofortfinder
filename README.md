# Kennzeichen-Sofortfinder 🚗

**Version 1.1.0 · 30.09.2026**

Eine smartphoneoptimierte, werbefreie Progressive Web App: die ersten ein bis drei Buchstaben eines deutschen Kennzeichens auf dem festen ABC-Feld antippen und sofort Ort beziehungsweise Kreis sehen. [App öffnen](https://basecore.github.io/kennzeichen-sofortfinder/) · [Quellcode](https://github.com/basecore/kennzeichen-sofortfinder)

## Funktionen

- Sofortige Präfixsuche ohne Bildschirmtastatur oder Suchen-Taste; exakte Kürzel stehen oben.
- Große Touch-Tasten, Zurück und neue Suche; auch mit Hardwaretastatur bedienbar.
- Die letzten acht angeklickten Kürzel bleiben lokal gespeichert.
- Offline-Start nach dem ersten erfolgreichen Laden dank Service Worker und lokal gespeicherter Kennzeichenliste.
- Logo und Favicon als SVG; GitHub Actions generiert PNG-Icons (192, 512, maskierbar und Apple Touch Icon) mit Pillow.
- Version, Veröffentlichungsdatum und Links zum GitHub-Projekt sowie zur amtlichen KBA-Übersicht direkt in der App.

## Veröffentlichung auf GitHub Pages

Im Repository unter **Settings → Pages → Build and deployment** „Deploy from a branch“, Branch `main` und Ordner `/(root)` wählen und speichern. Nach dem Deployment ist die App unter https://basecore.github.io/kennzeichen-sofortfinder/ erreichbar. Zum Installieren im Browser „Zum Startbildschirm hinzufügen“ beziehungsweise „App installieren“ wählen. **Beim ersten Besuch Internet verwenden**, damit die Kennzeichenliste geladen und lokal gespeichert wird.

Die Workflow-Datei `.github/workflows/icons.yml` erzeugt die PNG-Icons bei Änderungen am Logo oder Icon-Generator und committet sie auf `main`. Unter **Actions** prüfen, ob „Generate PWA icons“ erfolgreich war. Wenn Workflows oder Schreibrechte deaktiviert sind, fehlen die PNG-Dateien und die Installation kann browserabhängig eingeschränkt sein; in diesem Fall den Workflow und Schreibrechte für `GITHUB_TOKEN` freigeben oder die Icons lokal mit `python -m pip install Pillow==11.3.0` und `python scripts/build_icons.py` erzeugen und hochladen.

## Daten und Datenschutz

Die App lädt beim Start die frei nutzbare Kennzeichenliste von [offene-daten/kennzeichen](https://github.com/offene-daten/kennzeichen) (CC0) über GitHub Raw und speichert sie im Browser. Ist eine gespeicherte Liste vorhanden, erscheint sie sofort und wird bei Verbindung aktualisiert. Es gibt keinen eigenen Server, keine Anmeldung und keine Tracker. Beim ersten Start ohne Netz oder nach dem Löschen der Browserdaten steht noch keine Liste bereit. Das App-Datum ist **nicht** das Aktualitätsdatum der externen Kennzeichendaten.

Die Community-Liste kann unvollständig oder veraltet sein und kennzeichnet Mehrfachzuordnungen, Stadtkreise oder auslaufende Kürzel nicht zuverlässig. Für verbindliche Zuordnungen die [aktuelle KBA-Liste](https://www.kba.de/DE/Service/Kennzeichen/kennzeichen_node.html) prüfen. Nicht beim Fahren bedienen.

## Wartung

Statische HTML/CSS/JS-App ohne Build-Schritt. `sw.js` cached die Oberfläche; die YAML-Liste und zuletzt angesehene Kürzel liegen in `localStorage`. Bei Änderungen an der App-Shell die Versionsangabe in `index.html`, `sw.js` und dieser README aktualisieren und `CACHE` durch Erhöhen der Version wechseln. Durch Änderung an `scripts/build_icons.py` oder `icon.svg` startet der Icon-Workflow erneut. Der Service Worker gilt nur auf HTTPS oder localhost.

## Changelog

- **1.1.0 · 30.09.2026:** Eigenes Kennzeichen-Logo, PWA-Icon-Workflow, maskierbares Icon, Apple Touch Icon, sichtbare Version und Projektlinks, überarbeitete mobile Oberfläche und Dokumentation.
- **1.0.0 · 30.09.2026:** ABC-Sofortsuche, Offline-Zwischenspeicherung und GitHub-Pages-Grundgerüst.

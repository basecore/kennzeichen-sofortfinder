# Kennzeichen-Sofortfinder 🚗

**Version 1.1.1 · 30.09.2026**

Eine smartphoneoptimierte, werbefreie Progressive Web App: die ersten ein bis drei Buchstaben eines deutschen Kfz-Kennzeichens auf dem festen ABC-Feld antippen und sofort Ort beziehungsweise Kreis sehen. [App öffnen](https://basecore.github.io/kennzeichen-sofortfinder/) · [GitHub-Projekt](https://github.com/basecore/kennzeichen-sofortfinder)

## Bedienung

- Nach jedem Buchstaben erscheinen die passenden Kennzeichen sofort; ein exakt passendes Kürzel steht oben.
- **Nur Buchstaben, mit denen sich das bisherige Kürzel zu einem vorhandenen Kennzeichen ergänzen lässt, bleiben hell und antippbar.** Alle anderen werden grau und sind deaktiviert. Das gilt auch am Anfang und nach jedem Zurücknehmen eines Buchstabens.
- ⌫ entfernt den letzten Buchstaben, × beginnt eine neue Suche. Auch eine Hardwaretastatur beachtet die möglichen Folgebuchstaben.
- Ein angetippter Treffer wird unter „Zuletzt angesehen“ lokal gespeichert; maximal acht Kürzel.

## PWA und Veröffentlichung

Unter [Settings → Pages](https://github.com/basecore/kennzeichen-sofortfinder/settings/pages) „Deploy from a branch“, Branch `main`, Ordner `/(root)` wählen und speichern. Dann ist die [Web-App](https://basecore.github.io/kennzeichen-sofortfinder/) erreichbar. Beim ersten Besuch mit Internetverbindung laden; danach stehen gespeicherte Liste und App-Oberfläche auch offline bereit. Im Browser „Zum Startbildschirm hinzufügen“ beziehungsweise „App installieren“ wählen.

Das Logo und Favicon liegen als `icon.svg` vor. `icon-192.png`, `icon-512.png`, `icon-512-maskable.png` und `apple-touch-icon.png` werden vom Workflow `.github/workflows/icons.yml` mit `scripts/build_icons.py` erzeugt. Das Manifest beschreibt die Installation; `sw.js` speichert die Oberfläche. Bei jeder Änderung der App-Shell die Version im HTML und Service Worker anheben, damit die neue Oberfläche offline aktualisiert wird.

## Daten und Grenzen

Die App lädt die deutsche Kennzeichenliste von [offene-daten/kennzeichen](https://github.com/offene-daten/kennzeichen) (CC0) über GitHub Raw, speichert sie im Browser und aktualisiert sie bei Verbindung. Ohne ersten Online-Ladevorgang oder nach dem Löschen von Browserdaten ist noch keine Liste vorhanden. Keine Anmeldung, keine Werbung und kein eigener Tracking-Server. **Das Versionsdatum ist kein Aktualitätsdatum der Kennzeichenliste.** Die Community-Daten können veraltet oder unvollständig sein; Mehrfachzuordnungen oder Auslaufstatus sind nicht sicher markiert. Für verbindliche Angaben siehe [KBA-Kennzeichenübersicht](https://www.kba.de/DE/Service/Kennzeichen/kennzeichen_node.html). Nicht während des Fahrens bedienen.

## Versionsverlauf

- **1.1.1 · 30.09.2026:** ABC-Tasten ohne passenden nächsten Kennzeichenbuchstaben werden dynamisch grau und nicht mehr antippbar.
- **1.1.0 · 30.09.2026:** Logo, App-Icons, sichtbare Version, Projektlinks und mobile PWA-Gestaltung.
- **1.0.0 · 30.09.2026:** ABC-Sofortsuche, Offline-Speicherung und GitHub-Pages-Grundgerüst.

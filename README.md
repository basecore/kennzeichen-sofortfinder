# Kennzeichen-Sofortfinder

Smartphoneoptimierte, werbefreie PWA für deutsche Kfz-Kennzeichen: Buchstaben direkt auf dem ABC-Feld antippen, Treffer sofort sehen. Ein passendes vollständiges Kürzel steht immer oben. Ohne Tastatur, Konto oder Server.

## Benutzen

1. GitHub Pages unter **Settings → Pages → Build and deployment → Deploy from a branch** aktivieren: `main` und `/(root)`, dann speichern.
2. Die veröffentlichte App unter https://basecore.github.io/kennzeichen-sofortfinder/ öffnen. Beim ersten Besuch mit Internetverbindung warten, bis die Liste geladen ist.
3. Optional über das Browsermenü „Zum Startbildschirm hinzufügen“ installieren. Nach dem ersten erfolgreichen Laden sind Oberfläche und zuletzt gespeicherte Daten auch offline nutzbar.

Das ABC-Feld zeigt Treffer beim Tippen; ⌫ nimmt einen Buchstaben zurück, × beginnt neu. Ein Treffer kann für die nächste Fahrt unter „Zuletzt gesucht“ gespeichert werden. Auch eine angeschlossene Tastatur funktioniert.

## Daten und Grenzen

Die App lädt die öffentliche deutsche [Kennzeichenliste von offene-daten/kennzeichen](https://github.com/offene-daten/kennzeichen) (CC0) direkt von GitHub und speichert sie im Browser. Bei späterem Start wird die lokale Liste sofort angezeigt und bei Internetverbindung aktualisiert. Ist GitHub beim ersten Start nicht erreichbar, kann noch keine vollständige Liste angezeigt werden. Browserdaten löschen entfernt den lokalen Datenbestand. Es werden keine Kennzeichen an einen eigenen Server übertragen.

Die Quelle kann veraltet oder unvollständig sein. Sie nennt einen Ort oder Kreis und ein Bundesland, unterscheidet aber nicht zuverlässig Stadt, Landkreis, Mehrfachbelegung oder Auslaufstatus. Für verbindliche Angaben bitte die [aktuelle KBA-Übersicht](https://www.kba.de/DE/Service/Kennzeichen/kennzeichen_node.html) prüfen. Nicht während des Fahrens bedienen.

## Technik

Reines HTML, CSS und JavaScript, keine Build-Tools. `sw.js` speichert die Oberfläche für Offline-Starts, `localStorage` die heruntergeladene Liste und die letzten acht Treffer. Service Worker und Installation funktionieren nur über HTTPS oder localhost. Nach Änderungen am App-Shell-Code die Cache-Version in `sw.js` erhöhen.

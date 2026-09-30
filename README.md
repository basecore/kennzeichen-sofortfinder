# Kennzeichen-Sofortfinder Europa 🚗

**Version 2.1.0 · 30.09.2026** · [Web-App](https://basecore.github.io/kennzeichen-sofortfinder/) · [GitHub-Projekt](https://github.com/basecore/kennzeichen-sofortfinder)

## Bedienung

Deutschland ist standardmäßig ausgewählt. Oben wählst du das Land mit Flagge und internationalem Kfz-Kürzel. Das große Schild oben zeigt nur deine Eingabe und ist **kein Link** mehr. Nur die **Kennzeichen-Treffer unten** sind anklickbar: Ein Tipp öffnet Wikipedia zum jeweiligen Ort oder Kreis in einem neuen Tab. Bei einem eindeutig benannten Ort geht es direkt zum Artikel; bei mehrdeutigen oder anders benannten Orten zu einer Wikipedia-Suche nach dem konkreten Ortsnamen, niemals zum allgemeinen Deutschland-Kennzeichenartikel. Nicht mögliche Folgebuchstaben bleiben grau. Bei drei Buchstaben ist die Eingabe vollständig; mit × beginnst du neu.

## Daten und Fehlerbehandlung

Deutschland, Österreich und Schweiz: Listen von [offene-daten/kennzeichen](https://github.com/offene-daten/kennzeichen) (CC0). Die App prüft nacheinander eine lokale Datei, jsDelivr und GitHub Raw, validiert den Datensatz und speichert die vollständige Liste im Browser. Ohne Zugriff gibt es für diese Länder eine **sichtbar gekennzeichnete kleine Notfallauswahl**, damit nicht alle Tasten grundlos blockiert sind. „Aktualisierung nicht erreichbar“ bedeutet nicht, dass alle gespeicherten Ortsdaten fehlen: Die App zeigt die Anzahl nutzbarer Kürzel ausdrücklich an. Vollständige Offline-Nutzung setzt einen erfolgreichen ersten Abruf der vollständigen Liste voraus.

Polen: Ortscodes aus [Wikipedia](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Poland), bei Lade- oder Formatfehlern eine klar gekennzeichnete kleine Notfallauswahl. Wikipedia-Inhalte unter [CC BY-SA](https://en.wikipedia.org/wiki/Wikipedia:Copyrights), Artikel und Versionsgeschichte enthalten die Urheberangaben. Ukraine: regionale Codes (Oblaste, nicht immer Städte) nach [Wikipedia](https://de.wikipedia.org/wiki/Kfz-Kennzeichen_(Ukraine)). Italien: nur ausgewählte optionale Provinzcodes auf der rechten Seite, nicht die normalen Serienbuchstaben; [Erklärung](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Italy). Weitere Länder zeigen Länderkennung und einen Wikipedia-Link zum Kennzeichensystem, aber ohne geprüfte Ortsliste keine erfundene Stadt. Alle Quellen können veraltet oder unvollständig sein. Das App-Datum ist **nicht** der Datenstand. Nicht beim Fahren bedienen.

## Installation und Updates

[GitHub Pages](https://github.com/basecore/kennzeichen-sofortfinder/settings/pages): `main` und `/(root)` als Veröffentlichungsquelle wählen. App mit dem Browser zum Startbildschirm hinzufügen. Der Service Worker speichert die App-Oberfläche und lädt HTML-Seiten bei Verbindung zuerst aus dem Netz, damit Änderungen nicht dauerhaft in einer alten PWA-Version hängen. Bestehende SVG- und PNG-Icons sowie das Manifest bleiben unverändert.

## Versionsverlauf

- **2.1.0 · 30.09.2026:** Wikipedia-Links direkt auf den Ergebnisschildern statt oben; mehrere Datenquellen, kleine Offline-Notfallauswahl, aussagekräftiger Ladestatus und verbesserte PWA-Aktualisierung.
- **2.0.0 · 30.09.2026:** Länderauswahl, regionale Listen und Wikipedia-Verknüpfung.
- **1.1.1 · 30.09.2026:** Unmögliche Folgebuchstaben ausgegraut.

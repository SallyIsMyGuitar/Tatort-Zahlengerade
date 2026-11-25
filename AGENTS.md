# AGENTS.md – Detektiv-Adventure „Reelle Zahlen“

Titel: **Tatort Zahlengerade – Der Fall √2**
Repo: `Tatort-Zahlengerade` (GitHub Pages: `https://sallyismyguitar.github.io/Tatort-Zahlengerade/`)

Einsatz: freiwillige Ergänzung zum Unterricht, Üben und Vertiefen zu Hause (Selbstlernen ohne Lehrkraft, ca. 30–45 Min Gesamtspielzeit, jederzeit unterbrechbar dank Spielstand). Dadurch besonders wichtig: verständliche Hilfen, Merkkästen und Beispiele im Spiel, da keine Lehrkraft nachfragen kann.

## Projektziel
Browserbasiertes Point-and-Click-Adventure (Detektiv/Escape-Room) zum Lernbereich 1 „Reelle Zahlen“, Mathematik 9 (WPF I), Realschule Bayern (LehrplanPLUS). Schülerinnen und Schüler üben Wurzeln und reelle Zahlen, indem sie Rätsel lösen. Einsatz auf dem iPad (Safari), Hosting über GitHub Pages.

## Entwicklungsumgebung
- Umsetzung direkt in **GitHub** mit **Mistral Vibe** und dem Modell **GLM 5.3**. Dieses Dokument ist die verbindliche Arbeitsgrundlage für den Agenten.
- Inhalte der Rätsel orientieren sich am **LehrplanPLUS Realschule Bayern (M9, WPF I, Lernbereich 1)** und am **Westermann-Schulbuch für bayerische Realschulen**. Reihenfolge, Begriffe, Schreibweisen und Aufgabentypen folgen dem Buch.
- Der Agent erfindet keine Buchinhalte aus dem Gedächtnis. Der Lehrplanauszug liegt in `quellen/lehrplan-m9-wpfg1-lernbereich1.md`. Die Kapitelstruktur des Westermann-Buchs liegt in `quellen/westermann-m9-wpf1-kapitel4.md` (nur Überschriften und Seitenzahlen, keine kopierten Buchseiten). Fehlt etwas, wird nachgefragt.

## Arbeitsweise (verbindlich)
- **Nichts ohne Go:** Vor größeren Änderungen kurz Plan/Skizze vorlegen und Freigabe abwarten. Bei Unklarheiten nachfragen, keine Annahmen treffen.
- Zuerst Prototyp mit **Raum 1 und 2**, danach Freigabe, dann die übrigen Räume.
- Kleine, nachvollziehbare Commits mit sprechenden Nachrichten.
- Antworten und Texte im Spiel auf Deutsch, Anrede der Spielenden: „du“. Wenn Lehrkräfte-Texte nötig sind: „Schülerinnen und Schüler“.

## Technik
- **Eine Datei:** `index.html` mit Inline-CSS, Vanilla JavaScript (ES6+) und Inline-SVG-Szenen. Kein Build-Schritt, keine externen Abhängigkeiten, keine CDNs, keine Tracker.
- Läuft offline und auf GitHub Pages (`main`, Root).
- Touch-first: große Klickflächen (mind. 44 px), kein Hover-Zwang, kein Rechtsklick, Layout skaliert (Querformat iPad, auch Laptop).
- Spielstand in `localStorage` (mit try/catch, Spiel muss auch ohne Speicher laufen). Button „Neu starten“ vorhanden.
- Grafik: flache Vektorgrafik (SVG), klare Farben, ausreichender Kontrast, keine Abhängigkeit von Farbe allein.
- Keine urheberrechtlich geschützten Figuren, Logos oder Marken. Alle Grafiken, Namen und Texte sind eigene Erfindungen.
- Struktur im Code: Daten (Räume, Hotspots, Rätsel, Texte) getrennt von Logik, damit Aufgaben leicht austauschbar sind.

## Spielmechanik
- Räume als SVG-Szenen mit klickbaren Hotspots (Objekte untersuchen, Gegenstände aufnehmen).
- Inventar und **Notizbuch** (gefundene Zahlen, Merkregeln, Indizien).
- Rätsel mit Eingabefeld oder Auswahl. Lösungen werden toleriert (Komma/Punkt, Leerzeichen, äquivalente Schreibweisen wie `2√3` und `2*√3`).
- **Dreistufige Hilfe:** Tipp → Merkkasten → Beispiel.
- **Fehlerfeedback** gezielt zu typischen Fehlern, z. B. `√(a+b) ≠ √a + √b`, Verwechslung von Wurzel und Quadrat, Abbruch der Dezimalentwicklung als Zeichen von „rational“.
- Taschenrechner nur bei Aufgaben, die ihn ausdrücklich vorsehen (Hinweis im Rätsel).
- Abschluss-Screen mit Übersicht der gesicherten Kompetenzen (ohne personenbezogene Daten).

## Story und Räume
Im Mathe-Fachraum fehlt √2 aus der Zahlensammlung des Direktors. Das Detektivteam prüft die Alibis der Zahlen.

1. **Hausmeisterkeller:** Quadratwurzeln (Buch S. 67): Definition, Wurzelwerte bestimmen, √(a²) = |a|. Zahlenschloss. (KE 1/2)
2. **Bibliothek:** Reelle Zahlen (Buch S. 66/69): Zahlenmengen ℕ, ℤ, ℚ, ℝ, rational/irrational, Begründung, warum √2 nicht rational ist. (KE 1)
3. **Labor:** Wurzelwerte abschätzen und eingrenzen (zwischen zwei Quadratzahlen einordnen), quadratische Gleichungen x² = a mit L = {−√a; √a}. (KE 2)
4. **Lehrerzimmer:** Mit Wurzeltermen rechnen (Buch S. 72): Produkt und Quotient, teilweises Radizieren, danach Rationalmachen des Nenners (Buch S. 74) als reguläres Rätsel. (KE 3)
5. **Direktorat:** Finale mit gemischten Aufgaben aus allen Kompetenzerwartungen, Überführung der Täterin/des Täters. Bonusrätsel: goldener Schnitt und Fibonaccizahlen (Buch S. 77/78).

**Nicht umsetzen:** Heronverfahren (Buch S. 71) und Intervallschachtelung. Keine Verfahren zur Näherung über das Abschätzen hinaus. Keine Kubikwurzeln.

Die Zuordnung (KE 1–3) bezieht sich auf `quellen/lehrplan-m9-wpfg1-lernbereich1.md`, die Seitenangaben auf `quellen/westermann-m9-wpf1-kapitel4.md`. Umfang laut Lehrplan: ca. 10 Std., das Spiel ergänzt den Unterricht und ersetzt ihn nicht.

**Ton der Story: humorvoll.** Augenzwinkernde Dialoge, skurrile Figuren (z. B. ein pedantischer Hausmeister, eine dramatische Zahl √2), Wortwitz rund um Zahlen. Humor bleibt schülergerecht, nie auf Kosten realer Personen oder Gruppen. Fachliche Erklärungen und Fehlerfeedback bleiben klar und sachlich, der Witz steckt in Rahmenhandlung und Figuren.

Die Raumliste ist mit Lehrplan und der Kapitelstruktur des Westermann-Buchs abgeglichen. Begriffe, Schreibweisen und Aufgabentypen im Detail liegen nicht vor: Bei Unsicherheit gilt der Lehrplan, im Zweifel wird Stefan gefragt.

## Fachliche Qualität
- Fachsprache und Schreibweisen wie im bayerischen Realschulunterricht (M9). Inhalte orientieren sich am LehrplanPLUS Realschule Bayern, Lernbereich 1 M9 (WPF I).
- Jede Aufgabe hat: Kompetenz, Operator, Lösung, typische Fehler mit Rückmeldung.
- Pro Raum mindestens drei Niveaus bei den Aufgaben (leicht / standard / plus), z. B. über wählbare Zusatzrätsel oder Hilfestufen.
- Alle Aufgaben und Lösungen vor Einbau mit Code nachrechnen (Testfunktion im Entwicklungsmodus, nicht im ausgelieferten Spiel sichtbar).
- Mathematische Notation in lesbarem HTML/Unicode oder SVG (√, ², ℚ, ℝ). Keine externe Bibliothek, sofern nicht freigegeben.

## Datenschutz
- Keine Anmeldung, keine Konten, keine Server-Kommunikation, keine Analyse-Dienste.
- Es werden keine personenbezogenen Daten erhoben oder erfunden. Namen im Spiel sind frei erfundene Rollen (z. B. „Direktor“, „Hausmeister“).

## Tests vor jedem Commit
- Spiel ist von Start bis Ende durchspielbar, kein Raum bleibt blockiert (Soft-Lock-Check).
- Jede Hilfestufe und jede Fehlermeldung wurde mindestens einmal ausgelöst.
- Test auf Safari/iPad-Größe (Querformat) und Desktop-Chrome, keine Konsolenfehler.
- Neustart und Laden des Spielstands funktionieren, auch bei deaktiviertem `localStorage`.

## Deployment (GitHub Pages)
1. Repo ist angelegt. `index.html` und `AGENTS.md` liegen im Root.
2. *Settings → Pages → Branch `main`, Ordner `/ (root)`*.
3. Aufruf unter `https://sallyismyguitar.github.io/Tatort-Zahlengerade/`.

## Offene Punkte (vor Umsetzung klären)
- [x] Umsetzung: GitHub + Mistral Vibe + GLM 5.3
- [x] Tonalität: humorvoll
- [x] Lehrplanauszug liegt in `quellen/lehrplan-m9-wpfg1-lernbereich1.md` (Abgleich der Raumliste dort unten, Raum 3 prüfen)
- [x] Westermann-Kapitelstruktur liegt in `quellen/`, Raumliste abgeglichen
- [x] Heronverfahren wird nicht umgesetzt
- [ ] Bestätigen, dass die Schule genau die Westermann-Ausgabe 2021 (ISBN 978-3-14-123655-2) nutzt
- [ ] Inhalt der Bonus-/Anwendungsseiten (goldener Schnitt, Fibonacci, Geometrie, Physik) klären
- [x] Einsatz: freiwillig zu Hause als Ergänzung zum Unterricht
- [x] Titel und Repo-Name festgelegt (siehe oben)

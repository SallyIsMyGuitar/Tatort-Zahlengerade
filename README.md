# Tatort Zahlengerade – Der Fall √2

Browserbasiertes Detektiv-Adventure zum Lernbereich 1 „Reelle Zahlen“, Mathematik 9 (WPF I), Realschule Bayern (LehrplanPLUS). Freiwillige Ergänzung zum Unterricht zum Üben zu Hause, ca. 30–45 Minuten, jederzeit unterbrechbar.

**Spielen:** https://sallyismyguitar.github.io/Tatort-Zahlengerade/ (optimiert für iPad/Safari im Querformat, läuft auch am Laptop)

## Inhalt
| Raum | Thema | KE |
|---|---|---|
| 1 Hausmeisterkeller | Quadratwurzeln, √(a²) = \|a\| | 1/2 |
| 2 Bibliothek | ℕ, ℤ, ℚ, ℝ, rational/irrational, warum √2 ∉ ℚ | 1 |
| 3 Labor | Wurzeln eingrenzen und abschätzen, x² = a | 2 |
| 4 Lehrerzimmer | Produkt/Quotient, teilweises Radizieren, Nenner rational machen | 3 |
| 5 Direktorat | Gemischte Aufgaben, Überführung | 1–3 |

Jeder Raum enthält Pflichträtsel und drei Zusatzrätsel (leicht / standard / plus). Jedes Rätsel hat drei Hilfestufen (Tipp → Merkkasten → Beispiel), gezieltes Feedback zu typischen Fehlern und nach fünf Fehlversuchen die Lösung.

## Technik
- Eine Datei `index.html` (HTML, CSS, Vanilla JS, Inline-SVG), keine externen Abhängigkeiten, keine Server-Kommunikation, keine Tracker.
- Spielstand nur lokal im Browser (`localStorage`). Das Spiel läuft auch ohne Speicher.
- Eingaben sind tolerant: Komma/Punkt, `wurzel`/`sqrt` statt √, `*` oder `·`, `±√6` oder `L = {−√6; √6}`, `7-8` oder `7 < √50 < 8`. Auf dem iPad gibt es eine Symbolleiste (√ ² ± ; { }).

## Für Lehrkräfte und Entwicklung
- **Testmodus:** `index.html?dev=1` öffnet ein Testpanel. Es rechnet alle Musterlösungen unabhängig nach, prüft tolerante Eingaben, löst jede Fehlermeldung aus und prüft Hilfestufen, Türlogik (Soft-Lock) und Speichern/Laden.
- **Aufgaben austauschen:** Alle Inhalte stehen im Abschnitt `1. DATEN` von `index.html` (`DATA.puzzles`, `DATA.rooms`, `DATA.notes`). Ein Rätsel besteht aus `ke`, `op`, `calc`, `kind`, `prompt`, `solution`, `commonErrors`, `help` und `reveal`. Danach `?dev=1` aufrufen.
- Projektvorgaben: [AGENTS.md](AGENTS.md), Quellen: [quellen/](quellen/).

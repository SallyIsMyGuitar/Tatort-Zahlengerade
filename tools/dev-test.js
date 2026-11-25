// Headless-Harness: führt index.html-Skript mit DOM-Stubs aus und startet die DEV-Tests.
const fs = require("fs");
const vm = require("vm");
const path = require("path");
const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
const js = html.match(/<script>([\s\S]*)<\/script>/)[1];

function el(id) {
  return {
    id,
    _cls: new Set(),
    classList: {
      add(c) { this._s.add(c); },
      remove(c) { this._s.delete(c); },
      contains(c) { return this._s.has(c); },
      _s: new Set()
    },
    innerHTML: "",
    textContent: "",
    value: "",
    disabled: false,
    focus() {},
    addEventListener() {},
    querySelector() { return el(id + "-q"); },
    appendChild() {}
  };
}
const elements = {};
global.document = {
  getElementById(id) { return (elements[id] = elements[id] || el(id)); },
  querySelectorAll() { return []; },
  createElement(t) { return el("dyn-" + t); }
};
global.window = {
  location: { search: "?dev=1" },
  scrollTo() {},
  __runDevTests: null
};
global.console = console;

// Skript global ausführen (als Script, nicht als eval):
vm.runInThisContext(js, { filename: "inline-game.js" });

// DEV-Tests starten; DOM-Schreibzugriffe laufen in die Stubs.
window.__runDevTests();
const out = elements["dev-panel"] ? elements["dev-panel"].innerHTML : "";
fs.writeFileSync("/tmp/dev-test-report.txt", out.replace(/<[^>]*>/g, "\n"));
console.log(out.replace(/<[^>]*>/g, "\n"));

// ---- Funktions-Durchlauf: kompletter Lösungsweg ohne Gegenstände ----
(function () {
  let errors = 0;
  const expect = (cond, txt) => { if (!cond) { errors++; console.log("DURCHLAUF-FAIL: " + txt); } };
  clearState();
  DATA.story.requiredIds.forEach(id => {
    const p = DATA.puzzles[id];
    let res;
    if (p.kind === "choice") res = checkAnswer(p, null, p.solution.index);
    else if (p.kind === "num") res = checkAnswer(p, String(p.solution.accept[0]));
    else if (p.kind === "set") res = checkAnswer(p, p.solution.set.join(";"));
    else res = checkAnswer(p, p.solution.token);
    expect(res.ok, id + " nicht lösbar");
    State.solved[id] = true;
  });
  const tuer = DATA.rooms.keller.hotspots.find(h => h.doorId === "bibliothek");
  expect(tuer.requiredPuzzle === "keller_schloss", "Türlogik");
  State.currentRoom = "bibliothek";
  expect(requiredDone(), "Pflichtpunkte nicht abgeschlossen");
  tryFinale();
  expect(elements["modal"].innerHTML.indexOf("Gesicherte Kompetenzen") >= 0, "Abschluss-Screen fehlt");
  expect(DATA.placeholderRooms.length === 3, "Platzhalter-Räume");
  // Tür ohne Lösung blockiert (Meldung vorhanden, kein Absturz):
  State.solved["keller_schloss"] = false;
  tryDoor(tuer);
  expect(State.currentRoom === "bibliothek", "Tür sollte bei fehlendem Code gesperrt bleiben");
  console.log(errors === 0 ? "DURCHLAUF OK" : errors + " DURCHLAUF-PROBLEM(E)");
  process.exitCode = errors === 0 ? 0 : 1;
})();

import { MAPPING, PREFIXES } from './mapping-data.js';
import { LEXICON } from './lexicon-data.js';
import { FOLIO_PAGES, FOLIO_STATUS } from './folio-data.js';
import { RULES } from './grammar-rules-data.js';

export { MAPPING, PREFIXES, LEXICON, FOLIO_PAGES, FOLIO_STATUS, RULES };

export const STATS = {
  version: '8.1',
  changelog: [
    'Bereinigung + Addendum v8.0: 22 Lexikoneinträge ohne R43-Folgebeleg auf ★★ herabgestuft (15 aus Bereinigung + 8 aus Addendum-Fristkorrektur; Direktsuche in EVA-Transkriptionen H/C/F/U verifiziert). oro gerettet: Vorbeleg f23v P.12 nachgewiesen → R43 erfüllt → ★★★ regulär (nicht mehr Kandidat).',
    'Lexikon-Duplikate bereinigt: ykar (Quire-C-Form ★★★★ + f69r P.3 register-übergreifend) und cham (Wärme/Entzündung + f69r hippokratischer Befund-Term) jeweils zu einem konsolidierten Eintrag zusammengeführt; Netto −1 Eintrag.',
    'Regelabsorptionen (4): R32 → R25 (dydyd-Fusionstoken als Fußnote); R52 → R15 Typ D (Kolophon-Trias, Frist abgelaufen); R54 → R19 (dal·dam·dal Rahmungsvariante); R57 → R11 (odaiim= Sektionsabschluss-Variante).',
    'R28 y+t+[Terminus] validiert (★★★): R43 erfüllt — f16v + f28r = 2 Folios, 4 unabhängige Instanzen; f29v P.2 Zweitbeleg ytchor bestätigt. R55 oro-Palindrom ★★ Kand. (nur 1 striktes oro= in f24v P.5; Frist abgelaufen).',
    'Moratorium beendet: 34 validiert : 21 Kandidaten = 1,62:1 (Ziel ≥ 1,50:1 erreicht). R60+ wieder freigegeben. 16 aktive R43-Fristen (nach Addendum-Korrektur). OP5 geschlossen; OP6 (Frist-Tracking) + OP7 (Moratorium-Drift) neu.',
  ],
  date: 'Juni 2026',
  lexicon: LEXICON.length,
  rules: RULES.length,
  validatedRules: 34,
  backtest: '100%',
  backtestFraction: 'Typ I: 11/11 (100%) · Typ II: 18/21 (86%)',
  backtestTotal: '32',
  gibberishRate: '10,4 %',
  foliosA: 'f1r–f29v',
  foliosAll: 'f1r, f1v–f29v (Quires A–B+C komplett, Quire D bD1+bD2+bD3+bD4 vollständig), f57r, f58r, f69r (Quire J Kosmogramm), f71r–f72r2 (Quire K Zodiak), f103r/v, f114v, f115r/v, f116r/v',
};

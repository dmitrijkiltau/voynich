import { MAPPING, PREFIXES, LEXICON } from './translator-data.js';

// ── Mapping grid ──────────────────────────────────────

function renderMappingGrid() {
  const grid = document.getElementById('mapGrid');
  for (const m of MAPPING) {
    const cell = document.createElement('div');
    cell.className = 'mcell';
    cell.title = 'In Eingabe einfügen: ' + m.eva;
    cell.innerHTML = `<span class="e">${m.eva}</span><span class="arr">→</span><span class="h">${m.heb}</span><span class="g">${m.name}</span>`;
    cell.addEventListener('click', () => insertEva(m.eva));
    grid.appendChild(cell);
  }
}

// ── Lexicon tables ────────────────────────────────────

function renderLexTable(cat) {
  const table = document.getElementById('lex-' + cat);
  if (!table) return;
  const entries = LEXICON.filter(e => e.cat === cat);
  table.innerHTML =
    `<tr><th>EVA</th><th>Hebräisch</th><th>Bedeutung</th><th>Konf.</th></tr>` +
    entries.map(e => {
      const sc = e.stars.length >= 9 ? 'conf5' : 'conf';
      return `<tr onclick="insertEva('${e.eva}')" title="In Eingabe einfügen">
        <td><span class="eva">${e.eva}</span></td>
        <td><span class="heb-sm">${e.heb}</span></td>
        <td class="meaning">${e.de}</td>
        <td><span class="${sc}">${e.stars}</span></td>
      </tr>`;
    }).join('');
}

// ── Translation logic ─────────────────────────────────

function lookupWord(w) {
  const wl = w.toLowerCase().trim();

  const direct = LEXICON.find(e => e.eva === wl);
  if (direct) return { ...direct, matchType: 'found' };

  // PREFIXES are already sorted longest-first in the data file
  for (const pre of PREFIXES) {
    if (wl.startsWith(pre.eva) && wl.length > pre.eva.length) {
      const rest = wl.slice(pre.eva.length);
      const found = LEXICON.find(e => e.eva === rest);
      if (found) return {
        eva: w,
        heb: pre.heb + found.heb,
        de: pre.de + ' + ' + found.de,
        stars: found.stars,
        cat: found.cat,
        matchType: 'prefix',
      };
    }
  }
  return null;
}

function translate() {
  const raw = document.getElementById('evaInput').value;
  const words = raw.split(/[\s·,·]+/).map(s => s.trim()).filter(Boolean);

  const tokRow    = document.getElementById('tokenRow');
  const hebOut    = document.getElementById('hebOut');
  const deOut     = document.getElementById('deOut');
  const glossWrap = document.getElementById('glossWrap');
  const glossBody = document.getElementById('glossBody');

  if (!words.length) {
    tokRow.innerHTML = `<span style="font-family:'Crimson Text',serif;font-style:italic;font-size:.85rem;color:var(--ink-f)">Tokens erscheinen nach Eingabe …</span>`;
    hebOut.textContent = '— Hebräische Rekonstruktion erscheint hier —';
    hebOut.className = 'result-heb empty';
    deOut.textContent = '—';
    glossWrap.style.display = 'none';
    return;
  }

  const results = words.map(w => ({ word: w, lookup: lookupWord(w) }));

  // Token row
  tokRow.innerHTML = results.map(r => {
    const cls = r.lookup ? (r.lookup.matchType === 'found' ? 'found' : 'prefix') : 'unknown';
    return `<span class="tok ${cls}">
      <span class="tok-eva-lbl">${r.word}</span>
      <span class="tok-heb-lbl">${r.lookup ? r.lookup.heb : '?'}</span>
    </span>`;
  }).join('');

  // Hebrew output
  hebOut.textContent = results.map(r => r.lookup ? r.lookup.heb : '[' + r.word + '?]').join('  ·  ');
  hebOut.className = 'result-heb';

  // German output
  deOut.textContent = results.map(r => r.lookup ? r.lookup.de : '???').join(' | ');

  // Gloss table
  glossBody.innerHTML = results.map(r => {
    const sc = r.lookup && r.lookup.stars.length >= 9 ? 'g5' : '';
    return `<tr>
      <td class="g-eva">${r.word}</td>
      <td class="g-heb">${r.lookup ? r.lookup.heb : '—'}</td>
      <td class="g-de">${r.lookup ? r.lookup.de : 'unbekannt'}</td>
      <td class="g-st ${sc}">${r.lookup ? r.lookup.stars : '—'}</td>
      <td class="g-cat">${r.lookup ? r.lookup.cat : '—'}</td>
    </tr>`;
  }).join('');
  glossWrap.style.display = 'block';
}

// ── Public helpers (called from inline HTML onclick) ──

function setEx(txt) {
  document.getElementById('evaInput').value = txt;
  translate();
  document.getElementById('tool').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function clearTool() {
  document.getElementById('evaInput').value = '';
  translate();
}

function insertEva(txt) {
  const el = document.getElementById('evaInput');
  const cur = el.value;
  el.value = cur + (cur && !cur.endsWith(' ') ? ' ' : '') + txt + ' ';
  translate();
  el.focus();
  document.getElementById('tool').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Expose to global scope so inline onclick attributes work
window.translate  = translate;
window.setEx      = setEx;
window.clearTool  = clearTool;
window.insertEva  = insertEva;

// ── Init ──────────────────────────────────────────────

renderMappingGrid();
['symptom', 'prognose', 'syntax', 'verb', 'akteur'].forEach(renderLexTable);

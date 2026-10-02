// @ts-check

// --- Constants ---
const APP_NAME = 'kennzeichen-sofortfinder';
const HISTORY_STORAGE_KEY = APP_NAME + '-history-v1';
const QUERY_IDLE_MS = 10000;
const DEBOUNCE_MS = 150;

// --- Country Data ---
const country = {
  code: 'D',
  name: 'Deutschland',
  flag: '🇩🇪'
};

// --- State ---
let query = '';
let records = [];
let debouncer = null;
let queryIdleTimer = null;

// --- DOM Elements ---
const ui = {
  input: document.getElementById('input'),
  results: document.getElementById('results'),
  version: document.getElementById('version'),
  historyBtn: document.getElementById('history-btn')
};

// --- Initialization ---

async function init() {
  try {
    const res = await fetch('records.json');
    records = await res.json();
  } catch (e) {
    ui.results.innerHTML = '<p class="error">Fehler beim Laden der Kennzeichenliste.</p>';
    console.error(e);
    return;
  }

  ui.version.textContent = 'v1.1.0';

  ui.input?.addEventListener('input', (e) => {
    const value = e.target.value.toUpperCase().slice(0, 4);

    if (debouncer) {
      clearTimeout(debouncer);
    }

    debouncer = setTimeout(() => {
      change(value);
      debouncer = null;
    }, DEBOUNCE_MS);
  });

  ui.historyBtn?.addEventListener('click', () => {
    window.showKennzeichenHistory?.();
  });

  render();
}

// --- Core Logic ---

function cancelQueryIdle() {
  if (queryIdleTimer !== null) {
    clearTimeout(queryIdleTimer);
    queryIdleTimer = null;
  }
}

function change(value) {
  cancelQueryIdle();
  query = value;
  render();
  ui.results.scrollTop = 0;

  if (query) {
    queryIdleTimer = setTimeout(() => {
      const match = records.find(record => record.code === query);

      window.addKennzeichenHistory?.({
        code: query,
        title: match?.title || 'Ort nicht eindeutig',
        countryCode: country.code,
        country: country.name,
        flag: country.flag,
        at: new Date().toISOString()
      });

      change('');
    }, QUERY_IDLE_MS);
  }
}

// --- Rendering ---

function render() {
  const q = query.trim();

  if (!q) {
    ui.results.innerHTML = '';
    return;
  }

  const filtered = records
    .filter(r => r.code.startsWith(q))
    .sort((a, b) => a.code.localeCompare(b.code))
    .slice(0, 50);

  if (filtered.length === 0) {
    ui.results.innerHTML = '<p class="empty">Keine Treffer</p>';
    return;
  }

  const html = filtered.map(r => `
    <div class="result-item">
      <div class="result-code">${country.flag} ${r.code}</div>
      <div class="result-title">${r.title || ''}</div>
      <div class="result-state">${r.state || ''}</div>
    </div>
  `).join('');

  ui.results.innerHTML = html;
}

// --- Start ---

init();

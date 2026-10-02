// @ts-check

const HISTORY_STORAGE_KEY = 'kennzeichen-sofortfinder-history-v1';

/**
 * @typedef {{
 *   code: string;
 *   title: string;
 *   countryCode: string;
 *   country: string;
 *   flag: string;
 *   at: string;
 * }} HistoryEntry
 */

/**
 * @returns {HistoryEntry[]}
 */
function getHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_STORAGE_KEY);
    if (!raw) return [];
    /** @type {HistoryEntry[]} */
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/**
 * @param {HistoryEntry[]} entries
 */
function saveHistory(entries) {
  localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(entries));
}

/**
 * @param {HistoryEntry} entry
 */
function addHistoryEntry(entry) {
  const entries = getHistory();
  entries.unshift(entry);
  // Keep only last 50 entries
  while (entries.length > 50) entries.pop();
  saveHistory(entries);
}

/**
 * Format date as DD.MM.YYYY, HH:mm:ss
 * @param {string} isoString
 */
function formatDateTime(isoString) {
  const d = new Date(isoString);
  const pad = (n) => String(n).padStart(2, '0');
  return [
    pad(d.getDate()),
    pad(d.getMonth() + 1),
    d.getFullYear(),
    ', ',
    pad(d.getHours()),
    ':',
    pad(d.getMinutes()),
    ':',
    pad(d.getSeconds())
  ].join('');
}

/**
 * Render history entries into the dialog
 */
function renderHistory() {
  const container = document.getElementById('history-list');
  if (!container) return;

  const entries = getHistory();

  if (entries.length === 0) {
    container.innerHTML = '<p class="empty">Noch kein Verlauf.</p>';
    return;
  }

  const html = entries.map(item => `
    <div class="history-item">
      <div class="history-line1">
        <span class="history-code">${item.countryCode} · ${item.code}</span>
      </div>
      <div class="history-line2">${item.title}</div>
      <div class="history-line3">${item.flag} ${item.country}</div>
      <div class="history-line4">${formatDateTime(item.at)}</div>
    </div>
  `).join('');

  container.innerHTML = html;
}

/**
 * Show the history dialog
 */
function showKennzeichenHistory() {
  const dialog = document.getElementById('history-dialog');
  if (!dialog) return;
  renderHistory();
  dialog.showModal();
}

/**
 * Hide the history dialog
 */
function hideKennzeichenHistory() {
  const dialog = document.getElementById('history-dialog');
  if (!dialog) return;
  dialog.close();
}

/**
 * Clear all history
 */
function clearKennzeichenHistory() {
  saveHistory([]);
  renderHistory();
}

// Expose to window for app.js
window.addKennzeichenHistory = addHistoryEntry;
window.showKennzeichenHistory = showKennzeichenHistory;
window.hideKennzeichenHistory = hideKennzeichenHistory;
window.clearKennzeichenHistory = clearKennzeichenHistory;

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.getElementById('history-close');
  const clearBtn = document.getElementById('history-clear');
  const dialog = document.getElementById('history-dialog');

  closeBtn?.addEventListener('click', hideKennzeichenHistory);
  clearBtn?.addEventListener('click', clearKennzeichenHistory);

  // Close on backdrop click
  dialog?.addEventListener('click', (e) => {
    if (e.target === dialog) {
      hideKennzeichenHistory();
    }
  });
});

// ... (vorheriger Code bleibt unverändert bis zur change-Funktion)

const QUERY_IDLE_MS = 10000;
let queryIdleTimer = null;

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

      // Ort explizit aus dem Match-Record holen, Fallback nur wenn match oder title fehlt
      const ort = (match && typeof match.title === 'string' && match.title.trim())
        ? match.title.trim()
        : 'Ort nicht eindeutig';

      window.addKennzeichenHistory?.({
        code: query,
        title: ort,
        countryCode: country.code,
        country: country.name,
        flag: country.flag,
        at: new Date().toISOString()
      });

      change('');
    }, QUERY_IDLE_MS);
  }
}

// ... (restlicher Code bleibt unverändert)

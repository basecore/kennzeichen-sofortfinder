    (() => {
      'use strict';
      const STORAGE_KEY = 'kennzeichen-sofortfinder-history-v1';
      const openButton = document.getElementById('historyOpen');
      const closeButton = document.getElementById('historyClose');
      const dialog = document.getElementById('historyDialog');
      const list = document.getElementById('historyList');
      const warning = document.getElementById('historyWarning');
      let entries = [];
      try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        if (Array.isArray(saved)) entries = saved;
      } catch (error) {
        console.warn('Kennzeichen-Verlauf konnte nicht gelesen werden:', error);
        warning.textContent = 'Gespeicherter Verlauf konnte nicht gelesen werden.';
      }
      const formatDate = new Intl.DateTimeFormat('de-DE', {
        year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'
      });
      function renderHistory() {
        const fragment = document.createDocumentFragment();
        if (!entries.length) {
          const empty = document.createElement('li');
          empty.className = 'empty';
          empty.textContent = 'Noch keine automatisch gelöschten Kürzel.';
          fragment.append(empty);
        }
        for (const entry of entries) {
          const item = document.createElement('li');
          item.className = 'history-item';
          const plate = document.createElement('span');
          plate.className = 'history-plate';
          const countryCode = document.createElement('span');
          countryCode.className = 'history-countrycode';
          countryCode.textContent = entry.countryCode || '';
          const code = document.createElement('span');
          code.className = 'history-code';
          code.textContent = entry.code;
          plate.append(countryCode, code);
          const details = document.createElement('span');
          details.className = 'history-details';
          const country = document.createElement('small');
          country.textContent = `${entry.flag || ''} ${entry.country || ''}`.trim();
          const time = document.createElement('small');
          const date = new Date(entry.at);
          time.textContent = Number.isNaN(date.getTime()) ? '' : formatDate.format(date);
          if (entry.title) {
            const title = document.createElement('strong');
            title.textContent = entry.title;
            details.append(title);
          }
          details.append(country, time);
          item.append(plate, details);
          fragment.append(item);
        }
        list.replaceChildren(fragment);
      }
      window.addKennzeichenHistory = entry => {
        if (!entry || !/^[A-ZÄÖÜ]{1,3}$/.test(entry.code)) return;
        entries.unshift({
          code:entry.code,
          title:String(entry.title || ''),
          countryCode:String(entry.countryCode || ''),
          country:String(entry.country || ''),
          flag:String(entry.flag || ''),
          at:String(entry.at || new Date().toISOString())
        });
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
          warning.textContent = '';
        } catch (error) {
          console.warn('Kennzeichen-Verlauf konnte nicht gespeichert werden:', error);
          warning.textContent = 'Verlauf konnte nicht dauerhaft gespeichert werden.';
        }
        if (dialog.open) renderHistory();
      };
      openButton.addEventListener('click', () => {
        renderHistory();
        dialog.showModal();
      });
      closeButton.addEventListener('click', () => dialog.close());
      dialog.addEventListener('close', () => openButton.focus());
    })();

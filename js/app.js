function submitRequest(event) {
  event.preventDefault();
  navigateTo('tickets');
  showToast('Заявка отправлена. Это демо-режим.');
}

window.addEventListener('load', () => {
  hideSplash();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
});

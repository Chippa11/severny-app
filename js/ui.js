function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');

  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

function hideSplash() {
  const splash = document.getElementById('splash');
  setTimeout(() => {
    splash.classList.add('hide');
  }, 900);
}

const screens = [
  'home',
  'request',
  'tickets',
  'ticket-detail',
  'contacts',
  'prices',
  'info'
];

function navigateTo(id) {
  screens.forEach(screenId => {
    const element = document.getElementById(screenId);
    if (element) element.classList.toggle('active', screenId === id);
  });

  document.querySelectorAll('.tabbar button, .desktop-menu button').forEach(button => {
    const target = button.dataset.screen;
    const isActive =
      target === id ||
      (id === 'ticket-detail' && target === 'tickets');

    button.classList.toggle('active', isActive);
  });

  window.scrollTo({ top: 0, behavior: 'instant' });
}

function openTicketDetail() {
  navigateTo('ticket-detail');
}

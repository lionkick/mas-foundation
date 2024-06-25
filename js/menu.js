document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('menu-button');
  const closeButton = document.getElementById('close-button');
  const fullScreenMenu = document.getElementById('full-screen-menu');

  menuButton.addEventListener('click', function() {
      fullScreenMenu.classList.add('active');
  });

  closeButton.addEventListener('click', function() {
      fullScreenMenu.classList.remove('active');
  });
});
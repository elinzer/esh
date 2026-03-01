(function () {
  'use strict';

  var menuTrigger = document.getElementById('toggle-main-menu-mobile');
  var menuOverlay = document.getElementById('main-menu-mobile');
  var closeBtn = document.getElementById('close-mobile-menu');
  var body = document.body;

  if (!menuTrigger || !menuOverlay) return;

  var hamTop = document.getElementById('ham-top');
  var hamMid = document.getElementById('ham-mid');
  var hamBot = document.getElementById('ham-bot');

  function openMenu() {
    menuOverlay.classList.add('open');
    menuTrigger.setAttribute('aria-expanded', 'true');
    body.classList.add('overflow-hidden');
    if (hamTop) { hamTop.style.transform = 'translateY(8px) rotate(45deg)'; }
    if (hamMid) { hamMid.style.opacity = '0'; }
    if (hamBot) { hamBot.style.transform = 'translateY(-8px) rotate(-45deg)'; }
  }

  function closeMenu() {
    menuOverlay.classList.remove('open');
    menuTrigger.setAttribute('aria-expanded', 'false');
    body.classList.remove('overflow-hidden');
    if (hamTop) { hamTop.style.transform = ''; }
    if (hamMid) { hamMid.style.opacity = ''; }
    if (hamBot) { hamBot.style.transform = ''; }
  }

  menuTrigger.addEventListener('click', function () {
    var isOpen = menuOverlay.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  // Close on overlay click (outside nav)
  menuOverlay.addEventListener('click', function (e) {
    if (e.target === menuOverlay) {
      closeMenu();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menuOverlay.classList.contains('open')) {
      closeMenu();
    }
  });
}());

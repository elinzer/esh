var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

let clientBanner = document.getElementById('client-banner');

clientBanner.style.opacity = 1;

let bannerButton = document.getElementById('banner-close').addEventListener('click', function() {
    clientBanner.style.display = 'none';

})

// Toggle class active
const NavbarNav = document.querySelector('.navbar-nav');
// ketika menu diklik
document.querySelector('#menu').onclick = () => {
    NavbarNav.classList.toggle('active');
};

// Klik di luar sidebar untuk menghilangkan nav
const menu = document.querySelector('#menu');

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !NavbarNav.contains(e.target)) {
        NavbarNav.classList.remove('active');
    }
}) ;
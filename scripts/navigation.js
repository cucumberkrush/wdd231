document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const primaryNav = document.getElementById('primary-nav');

    menuButton.addEventListener('click', function() {
        const isExpanded = primaryNav.classList.toggle('active');
        menuButton.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking on links (mobile)
    document.querySelectorAll('#primary-nav a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 768) {
                primaryNav.classList.remove('active');
                menuButton.setAttribute('aria-expanded', false);
            }
        });
    });
});
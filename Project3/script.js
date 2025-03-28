document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.getElementById('navLinks');
    const showMenu = document.getElementById('showMenu');
    const closeMenu = document.getElementById('closeMenu');

    if (showMenu && closeMenu && navLinks) {
        showMenu.addEventListener('click', () => {
            navLinks.style.right = "0";
        });

        closeMenu.addEventListener('click', () => {
            navLinks.style.right = "-200px";
        });
    }
});
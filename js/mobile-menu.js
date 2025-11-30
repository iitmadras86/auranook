document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('button.md\\:hidden, button.lg\\:hidden'); // Select the hamburger button
    const header = document.querySelector('header');

    if (menuButton && header) {
        // Create mobile menu container if it doesn't exist (though I plan to add it to HTML, this is a backup or I can just toggle a class if I add it to HTML)
        // Better to expect it in HTML for cleaner separation.

        const mobileMenu = document.getElementById('mobile-menu');

        if (mobileMenu) {
            menuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                mobileMenu.classList.toggle('flex');
            });
        } else {
            console.warn('Mobile menu element not found');
        }
    }
});

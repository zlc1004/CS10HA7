document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;

    themeSwitcher.addEventListener('click', () => {
        const currentTheme = body.dataset.theme;
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        body.dataset.theme = newTheme;

        if (newTheme === 'dark') {
            themeSwitcher.textContent = 'Light Mode';
        } else {
            themeSwitcher.textContent = 'Dark Mode';
        }
    });

    // Check for a theme preference in localStorage and apply it on load
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        body.dataset.theme = storedTheme;
        if (storedTheme === 'dark') {
            themeSwitcher.textContent = 'Light Mode';
        }
    }
});
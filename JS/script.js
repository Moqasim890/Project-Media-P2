document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.querySelector('.mode-toggle');
    const body = document.body;

    modeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            modeToggle.textContent = '🌙';
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            modeToggle.textContent = '🌞';
        }
    });
});

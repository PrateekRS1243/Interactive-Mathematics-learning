let currentLanguage = 'en';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'kn' : 'en';
    updateLanguage();
    localStorage.setItem('language', currentLanguage);
    // Dispatch custom event for games to listen
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: currentLanguage } }));
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-en][data-kn]');
    elements.forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLanguage}`);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        updateLanguage();
    }

    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
});

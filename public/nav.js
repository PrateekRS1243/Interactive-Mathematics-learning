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

// Instructions toggle function
function toggleInstructions(gameName) {
    const instructionsId = gameName + 'Instructions';
    const instructionsPanel = document.getElementById(instructionsId);
    const gameContent = instructionsPanel?.nextElementSibling;
    
    if (instructionsPanel) {
        if (instructionsPanel.style.display === 'none' || !instructionsPanel.style.display) {
            instructionsPanel.style.display = 'block';
            if (gameContent && gameContent.classList.contains('game-meta')) {
                // Hide game content while showing instructions
                let current = gameContent;
                while (current && !current.classList.contains('game-modal-content')) {
                    if (current.classList.contains('game-meta') || 
                        current.classList.contains('game-progress') || 
                        current.classList.contains('game-content')) {
                        current.style.display = 'none';
                    }
                    current = current.nextElementSibling;
                }
            }
        } else {
            instructionsPanel.style.display = 'none';
            // Show game content again
            if (gameContent) {
                let current = gameContent;
                while (current && !current.classList.contains('game-modal-content')) {
                    if (current.classList.contains('game-meta') || 
                        current.classList.contains('game-progress') || 
                        current.classList.contains('game-content')) {
                        current.style.display = '';
                    }
                    current = current.nextElementSibling;
                }
            }
        }
    }
}

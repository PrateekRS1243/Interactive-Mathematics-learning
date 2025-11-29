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

    // --- Gate games until Learning visited ---
    const gamesGrid = document.getElementById('gamesGrid');
    const gamesGate = document.getElementById('gamesGate');
    const gamesHint = document.getElementById('gamesHint');
    const visited = localStorage.getItem('learningVisited') === 'true';
    if (gamesGrid && gamesGate) {
        gamesGrid.style.display = visited ? '' : 'none';
        gamesGate.style.display = visited ? 'none' : 'flex';
        if (gamesHint) gamesHint.style.display = visited ? '' : 'none';
    }

    // Clicking any topic-card marks Learning as visited
    document.querySelectorAll('.topic-card').forEach(card => {
        card.addEventListener('click', () => {
            localStorage.setItem('learningVisited', 'true');
        });
    });

    // Gate actions: scroll to topics or open Formula learning preview
    const goToLearningBtn = document.getElementById('goToLearningBtn');
    if (goToLearningBtn) {
        goToLearningBtn.addEventListener('click', () => {
            const topics = document.querySelector('.topics-grid');
            if (topics) {
                topics.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    const openFormulaLearningBtn = document.getElementById('openFormulaLearningBtn');
    if (openFormulaLearningBtn) {
        openFormulaLearningBtn.addEventListener('click', () => {
            if (typeof window.openGame === 'function') {
                window.openGame('formulaMemory');
            }
        });
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

// Helper to refresh gate state if needed elsewhere
function refreshGamesGate() {
    const gamesGrid = document.getElementById('gamesGrid');
    const gamesGate = document.getElementById('gamesGate');
    const gamesHint = document.getElementById('gamesHint');
    const visited = localStorage.getItem('learningVisited') === 'true';
    if (gamesGrid && gamesGate) {
        gamesGrid.style.display = visited ? '' : 'none';
        gamesGate.style.display = visited ? 'none' : 'flex';
        if (gamesHint) gamesHint.style.display = visited ? '' : 'none';
    }
}

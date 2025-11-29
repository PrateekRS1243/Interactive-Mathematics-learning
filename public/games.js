// Modal control functions
// Language support
let gamesLanguage = 'en';

// Translation strings
const translations = {
    en: {
        question: 'Question',
        sessionComplete: 'Session complete! Score:',
        playAgain: 'Play Again',
        perfectScore: '🎉 Perfect score! No mistakes!',
        whatToReview: '📚 What to Review:',
        mistake: 'mistake',
        mistakes: 'mistakes',
        additionWithCarry: 'Addition with Carrying',
        simpleAddition: 'Simple Addition',
        example: 'Example:',
        step: 'Step',
        carry: 'Carry',
        toTensPlace: 'to tens place',
        addOnes: 'Add ones:',
        addTens: 'Add tens:',
        answer: 'Answer:',
        tip: 'Tip: Add digit by digit carefully',
        patternsWith: 'Patterns with step',
        eachNumberIncreases: 'Each number increases by',
        gameOver: 'Game Over! Final Score:',
        time: 'Time:',
        clickStart: 'Click Start!',
        startGame: 'Start Game',
        typeAnswer: 'Type answer...',
        nextNumber: 'Next number?',
        checkAnswer: 'Check Answer',
        learningPhase: 'Learning Phase – Review All Formulas'
    },
    kn: {
        question: 'ಪ್ರಶ್ನೆ',
        sessionComplete: 'ಅವಧಿ ಮುಗಿದಿದೆ! ಅಂಕ:',
        playAgain: 'ಮತ್ತೆ ಆಡಿ',
        perfectScore: '🎉 ಪರಿಪೂರ್ಣ ಅಂಕ! ತಪ್ಪುಗಳಿಲ್ಲ!',
        whatToReview: '📚 ಪರಿಶೀಲಿಸಬೇಕಾದವು:',
        mistake: 'ತಪ್ಪು',
        mistakes: 'ತಪ್ಪುಗಳು',
        additionWithCarry: 'ಸಾಗಿಸುವ ಸಂಕಲನ',
        simpleAddition: 'ಸರಳ ಸಂಕಲನ',
        example: 'ಉದಾಹರಣೆ:',
        step: 'ಹಂತ',
        carry: 'ಸಾಗಿಸು',
        toTensPlace: 'ಹತ್ತರ ಸ್ಥಾನಕ್ಕೆ',
        addOnes: 'ಒಂದರ ಸ್ಥಾನ ಸೇರಿಸಿ:',
        addTens: 'ಹತ್ತರ ಸ್ಥಾನ ಸೇರಿಸಿ:',
        answer: 'ಉತ್ತರ:',
        tip: 'ಸಲಹೆ: ಅಂಕಿಯಿಂದ ಅಂಕಿಯನ್ನು ಎಚ್ಚರಿಕೆಯಿಂದ ಸೇರಿಸಿ',
        patternsWith: 'ಹಂತದೊಂದಿಗೆ ಮಾದರಿಗಳು',
        eachNumberIncreases: 'ಪ್ರತಿ ಸಂಖ್ಯೆಯು ಹೆಚ್ಚಾಗುತ್ತದೆ',
        gameOver: 'ಆಟ ಮುಗಿದಿದೆ! ಅಂತಿಮ ಅಂಕ:',
        time: 'ಸಮಯ:',
        clickStart: 'ಪ್ರಾರಂಭವನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ!',
        startGame: 'ಆಟ ಪ್ರಾರಂಭಿಸಿ',
        typeAnswer: 'ಉತ್ತರ ಟೈಪ್ ಮಾಡಿ...',
        nextNumber: 'ಮುಂದಿನ ಸಂಖ್ಯೆ?',
        checkAnswer: 'ಉತ್ತರ ಪರಿಶೀಲಿಸಿ',
        learningPhase: 'ಅಭ್ಯಾಸ ಹಂತ – ಎಲ್ಲಾ ಸೂತ್ರಗಳನ್ನು ನೋಡಿ'
    }
};

// ---------------- Roast Messages for Low Scores ----------------
const roastMessages = {
    en: [
        "😬 Ouch! Even a calculator would be disappointed!",
        "🤔 Did you guess all of those? Be honest!",
        "📚 Time to hit the books... and actually open them!",
        "🎯 You miss 100% of the shots you don't study for!",
        "💤 Were you sleeping or just practicing to fail?",
        "🧠 Your brain called... it wants you to try harder!",
        "🎮 Less gaming, more learning! You can do better!",
        "📉 That score went downhill faster than a roller coaster!",
        "🤦 Even my grandma's calculator scored higher!",
        "🔥 That performance was fire... a dumpster fire!",
        "💡 Pro tip: Reading the questions helps!",
        "🎪 This isn't a circus, stop clowning around!",
        "📖 The Learning section is right there... USE IT!",
        "🎓 Knowledge is power, and you're running on empty!",
        "⚡ Lightning might strike twice, but good scores won't with that effort!"
    ],
    kn: [
        "😬 ಅಯ್ಯೋ! ಕ್ಯಾಲ್ಕುಲೇಟರ್ ಕೂಡ ನಿರಾಶೆಗೊಳ್ಳುತ್ತದೆ!",
        "🤔 ಎಲ್ಲವನ್ನೂ ಊಹಿಸಿದ್ದೀರಾ? ಸತ್ಯ ಹೇಳಿ!",
        "📚 ಪುಸ್ತಕಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುವ ಸಮಯ... ಮತ್ತು ನಿಜವಾಗಿ ತೆರೆಯಿರಿ!",
        "🎯 ನೀವು ಅಧ್ಯಯನ ಮಾಡದ 100% ಪ್ರಯತ್ನಗಳನ್ನು ತಪ್ಪಿಸಿಕೊಳ್ಳುತ್ತೀರಿ!",
        "💤 ನೀವು ಮಲಗುತ್ತಿದ್ದೀರಾ ಅಥವಾ ವಿಫಲತೆಯ ಅಭ್ಯಾಸ ಮಾಡುತ್ತಿದ್ದೀರಾ?",
        "🧠 ನಿಮ್ಮ ಮೆದುಳು ಕರೆ ಮಾಡಿದೆ... ಹೆಚ್ಚು ಪ್ರಯತ್ನಿಸಲು ಬಯಸುತ್ತದೆ!",
        "🎮 ಕಡಿಮೆ ಆಟ, ಹೆಚ್ಚು ಕಲಿಕೆ! ನೀವು ಉತ್ತಮವಾಗಿ ಮಾಡಬಹುದು!",
        "📉 ಆ ಅಂಕವು ರೋಲರ್ ಕೋಸ್ಟರ್‌ಗಿಂತ ವೇಗವಾಗಿ ಕೆಳಗೆ ಹೋಯಿತು!",
        "🤦 ನನ್ನ ಅಜ್ಜಿಯ ಕ್ಯಾಲ್ಕುಲೇಟರ್ ಕೂಡ ಹೆಚ್ಚು ಅಂಕ ಪಡೆದುಕೊಂಡಿತು!",
        "🔥 ಆ ಪ್ರದರ್ಶನ ಬೆಂಕಿಯಾಗಿತ್ತು... ಕಸದ ಬೆಂಕಿ!",
        "💡 ಪ್ರೊ ಟಿಪ್: ಪ್ರಶ್ನೆಗಳನ್ನು ಓದುವುದು ಸಹಾಯ ಮಾಡುತ್ತದೆ!",
        "🎪 ಇದು ಸರ್ಕಸ್ ಅಲ್ಲ, ಕೋಡಂಗಿತನ ನಿಲ್ಲಿಸಿ!",
        "📖 ಕಲಿಕೆ ವಿಭಾಗ ಅಲ್ಲಿಯೇ ಇದೆ... ಅದನ್ನು ಬಳಸಿ!",
        "🎓 ಜ್ಞಾನವೇ ಶಕ್ತಿ, ಮತ್ತು ನೀವು ಖಾಲಿಯಾಗಿ ಓಡುತ್ತಿದ್ದೀರಿ!",
        "⚡ ಮಿಂಚು ಎರಡು ಬಾರಿ ಬೀಳಬಹುದು, ಆದರೆ ಆ ಪ್ರಯತ್ನದಿಂದ ಉತ್ತಮ ಅಂಕಗಳು ಬರುವುದಿಲ್ಲ!"
    ]
};

function getRandomRoast() {
    const roasts = roastMessages[gamesLanguage] || roastMessages.en;
    return roasts[Math.floor(Math.random() * roasts.length)];
}

// ---------------- Formula Builder State (moved earlier for countdown access) ----------------
let formulaScore = 0;
let formulaCurrent = 0;
const FORMULA_MAX = 100;
const FORMULA_TOTAL = 10;
let formulaMistakes = [];
let currentFormulaQuestion = null;
let selectedParts = [];
// Available questions for formula builder
let formulaQuestions = [
    // Areas & Perimeters
    { name: 'Circle Area', formula: ['π', 'r', '²'], parts: ['π', 'r', '²', '2', 'h', 'a', 'b', 'c'] },
    { name: 'Circle Perimeter', formula: ['2', 'π', 'r'], parts: ['2', 'π', 'r', '4', 'h', 'a', '×', '²'] },
    { name: 'Square Area', formula: ['a', '²'], parts: ['a', '²', 'π', 'r', '2', 'h', '4', '3'] },
    { name: 'Square Perimeter', formula: ['4', '×', 'a'], parts: ['4', '×', 'a', 'b', 'c', '²'] },
    { name: 'Rectangle Area', formula: ['l', '×', 'w'], parts: ['l', 'w', '×', 'h', '+', 'a', 'b', '²'] },
    { name: 'Rectangle Perimeter', formula: ['2', '(', 'l', '+', 'w', ')'], parts: ['2', '(', 'l', '+', 'w', ')', '×', 'h'] },
    { name: 'Triangle Area', formula: ['½', '×', 'b', '×', 'h'], parts: ['½', 'b', 'h', '×', 'a', 'r', '²', '+'] },
    { name: 'Triangle Perimeter', formula: ['a', '+', 'b', '+', 'c'], parts: ['a', '+', 'b', 'c', '×', '²'] },
    { name: 'Trapezium Area', formula: ['½', '×', '(', 'a', '+', 'b', ')', '×', 'h'], parts: ['½', '×', '(', 'a', '+', 'b', ')', '×', 'h', 'r', '²'] },

    // Volumes & Surface Areas
    { name: 'Cube Volume', formula: ['a', '³'], parts: ['a', '³', '²', 'π', 'r', 'h', '4', 'l'] },
    { name: 'Cube Surface Area', formula: ['6', 'a', '²'], parts: ['6', 'a', '²', 'π', 'r'] },
    { name: 'Cuboid Volume', formula: ['l', '×', 'w', '×', 'h'], parts: ['l', 'w', 'h', '×', '2', 'a'] },
    { name: 'Cylinder Volume', formula: ['π', 'r', '²', 'h'], parts: ['π', 'r', '²', 'h', 'a', '3', '×', '4'] },
    { name: 'Cylinder Surface Area', formula: ['2', 'π', 'r', '(', 'h', '+', 'r', ')'], parts: ['2', 'π', 'r', '(', 'h', '+', 'r', ')', '×'] },
    { name: 'Sphere Volume', formula: ['(', '4', '/', '3', ')', 'π', 'r', '³'], parts: ['4', '3', '/', 'π', 'r', '³', '(', ')', '2', 'h'] },
    { name: 'Sphere Surface Area', formula: ['4', 'π', 'r', '²'], parts: ['4', 'π', 'r', '²', 'h'] },
    { name: 'Cone Volume', formula: ['(', '1', '/', '3', ')', 'π', 'r', '²', 'h'], parts: ['1', '3', '/', 'π', 'r', '²', 'h', '(', ')', '4'] },

    // Theorems & Algebra basics
    { name: 'Pythagoras Theorem', formula: ['a', '²', '+', 'b', '²', '=', 'c', '²'], parts: ['a', 'b', 'c', '²', '+', '=', '×', 'π'] }
];

// Get translation
function t(key) {
    return translations[gamesLanguage][key] || translations['en'][key];
}

// Sync with main language toggle
function syncLanguage() {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        gamesLanguage = savedLanguage;
    }
}

// Make functions globally accessible
window.openGame = function(gameType) {
    syncLanguage(); // Sync with global language setting
    const modalId = gameType + 'Modal';
    const modal = document.getElementById(modalId);
    if (!modal) {
        console.error('Modal not found:', modalId);
        return;
    }
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Initialize game when opened
    if (gameType === 'mathQuiz') {
        initializeMathQuiz(); // Initialize with unique questions
        generateMathQuizQuestion();
    } else if (gameType === 'pattern') {
        runTheoryCheck('pattern', () => generatePattern());
    } else if (gameType === 'formulaMemory') {
        // Attach event listeners to existing HTML ids
        const clearBtn = document.getElementById('formulaClear');
        const submitBtn = document.getElementById('formulaSubmit');
        const replayBtn = document.getElementById('formulaReset');
        const skipBtn = document.getElementById('formulaSkip');
        if (clearBtn) clearBtn.onclick = clearFormula;
        if (submitBtn) submitBtn.onclick = checkFormulaAnswer;
        if (replayBtn) replayBtn.onclick = resetFormula;
        if (skipBtn) skipBtn.onclick = skipFormulaCountdown;
        runTheoryCheck('formula', () => startFormulaCountdown());
    }
}
// ---------------- Theory Check (shared for Pattern & Formula) ----------------
let theoryUsedIndices = [];
function pickTheoryQuestions(count = 3) {
    if (typeof questionBank === 'undefined') return [];
    const allowedTypes = new Set(['formula', 'property', 'definition', 'concept']);
    const theoryPool = questionBank
        .map((q, idx) => ({...q, _idx: idx}))
        .filter(q => allowedTypes.has(q.type));

    // prefer unused questions
    const unused = theoryPool.filter(q => !theoryUsedIndices.includes(q._idx));
    const pool = (unused.length >= count) ? unused : theoryPool;
    const shuffled = pool.sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, count);
    selected.forEach(q => { if (!theoryUsedIndices.includes(q._idx)) theoryUsedIndices.push(q._idx); });
    return selected;
}

function runTheoryCheck(kind, onComplete) {
    const isPattern = kind === 'pattern';
    const block = document.getElementById(isPattern ? 'patternTheory' : 'formulaTheory');
    const qEl = document.getElementById(isPattern ? 'patternTheoryQuestion' : 'formulaTheoryQuestion');
    const optsEl = document.getElementById(isPattern ? 'patternTheoryOptions' : 'formulaTheoryOptions');
    const feedEl = document.getElementById(isPattern ? 'patternTheoryFeedback' : 'formulaTheoryFeedback');
    const contBtn = document.getElementById(isPattern ? 'patternTheoryContinue' : 'formulaTheoryContinue');
    if (!block || !qEl || !optsEl || !feedEl || !contBtn) { onComplete(); return; }

    const questions = pickTheoryQuestions(3);
    let idx = 0;
    block.style.display = 'block';
    contBtn.style.display = 'none';

    const render = () => {
        const q = questions[idx];
        qEl.textContent = q.q;
        feedEl.textContent = '';
        optsEl.innerHTML = '';
        const options = [q.a, ...q.wrong].sort(() => Math.random() - 0.5);
        options.forEach(opt => {
            const b = document.createElement('button');
            b.className = 'game-btn';
            b.textContent = opt;
            b.onclick = () => {
                const correct = opt.toString().trim() === q.a.toString().trim();
                feedEl.textContent = correct ? '' : (gamesLanguage === 'kn' ? 'ತಪ್ಪು ಉತ್ತರ' : 'Incorrect');
                Array.from(optsEl.children).forEach(btn => btn.disabled = true);
                setTimeout(() => {
                    idx++;
                    if (idx >= questions.length) {
                        contBtn.style.display = 'block';
                    } else {
                        render();
                    }
                }, 600);
            };
            optsEl.appendChild(b);
        });
    };

    contBtn.onclick = () => {
        block.style.display = 'none';
        onComplete();
    };

    render();
}
// --- Formula Builder: 30s pre-round countdown ---
let formulaCountdownTimer = null;
function startFormulaCountdown() {
    const parts = document.getElementById('formulaParts');
    const submitBtn = document.getElementById('formulaSubmit');
    const clearBtn = document.getElementById('formulaClear');
    const feedback = document.getElementById('formulaFeedback');
    const counter = document.getElementById('formulaCounter');
    const countdownEl = document.getElementById('formulaCountdown');
    const progressEl = document.getElementById('formulaProgress');
    const skipBtn = document.getElementById('formulaSkip');
    const learnList = document.getElementById('formulaLearnList');
    const scoreEl = document.getElementById('formulaScore');

    // Reset visible UI for a new learning phase
    if (feedback) feedback.textContent = '';
    if (progressEl) progressEl.style.width = '0%';
    if (scoreEl) scoreEl.textContent = '0 / 100';
    if (counter) counter.textContent = t('learningPhase');
    // Hide building UI during learning phase
    const promptEl = document.getElementById('formulaPrompt');
    const targetEl = document.getElementById('formulaTarget');
    const workspaceEl = document.querySelector('.formula-workspace');
    // Completely hide builder UI during learning phase
    if (promptEl) promptEl.style.display = 'none';
    if (targetEl) targetEl.style.display = 'none';
    if (workspaceEl) {
        workspaceEl.style.display = 'none';
        workspaceEl.style.pointerEvents = 'none';
    }

    selectedParts = [];
    const display = document.getElementById('formulaDisplay');
    if (display) display.innerHTML = '<span class="formula-placeholder">' + (gamesLanguage === 'kn' ? 'ಇಲ್ಲಿ ಸೂತ್ರ ನಿರ್ಮಿಸಿ...' : 'Build formula here...') + '</span>';
    if (parts) parts.innerHTML = '';
    if (submitBtn) submitBtn.disabled = true;
    if (clearBtn) clearBtn.disabled = true;
    if (countdownEl) countdownEl.style.display = 'block';
    if (skipBtn) skipBtn.style.display = 'inline-block';

    // Show formula list to learn
    if (learnList) {
        learnList.style.display = 'block';
        let html = '';
        if (typeof formulaQuestions !== 'undefined') {
            formulaQuestions.forEach(q => {
                const formulaStr = q.formula.join('');
                html += `<div class=\"learn-item\">
                            <div class=\"learn-name\">${q.name}</div>
                            <div class=\"learn-formula\">${formulaStr}</div>
                        </div>`;
            });
        }
        learnList.innerHTML = html;
    }

    // Setup countdown
    let timeLeft = 30;
    if (countdownEl) countdownEl.textContent = `${t('time') || 'Time'}: ${timeLeft}s`;

    if (formulaCountdownTimer) {
        clearInterval(formulaCountdownTimer);
        formulaCountdownTimer = null;
    }
    formulaScore = 0;
    formulaCurrent = 0;
    formulaMistakes = [];

    formulaCountdownTimer = setInterval(() => {
        timeLeft--;
        if (countdownEl) countdownEl.textContent = `${t('time') || 'Time'}: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(formulaCountdownTimer);
            formulaCountdownTimer = null;
            if (countdownEl) countdownEl.style.display = 'none';
            if (skipBtn) skipBtn.style.display = 'none';
            if (learnList) { learnList.style.display = 'none'; learnList.innerHTML = ''; }
            if (submitBtn) submitBtn.disabled = false;
            if (clearBtn) clearBtn.disabled = false;
            // Restore UI visibility
            if (promptEl) promptEl.style.display = 'block';
            if (targetEl) targetEl.style.display = 'block';
            if (workspaceEl) {
                workspaceEl.style.display = 'flex';
                workspaceEl.style.pointerEvents = 'auto';
            }
            resetFormula();
        }
    }, 1000);
}

function skipFormulaCountdown() {
    const countdownEl = document.getElementById('formulaCountdown');
    const submitBtn = document.getElementById('formulaSubmit');
    const clearBtn = document.getElementById('formulaClear');
    const skipBtn = document.getElementById('formulaSkip');
    if (formulaCountdownTimer) {
        clearInterval(formulaCountdownTimer);
        formulaCountdownTimer = null;
    }
    if (countdownEl) countdownEl.style.display = 'none';
    if (skipBtn) skipBtn.style.display = 'none';
    if (submitBtn) submitBtn.disabled = false;
    if (clearBtn) clearBtn.disabled = false;
    const learnList = document.getElementById('formulaLearnList');
    if (learnList) { learnList.style.display = 'none'; learnList.innerHTML = ''; }
    // Restore UI visibility when skipping
    const promptEl = document.getElementById('formulaPrompt');
    const targetEl = document.getElementById('formulaTarget');
    const workspaceEl = document.querySelector('.formula-workspace');
    if (promptEl) promptEl.style.display = 'block';
    if (targetEl) targetEl.style.display = 'block';
    if (workspaceEl) {
        workspaceEl.style.display = 'flex';
        workspaceEl.style.pointerEvents = 'auto';
    }
    resetFormula();
}

window.closeGame = function(gameType) {
    const modalId = gameType + 'Modal';
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Reset games when closing
    if (gameType === 'numberMatch') {
        resetNumberMatch();
    } else if (gameType === 'quickMath') {
        if (quickMathInterval) {
            endQuickMath();
        }
    } else if (gameType === 'pattern') {
        resetPattern();
    } else if (gameType === 'formulaMemory') {
        resetFormula();
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('game-modal')) {
        event.target.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Reset games based on which modal was closed
        if (event.target.id === 'numberMatchModal') {
            resetNumberMatch();
        } else if (event.target.id === 'quickMathModal' && quickMathInterval) {
            endQuickMath();
        } else if (event.target.id === 'patternModal') {
            resetPattern();
        } else if (event.target.id === 'formulaMemoryModal') {
            resetFormula();
        }
    }
}

// Math Quiz Game - Comprehensive quiz covering all learning topics
let mathQuizScore = 0;
let currentMathQuizAnswer = '';
let currentMathQuizQuestion = { topic: '', question: '', answer: '', type: '' };
const MATH_QUIZ_MAX = 100;
const MATH_QUIZ_TOTAL = 20; // 20 questions
let mathQuizCurrent = 0;
let mathQuizMistakes = [];
let usedQuestionIndices = []; // Track used questions across sessions
let currentSessionQuestions = []; // Questions for current quiz

// Initialize quiz with shuffled unique questions
function initializeMathQuiz() {
    if (typeof questionBank === 'undefined') {
        console.error('Question bank not loaded!');
        return;
    }
    
    // Get available questions (those not used in recent sessions)
    const availableIndices = [];
    for (let i = 0; i < questionBank.length; i++) {
        if (!usedQuestionIndices.includes(i)) {
            availableIndices.push(i);
        }
    }
    
    // If we've used 80+ questions, reset to allow variety
    if (availableIndices.length < MATH_QUIZ_TOTAL) {
        usedQuestionIndices = [];
        for (let i = 0; i < questionBank.length; i++) {
            availableIndices.push(i);
        }
    }
    
    // Shuffle and pick 20 unique questions
    const shuffled = availableIndices.sort(() => Math.random() - 0.5);
    currentSessionQuestions = shuffled.slice(0, MATH_QUIZ_TOTAL).map(i => ({
        ...questionBank[i],
        originalIndex: i
    }));
    
    // Mark these questions as used
    currentSessionQuestions.forEach(q => {
        if (!usedQuestionIndices.includes(q.originalIndex)) {
            usedQuestionIndices.push(q.originalIndex);
        }
    });
}

function generateMathQuizQuestion() {
    if (mathQuizCurrent >= MATH_QUIZ_TOTAL) {
        // Hide game content
        const gameContent = document.querySelector('#mathQuizModal .game-content > .game-question');
        const gameOptions = document.getElementById('mathQuizOptions');
        const feedback = document.getElementById('mathQuizFeedback');
        if (gameContent) gameContent.style.display = 'none';
        if (gameOptions) gameOptions.style.display = 'none';
        if (feedback) feedback.style.display = 'none';
        
        // Show results screen
        const resultsContainer = document.getElementById('mathQuizResults');
        const resultText = document.getElementById('mathQuizResultText');
        const viewSummaryBtn = document.getElementById('mathQuizViewSummary');
        const resetBtn = document.getElementById('mathQuizReset');
        
        if (resultsContainer && resultText) {
            const percentage = Math.round((mathQuizScore / MATH_QUIZ_MAX) * 100);
            resultText.textContent = `${t('sessionComplete')} ${mathQuizScore} / ${MATH_QUIZ_MAX} (${percentage}%)`;
            resultsContainer.style.display = 'block';
        }
        
        if (viewSummaryBtn) {
            viewSummaryBtn.style.display = 'block';
            viewSummaryBtn.onclick = () => {
                resultsContainer.style.display = 'none';
                const summaryContainer = document.getElementById('mathQuizSummary');
                if (summaryContainer) {
                    renderMathQuizSummary();
                    summaryContainer.style.display = 'block';
                }
                if (resetBtn) resetBtn.style.display = 'block';
            };
        }
        return;
    }

    // Get current question from session questions
    const questionData = currentSessionQuestions[mathQuizCurrent];
    const question = questionData.q;
    const answer = questionData.a;
    const wrongAnswers = questionData.wrong;

    currentMathQuizAnswer = answer;
    currentMathQuizQuestion = { 
        topic: questionData.topic, 
        question: question, 
        answer: answer, 
        type: questionData.type 
    };

    const questionEl = document.getElementById('mathQuizQuestion');
    questionEl.textContent = question;

    // Create 4 options
    const options = [answer, ...wrongAnswers].sort(() => Math.random() - 0.5);

    const optionsContainer = document.getElementById('mathQuizOptions');
    optionsContainer.innerHTML = '';

    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'game-btn';
        btn.textContent = opt;
        btn.onclick = () => checkMathQuiz(opt);
        optionsContainer.appendChild(btn);
    });

    document.getElementById('mathQuizFeedback').textContent = '';
    const counterEl = document.getElementById('mathQuizCounter');
    if (counterEl) counterEl.textContent = `${t('question')} ${mathQuizCurrent + 1} / ${MATH_QUIZ_TOTAL}`;
}

// Friendly roast/encouragement lines for <60% performance
function getRoastLine(percent) {
    if (percent >= 60) return null;
    const linesEn = [
        'Oof! Even the calculator winced. Try slower and steadier!',
        'That score is asking for a rematch. Round two?',
        'Math said “nice try” — you say “watch me next time.”',
        'Plot twist: the answers weren’t random. Let’s tighten the basics!',
        'You’re one practice away from a comeback. Ready to level up?'
    ];
    const linesKn = [
        'ಅಯ್ಯೋ! ಕ್ಯಾಲ್ಕ್ಯುಲೇಟರ್ ಕೂಡ ಅಚ್ಚರಿಪಟ್ಟಿದೆ. ನಿಧಾನವಾಗಿ ಪ್ರಯತ್ನಿಸಿ!',
        'ಈ ಅಂಕಗಳು ರಿಮ್ಯಾಚ್ ಕೇಳುತ್ತಿವೆ. ಮತ್ತೊಂದು ಸುತ್ತೆ?',
        'ಗಣಿತ ಹೇಳಿತು “ಚೆನ್ನಾಗಿದೆ” — ನೀವು ಹೇಳಿ “ಮುಂದಿನ ಬಾರಿ ನೋಡೋಣ.”',
        'ಪ್ಲಾಟ್ ಟ್ವಿಸ್ಟ್: ಉತ್ತರಗಳು ಯಾದೃಚ್ಛಿಕವಲ್ಲ. ಮೂಲಗಳನ್ನು ಗಟ್ಟಿಗೊಳಿಸೋಣ!',
        'ಒಂದು ಅಭ್ಯಾಸ ಸಾಕು – ಮುಂದಿನ ಬಾರಿಗೆ ಗೆಲುವು ನಿಮ್ಮದೇ!'
    ];
    const pool = gamesLanguage === 'kn' ? linesKn : linesEn;
    return pool[Math.floor(Math.random() * pool.length)];
}

function checkMathQuiz(selected) {
    const feedback = document.getElementById('mathQuizFeedback');
    const progressEl = document.getElementById('mathQuizProgress');
    const optionButtons = document.querySelectorAll('#mathQuizOptions .game-btn');

    if (selected === currentMathQuizAnswer) {
        optionButtons.forEach(btn => {
            if (btn.textContent === selected) {
                btn.style.background = 'linear-gradient(135deg, #5DD179 0%, #4CAF50 100%)';
                btn.style.transform = 'scale(1.1)';
                btn.style.boxShadow = '0 0 20px rgba(93, 209, 121, 0.6)';
            }
            btn.disabled = true;
        });

        mathQuizScore = Math.min(mathQuizScore + 5, MATH_QUIZ_MAX);
        document.getElementById('mathQuizScore').textContent = `${mathQuizScore} / ${MATH_QUIZ_MAX}`;
        if (progressEl) progressEl.style.width = `${Math.round((mathQuizScore / MATH_QUIZ_MAX) * 100)}%`;
        feedback.textContent = '';
        mathQuizCurrent++;
        setTimeout(generateMathQuizQuestion, 800);
    } else {
        optionButtons.forEach(btn => {
            if (btn.textContent === selected) {
                btn.style.background = 'linear-gradient(135deg, #FF6B6B 0%, #EE5A52 100%)';
                btn.style.transform = 'scale(0.95)';
                btn.style.boxShadow = '0 0 20px rgba(255, 107, 107, 0.6)';
            } else if (btn.textContent === currentMathQuizAnswer) {
                btn.style.background = 'linear-gradient(135deg, #5DD179 0%, #4CAF50 100%)';
                btn.style.boxShadow = '0 0 20px rgba(93, 209, 121, 0.6)';
            }
            btn.disabled = true;
        });

        const { topic, question, answer, type } = currentMathQuizQuestion;
        mathQuizMistakes.push({ topic, question, correct: answer, selected, type });
        feedback.textContent = '';
        mathQuizCurrent++;
        setTimeout(generateMathQuizQuestion, 1200);
    }
}

function resetMathQuiz() {
    mathQuizScore = 0;
    mathQuizCurrent = 0;
    mathQuizMistakes = [];
    initializeMathQuiz(); // Get new set of questions
    
    // UI elements
    const scoreEl = document.getElementById('mathQuizScore');
    const feedback = document.getElementById('mathQuizFeedback');
    const progressEl = document.getElementById('mathQuizProgress');
    const resetBtn = document.getElementById('mathQuizReset');
    const counterEl = document.getElementById('mathQuizCounter');
    const summaryContainer = document.getElementById('mathQuizSummary');
    const resultsContainer = document.getElementById('mathQuizResults');
    const gameContent = document.querySelector('#mathQuizModal .game-content > .game-question');
    const gameOptions = document.getElementById('mathQuizOptions');
    
    // Reset scores and progress
    if (scoreEl) scoreEl.textContent = `${mathQuizScore} / ${MATH_QUIZ_MAX}`;
    if (progressEl) progressEl.style.width = '0%';
    if (counterEl) counterEl.textContent = `${t('question')} 1 / ${MATH_QUIZ_TOTAL}`;
    if (feedback) feedback.textContent = '';
    
    // Hide results and summary
    if (resetBtn) resetBtn.style.display = 'none';
    if (summaryContainer) {
        summaryContainer.style.display = 'none';
        summaryContainer.innerHTML = '';
    }
    if (resultsContainer) resultsContainer.style.display = 'none';
    
    // Show game content
    if (gameContent) gameContent.style.display = 'block';
    if (gameOptions) gameOptions.style.display = 'grid';
    
    generateMathQuizQuestion();
}

function renderMathQuizSummary() {
    const container = document.getElementById('mathQuizSummary');
    if (!container) return;
    
    // Check for low score and add roast
    const percentage = (mathQuizScore / MATH_QUIZ_MAX) * 100;
    let html = '';
    
    if (percentage < 60 && percentage > 0) {
        const roast = getRandomRoast();
        html += `<div style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(219, 39, 119, 0.15) 100%); border: 2px solid rgba(236, 72, 153, 0.5); border-radius: 1rem; padding: 1.25rem; margin-bottom: 1.5rem; text-align: center; backdrop-filter: blur(10px);">`;
        html += `<div style="font-size: 1.3rem; font-weight: 900; color: #ec4899; text-shadow: 0 2px 8px rgba(236, 72, 153, 0.3);">${roast}</div>`;
        html += `</div>`;
    }
    
    if (mathQuizMistakes.length === 0) {
        html += `<p style="color: #90EE90; font-size: 1.1rem;">${t('perfectScore')}</p>`;
        container.innerHTML = html;
        return;
    }

    html += `<div class="summary-title">${t('whatToReview')}</div>`;

    // Group by topic
    const byTopic = {};
    mathQuizMistakes.forEach(m => {
        const topic = m.topic || 'Arithmetic';
        if (!byTopic[topic]) byTopic[topic] = [];
        byTopic[topic].push(m);
    });

    const topicColors = { 
        'Arithmetic': '#FFB347', 
        'Shapes': '#A976C9', 
        'Volumes': '#5DD179', 
        'Theorems': '#5BA3F5',
        'Algebra': '#FF6B9D',
        'Axioms': '#FFA07A'
    };

    // Tips for each topic
    const topicTips = {
        'Arithmetic': {
            en: '💡 <strong>Tips to Improve:</strong><br>• Double-check your calculations step by step<br>• Use scratch paper for complex operations<br>• Remember BODMAS/PEMDAS order: Brackets, Orders, Division/Multiplication, Addition/Subtraction<br>• For fractions: find common denominators before adding/subtracting<br>• For percentages: remember "of" means multiply (20% of 150 = 0.20 × 150)',
            kn: '💡 <strong>ಸುಧಾರಣೆಗೆ ಸಲಹೆಗಳು:</strong><br>• ಹಂತ ಹಂತವಾಗಿ ನಿಮ್ಮ ಲೆಕ್ಕಗಳನ್ನು ಪರಿಶೀಲಿಸಿ<br>• ಸಂಕೀರ್ಣ ಕಾರ್ಯಗಳಿಗೆ ಕರಡು ಕಾಗದವನ್ನು ಬಳಸಿ<br>• BODMAS ಕ್ರಮವನ್ನು ನೆನಪಿಡಿ<br>• ಭಿನ್ನರಾಶಿಗಳಿಗೆ: ಸೇರಿಸುವ/ಕಳೆಯುವ ಮೊದಲು ಸಾಮಾನ್ಯ ಛೇದವನ್ನು ಹುಡುಕಿ<br>• ಶೇಕಡಾವಾರುಗಳಿಗೆ: "ನ" ಎಂದರೆ ಗುಣಿಸಿ ಎಂದು ನೆನಪಿಡಿ'
        },
        'Shapes': {
            en: '💡 <strong>Tips to Improve:</strong><br>• Memorize key formulas: Circle (Area=πr², Circumference=2πr), Square (Area=a², Perimeter=4a)<br>• Draw diagrams to visualize the problem<br>• Identify what values are given (radius, side, length, width, base, height)<br>• Check if you need area (space inside) or perimeter (boundary length)<br>• Remember: π ≈ 22/7 or 3.14 in calculations',
            kn: '💡 <strong>ಸುಧಾರಣೆಗೆ ಸಲಹೆಗಳು:</strong><br>• ಮುಖ್ಯ ಸೂತ್ರಗಳನ್ನು ನೆನಪಿಡಿ: ವೃತ್ತ (ವಿಸ್ತೀರ್ಣ=πr², ಸುತ್ತಳತೆ=2πr), ಚೌಕ (ವಿಸ್ತೀರ್ಣ=a², ಪರಿಮಿತಿ=4a)<br>• ಸಮಸ್ಯೆಯನ್ನು ದೃಶ್ಯೀಕರಿಸಲು ರೇಖಾಚಿತ್ರಗಳನ್ನು ಬರೆಯಿರಿ<br>• ಯಾವ ಮೌಲ್ಯಗಳನ್ನು ನೀಡಲಾಗಿದೆ ಎಂದು ಗುರುತಿಸಿ<br>• ನಿಮಗೆ ವಿಸ್ತೀರ್ಣ ಬೇಕೇ ಅಥವಾ ಪರಿಮಿತಿ ಬೇಕೇ ಎಂದು ಪರಿಶೀಲಿಸಿ<br>• ನೆನಪಿಡಿ: π ≈ 22/7 ಅಥವಾ 3.14'
        },
        'Volumes': {
            en: '💡 <strong>Tips to Improve:</strong><br>• Understand the difference: Volume (space inside 3D shape) vs Surface Area (total outer area)<br>• Key formulas: Cube (V=a³, SA=6a²), Cylinder (V=πr²h), Sphere (V=⁴⁄₃πr³, SA=4πr²), Cone (V=⅓πr²h)<br>• Identify the shape first, then pick the right formula<br>• Pay attention to what is asked: volume or surface area<br>• Note the fraction coefficients: ⅓ for cone, ⁴⁄₃ for sphere',
            kn: '💡 <strong>ಸುಧಾರಣೆಗೆ ಸಲಹೆಗಳು:</strong><br>• ವ್ಯತ್ಯಾಸವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ: ಪರಿಮಾಣ (3D ಆಕೃತಿಯ ಒಳಗಿನ ಜಾಗ) ವಿರುದ್ಧ ಮೇಲ್ಮೈ ವಿಸ್ತೀರ್ಣ<br>• ಮುಖ್ಯ ಸೂತ್ರಗಳು: ಘನ (V=a³, SA=6a²), ಸಿಲಿಂಡರ್ (V=πr²h), ಗೋಳ (V=⁴⁄₃πr³, SA=4πr²), ಶಂಕು (V=⅓πr²h)<br>• ಮೊದಲು ಆಕೃತಿಯನ್ನು ಗುರುತಿಸಿ, ನಂತರ ಸರಿಯಾದ ಸೂತ್ರವನ್ನು ಆರಿಸಿ<br>• ಏನು ಕೇಳಲಾಗಿದೆ ಎಂಬುದರ ಬಗ್ಗೆ ಗಮನ ಹರಿಸಿ<br>• ಭಿನ್ನರಾಶಿ ಗುಣಾಂಕಗಳನ್ನು ಗಮನಿಸಿ: ಶಂಕುಗಾಗಿ ⅓, ಗೋಳಕ್ಕಾಗಿ ⁴⁄₃'
        },
        'Theorems': {
            en: '💡 <strong>Tips to Improve:</strong><br>• Pythagoras Theorem: a²+b²=c² (where c is the longest side - hypotenuse)<br>• Identify which side is missing in the problem<br>• Remember common Pythagorean triplets: (3,4,5), (5,12,13), (8,15,17), (7,24,25)<br>• When finding c: add a² and b², then take square root<br>• When finding a or b: subtract known side² from c², then take square root<br>• Always check: the hypotenuse (c) must be the longest side',
            kn: '💡 <strong>ಸುಧಾರಣೆಗೆ ಸಲಹೆಗಳು:</strong><br>• ಪೈಥಾಗರಸ್ ಪ್ರಮೇಯ: a²+b²=c² (c ಅತಿ ಉದ್ದದ ಭುಜ - ಕರ್ಣ)<br>• ಸಮಸ್ಯೆಯಲ್ಲಿ ಯಾವ ಭುಜ ಕಾಣೆಯಾಗಿದೆ ಎಂದು ಗುರುತಿಸಿ<br>• ಸಾಮಾನ್ಯ ಪೈಥಾಗರಿಯನ್ ತ್ರಿಕಗಳನ್ನು ನೆನಪಿಡಿ: (3,4,5), (5,12,13), (8,15,17)<br>• c ಹುಡುಕುವಾಗ: a² ಮತ್ತು b² ಸೇರಿಸಿ, ನಂತರ ವರ್ಗಮೂಲ ತೆಗೆಯಿರಿ<br>• a ಅಥವಾ b ಹುಡುಕುವಾಗ: c² ನಿಂದ ತಿಳಿದಿರುವ ಭುಜ² ಕಳೆಯಿರಿ<br>• ಯಾವಾಗಲೂ ಪರಿಶೀಲಿಸಿ: ಕರ್ಣ (c) ಅತಿ ಉದ್ದದ ಭುಜವಾಗಿರಬೇಕು'
        },
        'Algebra': {
            en: '💡 <strong>Tips to Improve:</strong><br>• Goal: isolate the variable (x) on one side of the equation<br>• Whatever you do to one side, do the same to the other side<br>• To remove addition: subtract from both sides (2x+5=13 → 2x=13-5)<br>• To remove subtraction: add to both sides<br>• To remove multiplication: divide both sides (2x=8 → x=8÷2)<br>• To remove division: multiply both sides (x/4=3 → x=3×4)<br>• Always verify: substitute your answer back into the original equation',
            kn: '💡 <strong>ಸುಧಾರಣೆಗೆ ಸಲಹೆಗಳು:</strong><br>• ಗುರಿ: ಸಮೀಕರಣದ ಒಂದು ಬದಿಯಲ್ಲಿ ಚರವನ್ನು (x) ಪ್ರತ್ಯೇಕಿಸಿ<br>• ಒಂದು ಬದಿಗೆ ಏನು ಮಾಡಿದರೂ, ಇನ್ನೊಂದು ಬದಿಗೆ ಅದೇ ಮಾಡಿ<br>• ಸಂಕಲನವನ್ನು ತೆಗೆದುಹಾಕಲು: ಎರಡೂ ಭಾಗದಿಂದ ಕಳೆಯಿರಿ<br>• ವ್ಯವಕಲನವನ್ನು ತೆಗೆದುಹಾಕಲು: ಎರಡೂ ಭಾಗಕ್ಕೆ ಸೇರಿಸಿ<br>• ಗುಣಾಕಾರವನ್ನು ತೆಗೆದುಹಾಕಲು: ಎರಡೂ ಭಾಗವನ್ನು ಭಾಗಿಸಿ<br>• ಭಾಗಾಕಾರವನ್ನು ತೆಗೆದುಹಾಕಲು: ಎರಡೂ ಭಾಗವನ್ನು ಗುಣಿಸಿ<br>• ಯಾವಾಗಲೂ ಪರಿಶೀಲಿಸಿ: ನಿಮ್ಮ ಉತ್ತರವನ್ನು ಮೂಲ ಸಮೀಕರಣದಲ್ಲಿ ಹಿಂತಿರುಗಿಸಿ'
        },
        'Axioms': {
            en: '💡 <strong>Tips to Improve:</strong><br>• Axioms are fundamental truths accepted without proof<br>• Euclid\'s key axioms to remember:<br>  - Things equal to the same thing are equal to each other<br>  - If equals are added to equals, results are equal<br>  - If equals are subtracted from equals, results are equal<br>  - The whole is greater than the part<br>  - Things which coincide with one another are equal<br>• Review the Learning section for detailed explanations',
            kn: '💡 <strong>ಸುಧಾರಣೆಗೆ ಸಲಹೆಗಳು:</strong><br>• ಸ್ವಯಂಸಿದ್ಧಗಳು ಪುರಾವೆ ಇಲ್ಲದೆ ಒಪ್ಪಿಕೊಂಡ ಮೂಲಭೂತ ಸತ್ಯಗಳು<br>• ಯೂಕ್ಲಿಡ್‌ನ ಪ್ರಮುಖ ಸ್ವಯಂಸಿದ್ಧಗಳನ್ನು ನೆನಪಿಡಿ:<br>  - ಒಂದೇ ವಸ್ತುವಿಗೆ ಸಮಾನವಾದ ವಸ್ತುಗಳು ಪರಸ್ಪರ ಸಮಾನ<br>  - ಸಮಾನಗಳಿಗೆ ಸಮಾನಗಳನ್ನು ಸೇರಿಸಿದರೆ, ಫಲಿತಾಂಶಗಳು ಸಮಾನ<br>  - ಸಮಾನಗಳಿಂದ ಸಮಾನಗಳನ್ನು ಕಳೆದರೆ, ಫಲಿತಾಂಶಗಳು ಸಮಾನ<br>  - ಸಂಪೂರ್ಣವು ಭಾಗಕ್ಕಿಂತ ದೊಡ್ಡದು<br>• ವಿವರವಾದ ವಿವರಣೆಗಾಗಿ ಕಲಿಕೆ ವಿಭಾಗವನ್ನು ಪರಿಶೀಲಿಸಿ'
        }
    };

    Object.keys(byTopic).forEach(topic => {
        const mistakes = byTopic[topic];
        const color = topicColors[topic] || '#FFB347';
        const tips = topicTips[topic] || topicTips['Arithmetic'];
        
        html += `<div class="summary-group" style="border-color: ${color};">`;
        html += `<div class="summary-group-title">${topic} (${mistakes.length} ${mistakes.length > 1 ? t('mistakes') : t('mistake')})</div>`;
        
        // Show all mistakes for this topic
        html += '<div class="summary-visual"><div class="carry-steps">';
        mistakes.forEach((mistake, idx) => {
            html += `<div class="step" style="margin-bottom: 12px; padding: 8px; background: rgba(255,255,255,0.05); border-radius: 6px;">`;
            html += `<div style="font-weight: 600; margin-bottom: 4px;">${idx + 1}. ${mistake.question}</div>`;
            html += `<div style="color: #90EE90; margin-left: 12px;">✓ ${gamesLanguage === 'kn' ? 'ಸರಿಯಾದ ಉತ್ತರ' : 'Correct'}: ${mistake.correct}</div>`;
            html += `<div style="color: #FFB6C1; margin-left: 12px;">✗ ${gamesLanguage === 'kn' ? 'ನಿಮ್ಮ ಉತ್ತರ' : 'Your answer'}: ${mistake.selected}</div>`;
            html += `</div>`;
        });
        html += '</div></div>';
        
        // Add tips section
        html += `<div style="margin-top: 15px; padding: 12px; background: rgba(255,255,255,0.08); border-left: 3px solid ${color}; border-radius: 6px; line-height: 1.6;">`;
        html += gamesLanguage === 'kn' ? tips.kn : tips.en;
        html += '</div>';
        
        html += '</div>';
    });

    container.innerHTML = html;
}

// Pattern Builder
// Pattern Builder (fixed questions per session)
let patternScore = 0;
let currentPattern = [];
let currentPatternAnswer = 0;
let currentPatternStep = 0; // track the step for mistake analysis
let currentPatternType = 'arithmetic';
const PATTERN_MAX = 150; // cap for display; not used for session end
const PATTERN_TOTAL = 10; // fixed number of questions per session
let patternCurrent = 0;
let patternMistakes = []; // collect wrong answers for summary

function generatePattern() {
    // If session finished, show results screen
    if (patternCurrent >= PATTERN_TOTAL) {
        // Hide question UI
        document.getElementById('patternDisplay').style.display = 'none';
        document.getElementById('patternInput').style.display = 'none';
        document.getElementById('patternCheck').style.display = 'none';
        document.getElementById('patternFeedback').style.display = 'none';
        
        // Show results screen
        const resultsContainer = document.getElementById('patternResults');
        const resultText = document.getElementById('patternResultText');
        const viewSummaryBtn = document.getElementById('patternViewSummary');
        const resetBtn = document.getElementById('patternReset');
        
        const max = PATTERN_TOTAL * 15;
        const percentage = (patternScore / max) * 100;
        let html = '';
        
        // Add roast if score < 60%
        if (percentage < 60 && percentage > 0) {
            const roast = getRandomRoast();
            html += `<div style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(219, 39, 119, 0.15) 100%); border: 2px solid rgba(236, 72, 153, 0.5); border-radius: 1rem; padding: 1.25rem; margin-bottom: 1.5rem; text-align: center; backdrop-filter: blur(10px);">`;
            html += `<div style="font-size: 1.3rem; font-weight: 900; color: #ec4899; text-shadow: 0 2px 8px rgba(236, 72, 153, 0.3);">${roast}</div>`;
            html += `</div>`;
        }
        
        html += `<div style="font-size: 1.8rem; font-weight: 900; margin-bottom: 1rem;">${t('sessionComplete')}</div>`;
        html += `<div style="font-size: 2rem; font-weight: 900; color: #5DD179;">${patternScore} / ${max}</div>`;
        
        resultText.innerHTML = html;
        resultsContainer.style.display = 'block';
        
        if (patternMistakes.length > 0) {
            viewSummaryBtn.style.display = 'block';
            viewSummaryBtn.onclick = () => {
                resultsContainer.style.display = 'none';
                renderPatternSummary();
                document.getElementById('patternSummary').style.display = 'block';
                resetBtn.style.display = 'block';
            };
        } else {
            resetBtn.style.display = 'block';
        }
        
        return;
    }
    // Choose pattern type
    const types = ['arithmetic', 'geometric', 'alternating', 'squares'];
    currentPatternType = types[Math.floor(Math.random() * types.length)];
    const start = Math.floor(Math.random() * 5) + 1;
    const step = Math.floor(Math.random() * 5) + 1;

    if (currentPatternType === 'arithmetic') {
        currentPattern = [start, start + step, start + step * 2];
        currentPatternAnswer = start + step * 3;
        currentPatternStep = step;
    } else if (currentPatternType === 'geometric') {
        const ratio = Math.floor(Math.random() * 3) + 2; // 2..4
        currentPattern = [start, start * ratio, start * ratio * ratio];
        currentPatternAnswer = start * ratio * ratio * ratio;
        currentPatternStep = ratio;
    } else if (currentPatternType === 'alternating') {
        const step2 = Math.floor(Math.random() * 5) + 1;
        // Pattern: +step, -step2, +step, -step2, ...
        currentPattern = [start, start + step, start + step - step2];
        currentPatternAnswer = start + step - step2 + step;
        currentPatternStep = step; // store primary step
    } else if (currentPatternType === 'squares') {
        const base = Math.floor(Math.random() * 5) + 2; // 2..6
        currentPattern = [base * base, (base + 1) * (base + 1), (base + 2) * (base + 2)];
        currentPatternAnswer = (base + 3) * (base + 3);
        currentPatternStep = 0;
    }
    
    const display = document.getElementById('patternDisplay');
    display.innerHTML = '';
    
    currentPattern.forEach(num => {
        const box = document.createElement('div');
        box.className = 'pattern-box';
        box.textContent = num;
        display.appendChild(box);
    });
    
    const box = document.createElement('div');
    box.className = 'pattern-box';
    box.textContent = '?';
    display.appendChild(box);
    
    document.getElementById('patternInput').value = '';
    document.getElementById('patternFeedback').textContent = '';
    const counterEl = document.getElementById('patternCounter');
    if (counterEl) counterEl.textContent = `${t('question')} ${patternCurrent + 1} / ${PATTERN_TOTAL}`;
}

function checkPattern() {
    const input = document.getElementById('patternInput');
    const userAnswer = parseInt(input.value);
    const feedback = document.getElementById('patternFeedback');
    const progressEl = document.getElementById('patternProgress');
    
    if (userAnswer === currentPatternAnswer) {
        patternScore = Math.min(patternScore + 15, PATTERN_MAX);
        document.getElementById('patternScore').textContent = `${patternScore} / ${PATTERN_MAX}`;
        if (progressEl) progressEl.style.width = `${Math.round((patternScore / PATTERN_MAX) * 100)}%`;
        feedback.textContent = '';
        patternCurrent++;
        setTimeout(generatePattern, 400);
    } else {
        // Wrong: silently record mistake, no feedback, auto-advance with 0 points
        patternMistakes.push({
            pattern: [...currentPattern],
            step: currentPatternStep,
            type: currentPatternType,
            correct: currentPatternAnswer,
            selected: userAnswer
        });
        feedback.textContent = '';
        patternCurrent++;
        setTimeout(generatePattern, 400);
    }
}

function resetPattern() {
    patternScore = 0;
    patternCurrent = 0;
    patternMistakes = []; // clear mistakes
    const scoreEl = document.getElementById('patternScore');
    const feedback = document.getElementById('patternFeedback');
    const progressEl = document.getElementById('patternProgress');
    const resetBtn = document.getElementById('patternReset');
    const counterEl = document.getElementById('patternCounter');
    const summaryContainer = document.getElementById('patternSummary');
    const resultsContainer = document.getElementById('patternResults');
    const displayEl = document.getElementById('patternDisplay');
    const inputEl = document.getElementById('patternInput');
    const checkBtn = document.getElementById('patternCheck');
    
    if (scoreEl) scoreEl.textContent = `${patternScore} / ${PATTERN_MAX}`;
    if (progressEl) progressEl.style.width = '0%';
    if (resetBtn) resetBtn.style.display = 'none';
    if (feedback) feedback.textContent = '';
    if (counterEl) counterEl.textContent = `${t('question')} 1 / ${PATTERN_TOTAL}`;
    if (summaryContainer) {
        summaryContainer.style.display = 'none';
        summaryContainer.innerHTML = '';
    }
    if (resultsContainer) resultsContainer.style.display = 'none';
    if (displayEl) displayEl.style.display = 'block';
    if (inputEl) inputEl.style.display = 'block';
    if (checkBtn) checkBtn.style.display = 'block';
    generatePattern();
}

function renderPatternSummary() {
    const container = document.getElementById('patternSummary');
    if (!container) return;
    
    // Check for low score and add roast
    const percentage = (patternScore / 100) * 100;
    let html = '';
    
    if (percentage < 60 && percentage > 0) {
        const roast = getRandomRoast();
        html += `<div style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(219, 39, 119, 0.15) 100%); border: 2px solid rgba(236, 72, 153, 0.5); border-radius: 1rem; padding: 1.25rem; margin-bottom: 1.5rem; text-align: center; backdrop-filter: blur(10px);">`;
        html += `<div style="font-size: 1.3rem; font-weight: 900; color: #ec4899; text-shadow: 0 2px 8px rgba(236, 72, 153, 0.3);">${roast}</div>`;
        html += `</div>`;
    }
    
    if (patternMistakes.length === 0) {
        html += `<p style="color: #90EE90; font-size: 1.1rem;">${t('perfectScore')}</p>`;
        container.innerHTML = html;
        return;
    }
    
    html += `<div class="summary-title">${t('whatToReview')}</div>`;

    // Group by type first
    const byType = {};
    patternMistakes.forEach(m => {
        if (!byType[m.type]) byType[m.type] = [];
        byType[m.type].push(m);
    });

    Object.keys(byType).forEach(type => {
        const mistakes = byType[type];
        let border = '#A976C9';
        if (type === 'geometric') border = '#5BA3F5';
        if (type === 'alternating') border = '#FFB347';
        if (type === 'squares') border = '#5DD179';
        html += `<div class="summary-group" style="border-color: ${border};">`;
        if (type === 'arithmetic') {
            // Further group by step
            const groupedByStep = {};
            mistakes.forEach(m => {
                const step = m.step;
                if (!groupedByStep[step]) groupedByStep[step] = [];
                groupedByStep[step].push(m);
            });
            Object.keys(groupedByStep).sort((a,b)=>a-b).forEach(step => {
                const list = groupedByStep[step];
                html += `<div class="summary-group-title">${t('patternsWith')} +${step} (${list.length} ${list.length > 1 ? t('mistakes') : t('mistake')})</div>`;
                const example = list[0];
                html += '<div class="summary-visual">';
                html += '<div class="progression-diagram">';
                example.pattern.forEach((num, i) => {
                    html += '<div class="progression-node">' + num + '</div>';
                    if (i < example.pattern.length - 1) {
                        html += '<div class="progression-arrow">+' + step + ' →</div>';
                    }
                });
                html += '<div class="progression-arrow">+' + step + ' →</div>';
                html += '<div class="progression-node" style="background: rgba(144, 238, 144, 0.3);">' + example.correct + '</div>';
                html += '</div></div>';
            });
        } else if (type === 'geometric') {
            const ratio = mistakes[0].step;
            html += `<div class="summary-group-title">Geometric progression ×${ratio} (${mistakes.length} ${mistakes.length > 1 ? t('mistakes') : t('mistake')})</div>`;
        } else if (type === 'alternating') {
            html += `<div class="summary-group-title">Alternating pattern (+/−) (${mistakes.length} ${mistakes.length > 1 ? t('mistakes') : t('mistake')})</div>`;
        } else if (type === 'squares') {
            html += `<div class="summary-group-title">Square numbers (${mistakes.length} ${mistakes.length > 1 ? t('mistakes') : t('mistake')})</div>`;
        }
        html += '</div>';
    });

    container.innerHTML = html;
}

// (Removed duplicate formula builder state; now defined earlier)

function generateFormulaQuestion() {
    if (formulaCurrent >= FORMULA_TOTAL) {
        // Hide question UI
        const promptEl = document.getElementById('formulaPrompt');
        const targetEl = document.getElementById('formulaTarget');
        const partsEl = document.getElementById('formulaParts');
        const displayEl = document.getElementById('formulaDisplay');
        const submitBtn = document.getElementById('formulaSubmit');
        const clearBtn = document.getElementById('formulaClear');
        if (promptEl) promptEl.style.display = 'none';
        if (targetEl) targetEl.style.display = 'none';
        if (partsEl) partsEl.style.display = 'none';
        if (displayEl) displayEl.style.display = 'none';
        if (submitBtn) submitBtn.style.display = 'none';
        if (clearBtn) clearBtn.style.display = 'none';
        document.getElementById('formulaFeedback').style.display = 'none';
        
        // Show results screen
        const resultsContainer = document.getElementById('formulaResults');
        const resultText = document.getElementById('formulaResultText');
        const viewSummaryBtn = document.getElementById('formulaViewSummary');
        const resetBtn = document.getElementById('formulaReset');
        
        const percentage = (formulaScore / FORMULA_MAX) * 100;
        let html = '';
        
        // Add roast if score < 60%
        if (percentage < 60 && percentage > 0) {
            const roast = getRandomRoast();
            html += `<div style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(219, 39, 119, 0.15) 100%); border: 2px solid rgba(236, 72, 153, 0.5); border-radius: 1rem; padding: 1.25rem; margin-bottom: 1.5rem; text-align: center; backdrop-filter: blur(10px);">`;
            html += `<div style="font-size: 1.3rem; font-weight: 900; color: #ec4899; text-shadow: 0 2px 8px rgba(236, 72, 153, 0.3);">${roast}</div>`;
            html += `</div>`;
        }
        
        html += `<div style="font-size: 1.8rem; font-weight: 900; margin-bottom: 1rem;">${t('sessionComplete')}</div>`;
        html += `<div style="font-size: 2rem; font-weight: 900; color: #5DD179;">${formulaScore} / ${FORMULA_MAX}</div>`;
        
        resultText.innerHTML = html;
        resultsContainer.style.display = 'block';
        
        if (formulaMistakes.length > 0) {
            viewSummaryBtn.style.display = 'block';
            viewSummaryBtn.onclick = () => {
                resultsContainer.style.display = 'none';
                renderFormulaSummary();
                document.getElementById('formulaSummary').style.display = 'block';
                resetBtn.style.display = 'block';
            };
        } else {
            resetBtn.style.display = 'block';
        }
        
        return;
    }

    const question = formulaQuestions[formulaCurrent];
    currentFormulaQuestion = question;
    selectedParts = [];

    document.getElementById('formulaTarget').textContent = question.name;
    document.getElementById('formulaDisplay').innerHTML = '<span class="formula-placeholder">' + (gamesLanguage === 'kn' ? 'ಇಲ್ಲಿ ಸೂತ್ರ ನಿರ್ಮಿಸಿ...' : 'Build formula here...') + '</span>';
    document.getElementById('formulaFeedback').textContent = '';
    
    const counterEl = document.getElementById('formulaCounter');
    if (counterEl) counterEl.textContent = `${t('question')} ${formulaCurrent + 1} / ${FORMULA_TOTAL}`;

    // Render formula parts
    const partsContainer = document.getElementById('formulaParts');
    partsContainer.innerHTML = '';
    
    question.parts.forEach((part, index) => {
        const btn = document.createElement('button');
        btn.className = 'formula-part-btn';
        btn.textContent = part;
        btn.onclick = () => addFormulaPart(part, btn);
        btn.dataset.index = index;
        partsContainer.appendChild(btn);
    });
}

function addFormulaPart(part, btnElement) {
    selectedParts.push(part);
    btnElement.classList.add('used');
    updateFormulaDisplay();
}

function updateFormulaDisplay() {
    const display = document.getElementById('formulaDisplay');
    if (selectedParts.length === 0) {
        display.innerHTML = '<span class="formula-placeholder">' + (gamesLanguage === 'kn' ? 'ಇಲ್ಲಿ ಸೂತ್ರ ನಿರ್ಮಿಸಿ...' : 'Build formula here...') + '</span>';
    } else {
        display.innerHTML = selectedParts.map(p => `<span class="formula-part-selected">${p}</span>`).join('');
    }
}

function clearFormula() {
    selectedParts = [];
    updateFormulaDisplay();
    // Re-enable all buttons
    document.querySelectorAll('.formula-part-btn').forEach(btn => {
        btn.classList.remove('used');
    });
}

function checkFormulaAnswer() {
    if (selectedParts.length === 0) return;

    const feedback = document.getElementById('formulaFeedback');
    const progressEl = document.getElementById('formulaProgress');
    const correctFormula = currentFormulaQuestion.formula.join('');
    const userFormula = selectedParts.join('');

    if (userFormula === correctFormula) {
        formulaScore = Math.min(formulaScore + 10, FORMULA_MAX);
        document.getElementById('formulaScore').textContent = `${formulaScore} / ${FORMULA_MAX}`;
        if (progressEl) progressEl.style.width = `${Math.round((formulaScore / FORMULA_MAX) * 100)}%`;
        
        feedback.textContent = '✓ ' + (gamesLanguage === 'kn' ? 'ಸರಿ!' : 'Correct!');
        feedback.style.color = '#90EE90';
        
        formulaCurrent++;
        setTimeout(() => {
            clearFormula();
            generateFormulaQuestion();
        }, 1200);
    } else {
        formulaMistakes.push({
            name: currentFormulaQuestion.name,
            correct: currentFormulaQuestion.formula.join(' '),
            userAnswer: selectedParts.join(' ')
        });
        
        feedback.textContent = '✗ ' + (gamesLanguage === 'kn' ? 'ತಪ್ಪು. ಸರಿಯಾದುದು: ' : 'Wrong. Correct: ') + currentFormulaQuestion.formula.join(' ');
        feedback.style.color = '#FFB6C1';
        
        formulaCurrent++;
        setTimeout(() => {
            clearFormula();
            generateFormulaQuestion();
        }, 2000);
    }
}

function resetFormula() {
    formulaScore = 0;
    formulaCurrent = 0;
    formulaMistakes = [];
    selectedParts = [];
    const scoreEl = document.getElementById('formulaScore');
    const feedback = document.getElementById('formulaFeedback');
    const progressEl = document.getElementById('formulaProgress');
    const resetBtn = document.getElementById('formulaReset');
    const counterEl = document.getElementById('formulaCounter');
    const summaryContainer = document.getElementById('formulaSummary');
    const resultsContainer = document.getElementById('formulaResults');
    const promptEl = document.getElementById('formulaPrompt');
    const targetEl = document.getElementById('formulaTarget');
    const partsEl = document.getElementById('formulaParts');
    const displayEl = document.getElementById('formulaDisplay');
    const submitBtn = document.getElementById('formulaSubmit');
    const clearBtn = document.getElementById('formulaClear');
    
    if (scoreEl) scoreEl.textContent = `${formulaScore} / ${FORMULA_MAX}`;
    if (progressEl) progressEl.style.width = '0%';
    if (resetBtn) resetBtn.style.display = 'none';
    if (feedback) feedback.textContent = '';
    if (counterEl) counterEl.textContent = `${t('question')} 1 / ${FORMULA_TOTAL}`;
    if (summaryContainer) {
        summaryContainer.style.display = 'none';
        summaryContainer.innerHTML = '';
    }
    if (resultsContainer) resultsContainer.style.display = 'none';
    if (promptEl) promptEl.style.display = 'block';
    if (targetEl) targetEl.style.display = 'block';
    if (partsEl) partsEl.style.display = 'flex';
    if (displayEl) displayEl.style.display = 'block';
    if (submitBtn) submitBtn.style.display = 'block';
    if (clearBtn) clearBtn.style.display = 'block';
    // Shuffle formula questions for variety, then generate
    formulaQuestions = formulaQuestions.sort(() => Math.random() - 0.5);
    generateFormulaQuestion();
}

function renderFormulaSummary() {
    const container = document.getElementById('formulaSummary');
    if (!container) return;
    
    // Check for low score and add roast
    const percentage = (formulaScore / FORMULA_MAX) * 100;
    let html = '';
    
    if (percentage < 60 && percentage > 0) {
        const roast = getRandomRoast();
        html += `<div style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(219, 39, 119, 0.15) 100%); border: 2px solid rgba(236, 72, 153, 0.5); border-radius: 1rem; padding: 1.25rem; margin-bottom: 1.5rem; text-align: center; backdrop-filter: blur(10px);">`;
        html += `<div style="font-size: 1.3rem; font-weight: 900; color: #ec4899; text-shadow: 0 2px 8px rgba(236, 72, 153, 0.3);">${roast}</div>`;
        html += `</div>`;
    }
    
    if (formulaMistakes.length === 0) {
        html += `<p style="color: #90EE90; font-size: 1.1rem;">${t('perfectScore')}</p>`;
        container.innerHTML = html;
        return;
    }

    html += `<div class="summary-title">${t('whatToReview')}</div>`;
    
    formulaMistakes.forEach(m => {
        html += '<div class="summary-group" style="border-color: #FFB347;">';
        html += `<div class="summary-group-title">${m.name}</div>`;
        html += '<div class="summary-visual">';
        html += '<div class="carry-steps">';
        html += `<div class="step">${gamesLanguage === 'kn' ? 'ಸರಿಯಾದ ಸೂತ್ರ' : 'Correct formula'}: <strong>${m.correct}</strong></div>`;
        html += `<div class="step" style="color: #FFB6C1;">${gamesLanguage === 'kn' ? 'ನಿಮ್ಮ ಉತ್ತರ' : 'Your answer'}: ${m.userAnswer}</div>`;
        html += '</div></div></div>';
    });

    container.innerHTML = html;
}

// Initialize games
document.addEventListener('DOMContentLoaded', () => {
    syncLanguage(); // Initialize language from localStorage
    
    // Listen for language changes
    window.addEventListener('languageChanged', (e) => {
        gamesLanguage = e.detail.language;
        // Re-render any visible game elements if needed
        const mathQuizCounter = document.getElementById('mathQuizCounter');
        const patternCounter = document.getElementById('patternCounter');
        
        if (mathQuizCounter && mathQuizCounter.textContent) {
            const match = mathQuizCounter.textContent.match(/(\d+) \/ (\d+)/);
            if (match) mathQuizCounter.textContent = `${t('question')} ${match[1]} / ${match[2]}`;
        }
        
        if (patternCounter && patternCounter.textContent) {
            const match = patternCounter.textContent.match(/(\d+) \/ (\d+)/);
            if (match) patternCounter.textContent = `${t('question')} ${match[1]} / ${match[2]}`;
        }
    });
    
    document.getElementById('patternCheck').onclick = checkPattern;
    const mathQuizResetBtn = document.getElementById('mathQuizReset');
    if (mathQuizResetBtn) mathQuizResetBtn.onclick = resetMathQuiz;
    const patternResetBtn = document.getElementById('patternReset');
    if (patternResetBtn) patternResetBtn.onclick = resetPattern;
    const formulaResetBtn = document.getElementById('formulaReset');
    if (formulaResetBtn) formulaResetBtn.onclick = resetFormula;
    // Initialize score displays with max values
    const mathQuizScoreEl = document.getElementById('mathQuizScore');
    if (mathQuizScoreEl) mathQuizScoreEl.textContent = `${mathQuizScore} / ${MATH_QUIZ_MAX}`;
    const patternScoreEl = document.getElementById('patternScore');
    if (patternScoreEl) patternScoreEl.textContent = `${patternScore} / ${PATTERN_MAX}`;
    const mathQuizProgressEl = document.getElementById('mathQuizProgress');
    if (mathQuizProgressEl) mathQuizProgressEl.style.width = '0%';
    const patternProgressEl = document.getElementById('patternProgress');
    if (patternProgressEl) patternProgressEl.style.width = '0%';
    const mathQuizCounterEl = document.getElementById('mathQuizCounter');
    if (mathQuizCounterEl) mathQuizCounterEl.textContent = `Question 1 / ${MATH_QUIZ_TOTAL}`;
    const patternCounterEl = document.getElementById('patternCounter');
    if (patternCounterEl) patternCounterEl.textContent = `Question 1 / ${PATTERN_TOTAL}`;
});

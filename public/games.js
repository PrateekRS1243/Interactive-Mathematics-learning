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
        checkAnswer: 'Check Answer'
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
        checkAnswer: 'ಉತ್ತರ ಪರಿಶೀಲಿಸಿ'
    }
};

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
    if (gameType === 'numberMatch') {
        generateNumberMatchQuestion();
    } else if (gameType === 'pattern') {
        generatePattern();
    }
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
        }
    }
}

// Number Match Game
// Number Match Game (fixed questions per session)
let numberMatchScore = 0;
let currentNumberMatchAnswer = 0;
let currentNumberMatchQuestion = { num1: 0, num2: 0, answer: 0 }; // track current question
const NUMBER_MATCH_MAX = 100; // cap for display; not used for session end
const NUMBER_MATCH_TOTAL = 10; // fixed number of questions per session
let numberMatchCurrent = 0;
let numberMatchMistakes = []; // collect wrong answers for summary

function generateNumberMatchQuestion() {
    // If session finished, show summary and stop
    if (numberMatchCurrent >= NUMBER_MATCH_TOTAL) {
        const feedback = document.getElementById('numberMatchFeedback');
        const resetBtn = document.getElementById('numberMatchReset');
        const summaryContainer = document.getElementById('numberMatchSummary');
        if (feedback) feedback.textContent = `${t('sessionComplete')} ${numberMatchScore} / ${NUMBER_MATCH_TOTAL * 10}`;
        if (resetBtn) {
            resetBtn.style.display = 'block';
            resetBtn.textContent = t('playAgain');
        }
        if (summaryContainer) {
            renderNumberMatchSummary();
            summaryContainer.style.display = 'block';
        }
        return;
    }
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    currentNumberMatchAnswer = num1 + num2;
    
    const question = document.getElementById('numberMatchQuestion');
    question.textContent = `${num1} + ${num2} = ?`;
    
    const wrong1 = currentNumberMatchAnswer + Math.floor(Math.random() * 5) + 1;
    const wrong2 = currentNumberMatchAnswer - Math.floor(Math.random() * 5) - 1;
    const options = [currentNumberMatchAnswer, wrong1, wrong2].sort(() => Math.random() - 0.5);
    
    const optionsContainer = document.getElementById('numberMatchOptions');
    optionsContainer.innerHTML = '';
    
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'game-btn';
        btn.textContent = opt;
        btn.onclick = () => checkNumberMatch(opt);
        optionsContainer.appendChild(btn);
    });
    
    document.getElementById('numberMatchFeedback').textContent = '';
    const counterEl = document.getElementById('numberMatchCounter');
    if (counterEl) counterEl.textContent = `${t('question')} ${numberMatchCurrent + 1} / ${NUMBER_MATCH_TOTAL}`;
    
    // Store current question data for potential mistake tracking
    currentNumberMatchQuestion = { num1, num2, answer: currentNumberMatchAnswer };
}

function checkNumberMatch(selected) {
    const feedback = document.getElementById('numberMatchFeedback');
    const progressEl = document.getElementById('numberMatchProgress');
    
    // Get all option buttons
    const optionButtons = document.querySelectorAll('#numberMatchOptions .game-btn');
    
    if (selected === currentNumberMatchAnswer) {
        // Highlight correct answer in green
        optionButtons.forEach(btn => {
            if (parseInt(btn.textContent) === selected) {
                btn.style.background = 'linear-gradient(135deg, #5DD179 0%, #4CAF50 100%)';
                btn.style.transform = 'scale(1.1)';
                btn.style.boxShadow = '0 0 20px rgba(93, 209, 121, 0.6)';
            }
            btn.disabled = true;
        });
        
        numberMatchScore = Math.min(numberMatchScore + 10, NUMBER_MATCH_MAX);
        document.getElementById('numberMatchScore').textContent = `${numberMatchScore} / ${NUMBER_MATCH_MAX}`;
        if (progressEl) progressEl.style.width = `${Math.round((numberMatchScore / NUMBER_MATCH_MAX) * 100)}%`;
        feedback.textContent = '';
        numberMatchCurrent++;
        setTimeout(generateNumberMatchQuestion, 800);
    } else {
        // Highlight wrong answer in red, correct in green
        optionButtons.forEach(btn => {
            const btnValue = parseInt(btn.textContent);
            if (btnValue === selected) {
                btn.style.background = 'linear-gradient(135deg, #FF6B6B 0%, #EE5A52 100%)';
                btn.style.transform = 'scale(0.95)';
                btn.style.boxShadow = '0 0 20px rgba(255, 107, 107, 0.6)';
            } else if (btnValue === currentNumberMatchAnswer) {
                btn.style.background = 'linear-gradient(135deg, #5DD179 0%, #4CAF50 100%)';
                btn.style.boxShadow = '0 0 20px rgba(93, 209, 121, 0.6)';
            }
            btn.disabled = true;
        });
        
        // Wrong: silently record mistake, no feedback, auto-advance with 0 points
        const { num1, num2, answer } = currentNumberMatchQuestion;
        numberMatchMistakes.push({ num1, num2, correct: answer, selected });
        feedback.textContent = '';
        numberMatchCurrent++;
        setTimeout(generateNumberMatchQuestion, 1200);
    }
}

function resetNumberMatch() {
    numberMatchScore = 0;
    numberMatchCurrent = 0;
    numberMatchMistakes = []; // clear mistakes
    const scoreEl = document.getElementById('numberMatchScore');
    const feedback = document.getElementById('numberMatchFeedback');
    const progressEl = document.getElementById('numberMatchProgress');
    const resetBtn = document.getElementById('numberMatchReset');
    const counterEl = document.getElementById('numberMatchCounter');
    const summaryContainer = document.getElementById('numberMatchSummary');
    if (scoreEl) scoreEl.textContent = `${numberMatchScore} / ${NUMBER_MATCH_MAX}`;
    if (progressEl) progressEl.style.width = '0%';
    if (resetBtn) resetBtn.style.display = 'none';
    if (feedback) feedback.textContent = '';
    if (counterEl) counterEl.textContent = `${t('question')} 1 / ${NUMBER_MATCH_TOTAL}`;
    if (summaryContainer) {
        summaryContainer.style.display = 'none';
        summaryContainer.innerHTML = '';
    }
    generateNumberMatchQuestion();
}

function renderNumberMatchSummary() {
    const container = document.getElementById('numberMatchSummary');
    if (!container || numberMatchMistakes.length === 0) {
        if (container) container.innerHTML = `<p style="color: #90EE90; font-size: 1.1rem;">${t('perfectScore')}</p>`;
        return;
    }
    
    // Group mistakes: carry vs no-carry
    const carryMistakes = [];
    const simpleMistakes = [];
    
    numberMatchMistakes.forEach(m => {
        const needsCarry = (m.num1 % 10) + (m.num2 % 10) >= 10;
        if (needsCarry) {
            carryMistakes.push(m);
        } else {
            simpleMistakes.push(m);
        }
    });
    
    let html = `<div class="summary-title">${t('whatToReview')}</div>`;
    
    if (carryMistakes.length > 0) {
        html += '<div class="summary-group" style="border-color: #FFB347;">';
        html += `<div class="summary-group-title">${t('additionWithCarry')} (${carryMistakes.length} ${carryMistakes.length > 1 ? t('mistakes') : t('mistake')})</div>`;
        html += '<div class="summary-visual">';
        const example = carryMistakes[0];
        const ones1 = example.num1 % 10;
        const tens1 = Math.floor(example.num1 / 10);
        const ones2 = example.num2 % 10;
        const tens2 = Math.floor(example.num2 / 10);
        const onesSum = ones1 + ones2;
        const carry = Math.floor(onesSum / 10);
        const finalOnes = onesSum % 10;
        const finalTens = tens1 + tens2 + carry;
        
        html += '<div class="carry-steps">';
        html += `<div class="step">${t('example')} ${example.num1} + ${example.num2}</div>`;
        html += `<div class="step">${t('step')} 1: ${t('addOnes')} ${ones1} + ${ones2} = ${onesSum}</div>`;
        if (carry > 0) {
            html += `<div class="step">${t('step')} 2: ${t('carry')} <span class="carry-digit">${carry}</span> ${t('toTensPlace')}</div>`;
        }
        html += `<div class="step">${t('step')} 3: ${t('addTens')} ${tens1} + ${tens2}${carry > 0 ? ' + <span class="carry-digit">' + carry + '</span>' : ''} = ${finalTens}</div>`;
        html += `<div class="step">${t('answer')} ${example.correct}</div>`;
        html += '</div></div></div>';
    }
    
    if (simpleMistakes.length > 0) {
        html += '<div class="summary-group" style="border-color: #90EE90;">';
        html += `<div class="summary-group-title">${t('simpleAddition')} (${simpleMistakes.length} ${simpleMistakes.length > 1 ? t('mistakes') : t('mistake')})</div>`;
        html += '<div class="summary-visual">';
        const example = simpleMistakes[0];
        html += '<div class="carry-steps">';
        html += `<div class="step">${t('example')} ${example.num1} + ${example.num2} = ${example.correct}</div>`;
        html += `<div class="step">${t('tip')}</div>`;
        html += '</div></div></div>';
    }
    
    container.innerHTML = html;
}

// Quick Math Quiz
let quickMathScore = 0;
let quickMathTimer = 30;
let quickMathInterval = null;
let currentQuickMathAnswer = 0;

function startQuickMath() {
    quickMathScore = 0;
    quickMathTimer = 30;
    document.getElementById('quickMathScore').textContent = quickMathScore;
    document.getElementById('quickMathInput').disabled = false;
    document.getElementById('quickMathInput').value = '';
    document.getElementById('quickMathStart').style.display = 'none';
    document.getElementById('quickMathFeedback').textContent = '';
    
    generateQuickMathQuestion();
    
    quickMathInterval = setInterval(() => {
        quickMathTimer--;
        document.getElementById('quickMathTimer').textContent = `Time: ${quickMathTimer}s`;
        
        if (quickMathTimer <= 0) {
            endQuickMath();
        }
    }, 1000);
}

function generateQuickMathQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operations = ['+', '-', '×'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    let answer;
    switch(operation) {
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case '×':
            answer = num1 * num2;
            break;
    }
    
    currentQuickMathAnswer = answer;
    document.getElementById('quickMathQuestion').textContent = `${num1} ${operation} ${num2} = ?`;
}

function checkQuickMath() {
    const input = document.getElementById('quickMathInput');
    const userAnswer = parseInt(input.value);
    const feedback = document.getElementById('quickMathFeedback');
    
    if (userAnswer === currentQuickMathAnswer) {
        quickMathScore += 5;
        document.getElementById('quickMathScore').textContent = quickMathScore;
        feedback.textContent = '✓ Correct! +5';
        feedback.style.color = '#90EE90';
        input.value = '';
        generateQuickMathQuestion();
    } else {
        feedback.textContent = '✗ Wrong!';
        feedback.style.color = '#FFB6C1';
    }
}

function endQuickMath() {
    clearInterval(quickMathInterval);
    document.getElementById('quickMathInput').disabled = true;
    document.getElementById('quickMathQuestion').textContent = `${t('gameOver')} ${quickMathScore}`;
    document.getElementById('quickMathStart').style.display = 'block';
    document.getElementById('quickMathStart').textContent = t('playAgain');
}

// Pattern Builder
// Pattern Builder (fixed questions per session)
let patternScore = 0;
let currentPattern = [];
let currentPatternAnswer = 0;
let currentPatternStep = 0; // track the step for mistake analysis
const PATTERN_MAX = 150; // cap for display; not used for session end
const PATTERN_TOTAL = 10; // fixed number of questions per session
let patternCurrent = 0;
let patternMistakes = []; // collect wrong answers for summary

function generatePattern() {
    // If session finished, show summary and stop
    if (patternCurrent >= PATTERN_TOTAL) {
        const feedback = document.getElementById('patternFeedback');
        const resetBtn = document.getElementById('patternReset');
        const summaryContainer = document.getElementById('patternSummary');
        if (feedback) feedback.textContent = `${t('sessionComplete')} ${patternScore} / ${PATTERN_TOTAL * 15}`;
        if (resetBtn) {
            resetBtn.style.display = 'block';
            resetBtn.textContent = t('playAgain');
        }
        if (summaryContainer) {
            renderPatternSummary();
            summaryContainer.style.display = 'block';
        }
        return;
    }
    const start = Math.floor(Math.random() * 5) + 1;
    const step = Math.floor(Math.random() * 5) + 1;
    
    currentPattern = [start, start + step, start + step * 2];
    currentPatternAnswer = start + step * 3;
    currentPatternStep = step; // store for mistake analysis
    
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
    if (scoreEl) scoreEl.textContent = `${patternScore} / ${PATTERN_MAX}`;
    if (progressEl) progressEl.style.width = '0%';
    if (resetBtn) resetBtn.style.display = 'none';
    if (feedback) feedback.textContent = '';
    if (counterEl) counterEl.textContent = `${t('question')} 1 / ${PATTERN_TOTAL}`;
    if (summaryContainer) {
        summaryContainer.style.display = 'none';
        summaryContainer.innerHTML = '';
    }
    generatePattern();
}

function renderPatternSummary() {
    const container = document.getElementById('patternSummary');
    if (!container || patternMistakes.length === 0) {
        if (container) container.innerHTML = `<p style="color: #90EE90; font-size: 1.1rem;">${t('perfectScore')}</p>`;
        return;
    }
    
    // Group mistakes by step size
    const groupedByStep = {};
    patternMistakes.forEach(m => {
        const step = m.step;
        if (!groupedByStep[step]) groupedByStep[step] = [];
        groupedByStep[step].push(m);
    });
    
    let html = `<div class="summary-title">${t('whatToReview')}</div>`;
    
    Object.keys(groupedByStep).sort((a, b) => a - b).forEach(step => {
        const mistakes = groupedByStep[step];
        html += '<div class="summary-group" style="border-color: #A976C9;">';
        html += `<div class="summary-group-title">${t('patternsWith')} +${step} (${mistakes.length} ${mistakes.length > 1 ? t('mistakes') : t('mistake')})</div>`;
        html += '<div class="summary-visual">';
        const example = mistakes[0];
        html += '<div class="progression-diagram">';
        example.pattern.forEach((num, i) => {
            html += '<div class="progression-node">' + num + '</div>';
            if (i < example.pattern.length - 1) {
                html += '<div class="progression-arrow">+' + step + ' →</div>';
            }
        });
        html += '<div class="progression-arrow">+' + step + ' →</div>';
        html += '<div class="progression-node" style="background: rgba(144, 238, 144, 0.3);">' + example.correct + '</div>';
        html += '</div>';
        html += `<div style="margin-top: 0.5rem; font-size: 0.95rem;">${t('eachNumberIncreases')} <span class="progression-step">+${step}</span></div>`;
        html += '</div></div>';
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
        const numberMatchCounter = document.getElementById('numberMatchCounter');
        const patternCounter = document.getElementById('patternCounter');
        
        if (numberMatchCounter && numberMatchCounter.textContent) {
            const match = numberMatchCounter.textContent.match(/(\d+) \/ (\d+)/);
            if (match) numberMatchCounter.textContent = `${t('question')} ${match[1]} / ${match[2]}`;
        }
        
        if (patternCounter && patternCounter.textContent) {
            const match = patternCounter.textContent.match(/(\d+) \/ (\d+)/);
            if (match) patternCounter.textContent = `${t('question')} ${match[1]} / ${match[2]}`;
        }
    });
    
    const quickMathInput = document.getElementById('quickMathInput');
    quickMathInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !quickMathInput.disabled) {
            checkQuickMath();
        }
    });
    
    document.getElementById('quickMathStart').onclick = startQuickMath;
    document.getElementById('patternCheck').onclick = checkPattern;
    const numberMatchResetBtn = document.getElementById('numberMatchReset');
    if (numberMatchResetBtn) numberMatchResetBtn.onclick = resetNumberMatch;
    const patternResetBtn = document.getElementById('patternReset');
    if (patternResetBtn) patternResetBtn.onclick = resetPattern;
    // Initialize score displays with max values
    const numberMatchScoreEl = document.getElementById('numberMatchScore');
    if (numberMatchScoreEl) numberMatchScoreEl.textContent = `${numberMatchScore} / ${NUMBER_MATCH_MAX}`;
    const patternScoreEl = document.getElementById('patternScore');
    if (patternScoreEl) patternScoreEl.textContent = `${patternScore} / ${PATTERN_MAX}`;
    const numberMatchProgressEl = document.getElementById('numberMatchProgress');
    if (numberMatchProgressEl) numberMatchProgressEl.style.width = '0%';
    const patternProgressEl = document.getElementById('patternProgress');
    if (patternProgressEl) patternProgressEl.style.width = '0%';
    const numberMatchCounterEl = document.getElementById('numberMatchCounter');
    if (numberMatchCounterEl) numberMatchCounterEl.textContent = `Question 1 / ${NUMBER_MATCH_TOTAL}`;
    const patternCounterEl = document.getElementById('patternCounter');
    if (patternCounterEl) patternCounterEl.textContent = `Question 1 / ${PATTERN_TOTAL}`;
});

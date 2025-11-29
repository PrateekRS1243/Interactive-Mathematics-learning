// ============= WORD PROBLEM SOLVER GAME =============
let wordProblemScore = 0;
let wordProblemCurrent = 0;
const WORD_PROBLEM_TOTAL = 10;
const WORD_PROBLEM_MAX = 100;
let wordProblemMistakes = [];
let currentWordProblem = null;
let hintShown = false;

// Word problems database
const wordProblems = [
    {
        type: "speed-distance-time",
        question: {
            en: "A car travels 120 km in 2 hours. What is its average speed?",
            kn: "ಒಂದು ಕಾರು 2 ಗಂಟೆಗಳಲ್ಲಿ 120 ಕಿಮೀ ಪ್ರಯಾಣಿಸುತ್ತದೆ. ಅದರ ಸರಾಸರಿ ವೇಗ ಎಷ್ಟು?"
        },
        hint: {
            en: "Use formula: Speed = Distance ÷ Time",
            kn: "ಸೂತ್ರ ಬಳಸಿ: ವೇಗ = ದೂರ ÷ ಸಮಯ"
        },
        answer: "60 km/h",
        wrong: ["120 km/h", "240 km/h", "30 km/h"],
        explanation: {
            en: "Speed = Distance ÷ Time = 120 ÷ 2 = 60 km/h",
            kn: "ವೇಗ = ದೂರ ÷ ಸಮಯ = 120 ÷ 2 = 60 km/h"
        }
    },
    {
        type: "percentage",
        question: {
            en: "A shirt originally costs ₹800. If there's a 25% discount, what is the final price?",
            kn: "ಒಂದು ಶರ್ಟ್‌ನ ಮೂಲ ಬೆಲೆ ₹800. 25% ರಿಯಾಯಿತಿ ಇದ್ದರೆ, ಅಂತಿಮ ಬೆಲೆ ಎಷ್ಟು?"
        },
        hint: {
            en: "Find 25% of 800, then subtract from original price",
            kn: "800ರ 25% ಕಂಡುಹಿಡಿಯಿರಿ, ನಂತರ ಮೂಲ ಬೆಲೆಯಿಂದ ಕಳೆಯಿರಿ"
        },
        answer: "₹600",
        wrong: ["₹700", "₹650", "₹550"],
        explanation: {
            en: "Discount = 25% of 800 = 200. Final price = 800 - 200 = ₹600",
            kn: "ರಿಯಾಯಿತಿ = 800ರ 25% = 200. ಅಂತಿಮ ಬೆಲೆ = 800 - 200 = ₹600"
        }
    },
    {
        type: "profit-loss",
        question: {
            en: "A shopkeeper buys an item for ₹500 and sells it for ₹650. What is the profit percentage?",
            kn: "ಒಬ್ಬ ಅಂಗಡಿಯವನು ವಸ್ತುವನ್ನು ₹500ಕ್ಕೆ ಖರೀದಿಸಿ ₹650ಕ್ಕೆ ಮಾರುತ್ತಾನೆ. ಲಾಭದ ಶೇಕಡಾವಾರು ಎಷ್ಟು?"
        },
        hint: {
            en: "Profit% = (Profit / Cost Price) × 100. Profit = Selling Price - Cost Price",
            kn: "ಲಾಭ% = (ಲಾಭ / ಬೆಲೆ) × 100. ಲಾಭ = ಮಾರಾಟ ಬೆಲೆ - ಖರೀದಿ ಬೆಲೆ"
        },
        answer: "30%",
        wrong: ["25%", "35%", "20%"],
        explanation: {
            en: "Profit = 650 - 500 = 150. Profit% = (150/500) × 100 = 30%",
            kn: "ಲಾಭ = 650 - 500 = 150. ಲಾಭ% = (150/500) × 100 = 30%"
        }
    },
    {
        type: "speed-distance-time",
        question: {
            en: "If a train travels at 80 km/h, how far will it travel in 3.5 hours?",
            kn: "ರೈಲು 80 km/h ವೇಗದಲ್ಲಿ ಪ್ರಯಾಣಿಸಿದರೆ, 3.5 ಗಂಟೆಗಳಲ್ಲಿ ಎಷ್ಟು ದೂರ ಪ್ರಯಾಣಿಸುತ್ತದೆ?"
        },
        hint: {
            en: "Use formula: Distance = Speed × Time",
            kn: "ಸೂತ್ರ ಬಳಸಿ: ದೂರ = ವೇಗ × ಸಮಯ"
        },
        answer: "280 km",
        wrong: ["240 km", "320 km", "300 km"],
        explanation: {
            en: "Distance = Speed × Time = 80 × 3.5 = 280 km",
            kn: "ದೂರ = ವೇಗ × ಸಮಯ = 80 × 3.5 = 280 km"
        }
    },
    {
        type: "simple-interest",
        question: {
            en: "Find the simple interest on ₹5000 at 6% per annum for 2 years.",
            kn: "₹5000 ಮೇಲೆ 6% ವಾರ್ಷಿಕ ದರದಲ್ಲಿ 2 ವರ್ಷಗಳಿಗೆ ಸರಳ ಬಡ್ಡಿ ಕಂಡುಹಿಡಿಯಿರಿ."
        },
        hint: {
            en: "Simple Interest = (Principal × Rate × Time) / 100",
            kn: "ಸರಳ ಬಡ್ಡಿ = (ಮೂಲಧನ × ದರ × ಸಮಯ) / 100"
        },
        answer: "₹600",
        wrong: ["₹500", "₹700", "₹650"],
        explanation: {
            en: "SI = (5000 × 6 × 2) / 100 = 60000 / 100 = ₹600",
            kn: "SI = (5000 × 6 × 2) / 100 = 60000 / 100 = ₹600"
        }
    },
    {
        type: "age-problem",
        question: {
            en: "Ravi is 3 times as old as his son. If the sum of their ages is 48, how old is Ravi?",
            kn: "ರವಿ ತನ್ನ ಮಗನಿಗಿಂತ 3 ಪಟ್ಟು ವಯಸ್ಸಿನವನು. ಅವರ ವಯಸ್ಸಿನ ಮೊತ್ತ 48 ಆದರೆ, ರವಿಯ ವಯಸ್ಸು ಎಷ್ಟು?"
        },
        hint: {
            en: "Let son's age = x, then Ravi's age = 3x. So x + 3x = 48",
            kn: "ಮಗನ ವಯಸ್ಸು = x ಎಂದಿರಲಿ, ಆಗ ರವಿಯ ವಯಸ್ಸು = 3x. ಆದ್ದರಿಂದ x + 3x = 48"
        },
        answer: "36 years",
        wrong: ["32 years", "40 years", "42 years"],
        explanation: {
            en: "4x = 48, so x = 12. Ravi's age = 3 × 12 = 36 years",
            kn: "4x = 48, ಆದ್ದರಿಂದ x = 12. ರವಿಯ ವಯಸ್ಸು = 3 × 12 = 36 ವರ್ಷ"
        }
    },
    {
        type: "percentage",
        question: {
            en: "If 40% of a number is 80, what is the number?",
            kn: "ಸಂಖ್ಯೆಯ 40% 80 ಆಗಿದ್ದರೆ, ಸಂಖ್ಯೆ ಎಷ್ಟು?"
        },
        hint: {
            en: "40% of x = 80, so (40/100) × x = 80",
            kn: "x ನ 40% = 80, ಆದ್ದರಿಂದ (40/100) × x = 80"
        },
        answer: "200",
        wrong: ["180", "220", "160"],
        explanation: {
            en: "(40/100) × x = 80, so x = 80 × (100/40) = 200",
            kn: "(40/100) × x = 80, ಆದ್ದರಿಂದ x = 80 × (100/40) = 200"
        }
    },
    {
        type: "mixture",
        question: {
            en: "A mixture contains milk and water in ratio 5:3. If total mixture is 40 liters, how much is milk?",
            kn: "ಮಿಶ್ರಣವು ಹಾಲು ಮತ್ತು ನೀರನ್ನು 5:3 ಅನುಪಾತದಲ್ಲಿ ಹೊಂದಿದೆ. ಒಟ್ಟು ಮಿಶ್ರಣ 40 ಲೀಟರ್ ಆದರೆ, ಹಾಲು ಎಷ್ಟು?"
        },
        hint: {
            en: "Total parts = 5 + 3 = 8. Milk = (5/8) of total",
            kn: "ಒಟ್ಟು ಭಾಗಗಳು = 5 + 3 = 8. ಹಾಲು = ಒಟ್ಟು (5/8)"
        },
        answer: "25 liters",
        wrong: ["20 liters", "30 liters", "15 liters"],
        explanation: {
            en: "Milk = (5/8) × 40 = 25 liters",
            kn: "ಹಾಲು = (5/8) × 40 = 25 ಲೀಟರ್"
        }
    },
    {
        type: "work-time",
        question: {
            en: "A can complete a work in 12 days. If B is twice as efficient as A, how many days will B take?",
            kn: "A 12 ದಿನಗಳಲ್ಲಿ ಕೆಲಸವನ್ನು ಪೂರ್ಣಗೊಳಿಸಬಹುದು. B, A ಗಿಂತ ಎರಡು ಪಟ್ಟು ದಕ್ಷನಾಗಿದ್ದರೆ, B ಎಷ್ಟು ದಿನಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುತ್ತಾನೆ?"
        },
        hint: {
            en: "If B is twice as efficient, B takes half the time",
            kn: "B ಎರಡು ಪಟ್ಟು ದಕ್ಷನಾದರೆ, B ಅರ್ಧ ಸಮಯ ತೆಗೆದುಕೊಳ್ಳುತ್ತಾನೆ"
        },
        answer: "6 days",
        wrong: ["8 days", "4 days", "10 days"],
        explanation: {
            en: "B is twice as efficient, so B takes 12/2 = 6 days",
            kn: "B ಎರಡು ಪಟ್ಟು ದಕ್ಷ, ಆದ್ದರಿಂದ B 12/2 = 6 ದಿನಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುತ್ತಾನೆ"
        }
    },
    {
        type: "average",
        question: {
            en: "The average of 5 numbers is 30. If one number is 50, what is the average of the remaining 4?",
            kn: "5 ಸಂಖ್ಯೆಗಳ ಸರಾಸರಿ 30. ಒಂದು ಸಂಖ್ಯೆ 50 ಆದರೆ, ಉಳಿದ 4 ಸಂಖ್ಯೆಗಳ ಸರಾಸರಿ ಎಷ್ಟು?"
        },
        hint: {
            en: "Total of 5 numbers = 5 × 30 = 150. Subtract 50 and divide by 4",
            kn: "5 ಸಂಖ್ಯೆಗಳ ಮೊತ್ತ = 5 × 30 = 150. 50 ಕಳೆದು 4 ರಿಂದ ಭಾಗಿಸಿ"
        },
        answer: "25",
        wrong: ["20", "30", "27.5"],
        explanation: {
            en: "Total = 150. Remaining sum = 150 - 50 = 100. Average = 100/4 = 25",
            kn: "ಒಟ್ಟು = 150. ಉಳಿದ ಮೊತ್ತ = 150 - 50 = 100. ಸರಾಸರಿ = 100/4 = 25"
        }
    }
];

function generateWordProblem() {
    if (wordProblemCurrent >= WORD_PROBLEM_TOTAL) {
        // Show results screen
        const resultsContainer = document.getElementById('wordProblemResults');
        const resultText = document.getElementById('wordProblemResultText');
        const viewSummaryBtn = document.getElementById('wordProblemViewSummary');
        const resetBtn = document.getElementById('wordProblemReset');
        const questionDiv = document.getElementById('wordProblemQuestion');
        const optionsDiv = document.getElementById('wordProblemOptions');
        const hintBtn = document.getElementById('wordProblemHintBtn');
        const hintBox = document.getElementById('wordProblemHint');
        const feedback = document.getElementById('wordProblemFeedback');

        // Hide game elements
        if (questionDiv) questionDiv.style.display = 'none';
        if (optionsDiv) optionsDiv.style.display = 'none';
        if (hintBtn) hintBtn.style.display = 'none';
        if (hintBox) hintBox.style.display = 'none';
        if (feedback) feedback.style.display = 'none';

        const percentage = Math.round((wordProblemScore / WORD_PROBLEM_MAX) * 100);
        let html = '';

        // Add roast if score < 60%
        if (percentage < 60 && percentage > 0) {
            const roast = getRandomRoast();
            html += `<div style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(219, 39, 119, 0.15) 100%); border: 2px solid rgba(236, 72, 153, 0.5); border-radius: 1rem; padding: 1.25rem; margin-bottom: 1.5rem; text-align: center; backdrop-filter: blur(10px);">`;
            html += `<div style="font-size: 1.3rem; font-weight: 900; color: #ec4899; text-shadow: 0 2px 8px rgba(236, 72, 153, 0.3);">${roast}</div>`;
            html += `</div>`;
        }

        html += `<div style="font-size: 1.8rem; font-weight: 900; margin-bottom: 1rem;">${t('sessionComplete')}</div>`;
        html += `<div style="font-size: 2rem; font-weight: 900; color: #5DD179;">${wordProblemScore} / ${WORD_PROBLEM_MAX}</div>`;

        resultText.innerHTML = html;
        resultsContainer.style.display = 'block';

        if (wordProblemMistakes.length > 0) {
            viewSummaryBtn.style.display = 'block';
            viewSummaryBtn.onclick = () => {
                resultsContainer.style.display = 'none';
                renderWordProblemSummary();
                document.getElementById('wordProblemSummary').style.display = 'block';
                resetBtn.style.display = 'block';
            };
        } else {
            resetBtn.style.display = 'block';
        }
        return;
    }

    hintShown = false;
    currentWordProblem = wordProblems[wordProblemCurrent];

    const questionDiv = document.getElementById('wordProblemQuestion');
    const optionsDiv = document.getElementById('wordProblemOptions');
    const counterEl = document.getElementById('wordProblemCounter');
    const hintBtn = document.getElementById('wordProblemHintBtn');
    const hintBox = document.getElementById('wordProblemHint');

    // Reset hint
    if (hintBox) {
        hintBox.style.display = 'none';
        hintBox.innerHTML = '';
    }
    if (hintBtn) {
        hintBtn.style.display = 'block';
        hintBtn.textContent = gamesLanguage === 'en' ? '💡 Show Hint' : '💡 ಸುಳಿವು ತೋರಿಸಿ';
    }

    if (questionDiv) questionDiv.textContent = currentWordProblem.question[gamesLanguage];
    if (counterEl) counterEl.textContent = `${t('question')} ${wordProblemCurrent + 1} / ${WORD_PROBLEM_TOTAL}`;

    // Shuffle options
    const allOptions = [currentWordProblem.answer, ...currentWordProblem.wrong];
    const shuffled = allOptions.sort(() => Math.random() - 0.5);

    if (optionsDiv) {
        optionsDiv.innerHTML = '';
        shuffled.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'game-btn';
            btn.textContent = option;
            btn.onclick = () => checkWordProblem(option);
            optionsDiv.appendChild(btn);
        });
    }
}

function toggleHint() {
    const hintBox = document.getElementById('wordProblemHint');
    const hintBtn = document.getElementById('wordProblemHintBtn');
    if (!hintBox || !currentWordProblem) return;

    if (hintBox.style.display === 'none' || !hintBox.style.display) {
        hintBox.style.display = 'block';
        hintBox.textContent = currentWordProblem.hint[gamesLanguage];
        if (hintBtn) hintBtn.textContent = gamesLanguage === 'en' ? '💡 Hide Hint' : '💡 ಸುಳಿವು ಮರೆಮಾಡಿ';
        hintShown = true;
    } else {
        hintBox.style.display = 'none';
        if (hintBtn) hintBtn.textContent = gamesLanguage === 'en' ? '💡 Show Hint' : '💡 ಸುಳಿವು ತೋರಿಸಿ';
    }
}

function checkWordProblem(selected) {
    const feedback = document.getElementById('wordProblemFeedback');
    const scoreEl = document.getElementById('wordProblemScore');
    const progressEl = document.getElementById('wordProblemProgress');

    const isCorrect = selected === currentWordProblem.answer;

    if (isCorrect) {
        const points = hintShown ? 7 : 10; // Less points if hint was used
        wordProblemScore = Math.min(wordProblemScore + points, WORD_PROBLEM_MAX);
        if (feedback) {
            feedback.textContent = gamesLanguage === 'en' ? '✓ Correct!' : '✓ ಸರಿ!';
            feedback.style.color = '#5DD179';
        }
    } else {
        wordProblemMistakes.push({
            type: currentWordProblem.type,
            question: currentWordProblem.question[gamesLanguage],
            yourAnswer: selected,
            correctAnswer: currentWordProblem.answer,
            explanation: currentWordProblem.explanation[gamesLanguage]
        });
        if (feedback) {
            feedback.textContent = `${gamesLanguage === 'en' ? '✗ Incorrect. Correct answer: ' : '✗ ತಪ್ಪು. ಸರಿಯಾದ ಉತ್ತರ: '}${currentWordProblem.answer}`;
            feedback.style.color = '#FF6B6B';
        }
    }

    if (scoreEl) scoreEl.textContent = `${wordProblemScore} / ${WORD_PROBLEM_MAX}`;
    if (progressEl) progressEl.style.width = `${(wordProblemScore / WORD_PROBLEM_MAX) * 100}%`;

    wordProblemCurrent++;
    setTimeout(() => {
        if (feedback) feedback.textContent = '';
        generateWordProblem();
    }, 2000);
}

function resetWordProblem() {
    wordProblemScore = 0;
    wordProblemCurrent = 0;
    wordProblemMistakes = [];
    hintShown = false;

    const scoreEl = document.getElementById('wordProblemScore');
    const progressEl = document.getElementById('wordProblemProgress');
    const counterEl = document.getElementById('wordProblemCounter');
    const resultsContainer = document.getElementById('wordProblemResults');
    const summaryContainer = document.getElementById('wordProblemSummary');
    const resetBtn = document.getElementById('wordProblemReset');
    const questionDiv = document.getElementById('wordProblemQuestion');
    const optionsDiv = document.getElementById('wordProblemOptions');
    const hintBtn = document.getElementById('wordProblemHintBtn');
    const hintBox = document.getElementById('wordProblemHint');
    const feedback = document.getElementById('wordProblemFeedback');

    if (scoreEl) scoreEl.textContent = `${wordProblemScore} / ${WORD_PROBLEM_MAX}`;
    if (progressEl) progressEl.style.width = '0%';
    if (counterEl) counterEl.textContent = `${t('question')} 1 / ${WORD_PROBLEM_TOTAL}`;
    if (resultsContainer) resultsContainer.style.display = 'none';
    if (summaryContainer) {
        summaryContainer.style.display = 'none';
        summaryContainer.innerHTML = '';
    }
    if (resetBtn) resetBtn.style.display = 'none';
    if (questionDiv) questionDiv.style.display = 'block';
    if (optionsDiv) optionsDiv.style.display = 'grid';
    if (hintBtn) hintBtn.style.display = 'block';
    if (hintBox) hintBox.style.display = 'none';
    if (feedback) feedback.textContent = '';

    generateWordProblem();
}

function renderWordProblemSummary() {
    const container = document.getElementById('wordProblemSummary');
    if (!container) return;

    let html = '<h3 style="margin-bottom: 1.5rem; font-size: 1.5rem; font-weight: 900;">' + t('whatToReview') + '</h3>';

    if (wordProblemMistakes.length === 0) {
        html += '<p style="font-size: 1.2rem;">' + t('perfectScore') + '</p>';
    } else {
        // Group by type
        const byType = {};
        wordProblemMistakes.forEach(m => {
            if (!byType[m.type]) byType[m.type] = [];
            byType[m.type].push(m);
        });

        Object.keys(byType).forEach(type => {
            html += `<div style="background: rgba(255, 255, 255, 0.1); border-left: 4px solid #FF6B9D; padding: 1rem; margin-bottom: 1rem; border-radius: 0.5rem;">`;
            html += `<h4 style="margin-bottom: 0.75rem; color: #FF6B9D; font-weight: 800;">${type.replace(/-/g, ' ').toUpperCase()}</h4>`;
            byType[type].forEach((mistake, idx) => {
                html += `<div style="margin-bottom: 0.75rem; padding: 0.75rem; background: rgba(0,0,0,0.2); border-radius: 0.5rem;">`;
                html += `<div style="font-weight: 700; margin-bottom: 0.5rem;">${mistake.question}</div>`;
                html += `<div style="color: #FFB347;">Your answer: ${mistake.yourAnswer}</div>`;
                html += `<div style="color: #5DD179;">Correct answer: ${mistake.correctAnswer}</div>`;
                html += `<div style="margin-top: 0.5rem; font-style: italic; color: #A0D8F1;">${mistake.explanation}</div>`;
                html += `</div>`;
            });
            html += `</div>`;
        });
    }

    container.innerHTML = html;
}

// ============= THEOREM PROVER GAME (Enhanced) =============
let theoremProverScore = 0;
let theoremProverCurrent = 0;
const THEOREM_PROVER_TOTAL = 10; // increased for added variety
const THEOREM_PROVER_MAX = 120; // 12 points * 10 questions
let theoremProverMistakes = [];
let currentTheorem = null;
let theoremProverStage = 'theorem'; // 'theorem' or 'value'
let lastTheoremSelectionCorrect = false;

const theoremDefinitions = {
    pythagoras: {
        en: "Pythagoras' Theorem: a² + b² = c² (right triangle)",
        kn: "ಪೈಥಾಗರಸ್ ಪ್ರಮೇಯ: a² + b² = c² (ಸರಿಯಾದ ತ್ರಿಕೋನ)"
    },
    triangleAngleSum: {
        en: "Triangle Angle Sum: A + B + C = 180°",
        kn: "ತ್ರಿಕೋನ ಕೋನಗಳ ಮೊತ್ತ: A + B + C = 180°"
    },
    triangleExteriorAngle: {
        en: "Exterior Angle = sum of remote interior angles",
        kn: "ಬಾಹ್ಯ ಕೋನ = ದೂರದ ಆಂತರಿಕ ಕೋನಗಳ ಮೊತ್ತ"
    },
    triangleInequality: {
        en: "Triangle Inequality: sum of any two sides > third",
        kn: "ತ್ರಿಕೋನ ಅಸಮಾನತೆ: ಯಾವುದೇ ಎರಡು ಬದಿಗಳ ಮೊತ್ತ > ಮೂರನೇ"
    },
    basicProportionality: {
        en: "Basic Proportionality (Thales): parallel line creates proportional segments",
        kn: "ಮೂಲ ಅನುಪಾತ (ಥಾಲೆಸ್): ಸಮಾಂತರ ರೇಖೆ ಅನುಪಾತ ವಿಭಾಗಗಳನ್ನು ರಚಿಸುತ್ತದೆ"
    },
    congruenceSSS: { en: "Congruence SSS: three sides match", kn: "SSS ಸಮರೂಪ: ಮೂರು ಬದಿಗಳು ಸಮ" },
    congruenceSAS: { en: "Congruence SAS: two sides & included angle", kn: "SAS ಸಮರೂಪ: ಎರಡು ಬದಿಗಳು ಮತ್ತು ಒಳಗೊಂಡ ಕೋನ" },
    congruenceASA: { en: "Congruence ASA: two angles & included side", kn: "ASA ಸಮರೂಪ: ಎರಡು ಕೋನಗಳು ಮತ್ತು ಒಳಗೊಂಡ ಬದಿ" },
    congruenceAAS: { en: "Congruence AAS: two angles & non‑included side", kn: "AAS ಸಮರೂಪ: ಎರಡು ಕೋನಗಳು ಮತ್ತು ಒಳಗೊಂಡಿಲ್ಲದ ಬದಿ" },
    congruenceRHS: { en: "Congruence RHS: right angle, hypotenuse, side", kn: "RHS ಸಮರೂಪ: ಸರಿಯಾದ ಕೋನ, ಕರ್ಣ, ಬದಿ" },
    similarityAA: { en: "Similarity AA: two equal angles", kn: "AA ಸಾಮ್ಯ: ಎರಡು ಸಮ ಕೋನಗಳು" },
    similaritySSS: { en: "Similarity SSS: side ratios equal", kn: "SSS ಸಾಮ್ಯ: ಬದಿ ಅನುಪಾತಗಳು ಸಮ" },
    similaritySAS: { en: "Similarity SAS: two sides in ratio & included angle", kn: "SAS ಸಾಮ್ಯ: ಎರಡು ಬದಿಗಳ ಅನುಪಾತ ಮತ್ತು ಒಳಗೊಂಡ ಕೋನ" },
    circleCircumference: {
        en: "Circle Circumference: 2πr",
        kn: "ವೃತ್ತ ಸುತ್ತಳತೆ: 2πr"
    },
    circleArea: {
        en: "Circle Area: πr²",
        kn: "ವೃತ್ತ ವಿಸ್ತೀರ್ಣ: πr²"
    },
    isoscelesHeightUsingPythagoras: {
        en: "Isosceles Triangle Height: Use Pythagoras on half base",
        kn: "ಸಮಬಾಹು ತ್ರಿಕೋನ ಎತ್ತರ: ಆಧಾರದ ಅರ್ಧದ ಮೇಲೆ ಪೈಥಾಗರಸ್ ಬಳಸಿ"
    }
};

// Theorem problems database
const theoremProblems = [
        // Congruence SSS
        {
            type: "triangle",
            theorem: 'congruenceSSS',
            diagramType: 'labeledTriangleSSS',
            diagram: "Two triangles: AB=6=PQ, BC=8=QR, AC=10=PR",
            scenario: {
                en: "Two triangles have all three sides equal. What is the perimeter of triangle PQR?",
                kn: "ಎರಡು ತ್ರಿಕೋನಗಳಲ್ಲಿ ಮೂರು ಬದಿಗಳು ಸಮ. PQR ತ್ರಿಕೋನದ ಪರಿಮಿತಿ ಎಷ್ಟು?"
            },
            question: {
                en: "Perimeter of PQR?",
                kn: "PQR ಪರಿಮಿತಿ?"
            },
            answer: "24",
            wrong: ["20", "18", "22"],
            explanation: {
                en: "SSS congruence ⇒ triangles identical. Perimeter = 6+8+10=24.",
                kn: "SSS ಸಮರೂಪ ⇒ ತ್ರಿಕೋನಗಳು ಒಂದೇ. ಪರಿಮಿತಿ = 6+8+10=24."
            },
            proofSteps: {
                en: ["All sides match", "Apply SSS congruence", "Sum for perimeter: 24"],
                kn: ["ಮೂರು ಬದಿಗಳು ಸಮ", "SSS ಸಮರೂಪ ಅನ್ವಯಿಸಿ", "ಪರಿಮಿತಿ: 24"]
            }
        },
        // Congruence ASA
        {
            type: "triangle",
            theorem: 'congruenceASA',
            diagramType: 'triangleAngles',
            diagram: "Two triangles: ∠A=∠P=50°, ∠B=∠Q=60°, AB=PQ=7",
            scenario: {
                en: "Two triangles have two angles and included side equal. What is the third angle in triangle PQR?",
                kn: "ಎರಡು ತ್ರಿಕೋನಗಳಲ್ಲಿ ಎರಡು ಕೋನಗಳು ಮತ್ತು ಒಳಗೊಂಡ ಬದಿ ಸಮ. PQR ತ್ರಿಕೋನದ ಮೂರನೇ ಕೋನ ಎಷ್ಟು?"
            },
            question: {
                en: "Third angle in PQR?",
                kn: "PQR ಮೂರನೇ ಕೋನ?"
            },
            answer: "70°",
            wrong: ["60°", "80°", "50°"],
            explanation: {
                en: "ASA congruence ⇒ triangles identical. Third angle = 180°-50°-60°=70°.",
                kn: "ASA ಸಮರೂಪ ⇒ ತ್ರಿಕೋನಗಳು ಒಂದೇ. ಮೂರನೇ ಕೋನ = 180°-50°-60°=70°."
            },
            proofSteps: {
                en: ["Two angles & included side match", "Apply ASA congruence", "Third angle: 70°"],
                kn: ["ಎರಡು ಕೋನಗಳು ಮತ್ತು ಒಳಗೊಂಡ ಬದಿ ಸಮ", "ASA ಸಮರೂಪ ಅನ್ವಯಿಸಿ", "ಮೂರನೇ ಕೋನ: 70°"]
            }
        },
        // Congruence AAS
        {
            type: "triangle",
            theorem: 'congruenceAAS',
            diagramType: 'triangleAngles',
            diagram: "Two triangles: ∠A=∠P=40°, ∠B=∠Q=80°, BC=QR=9",
            scenario: {
                en: "Two triangles have two angles and a non-included side equal. What is the length of side PR?",
                kn: "ಎರಡು ತ್ರಿಕೋನಗಳಲ್ಲಿ ಎರಡು ಕೋನಗಳು ಮತ್ತು ಒಳಗೊಂಡಿಲ್ಲದ ಬದಿ ಸಮ. PR ಬದಿಯ ಉದ್ದ ಎಷ್ಟು?"
            },
            question: {
                en: "Length of PR?",
                kn: "PR ಉದ್ದ?"
            },
            answer: "9",
            wrong: ["8", "10", "7"],
            explanation: {
                en: "AAS congruence ⇒ triangles identical. PR = QR = 9.",
                kn: "AAS ಸಮರೂಪ ⇒ ತ್ರಿಕೋನಗಳು ಒಂದೇ. PR = QR = 9."
            },
            proofSteps: {
                en: ["Two angles & non-included side match", "Apply AAS congruence", "PR = QR = 9"],
                kn: ["ಎರಡು ಕೋನಗಳು ಮತ್ತು ಒಳಗೊಂಡಿಲ್ಲದ ಬದಿ ಸಮ", "AAS ಸಮರೂಪ ಅನ್ವಯಿಸಿ", "PR = QR = 9"]
            }
        },
        // Similarity AA (different context)
        {
            type: "triangle",
            theorem: 'similarityAA',
            diagramType: 'triangleAngles',
            diagram: "Triangles: ∠A=∠P=30°, ∠B=∠Q=60°",
            scenario: {
                en: "Two triangles have two equal angles (AA). If AB=5 in one, PQ=10 in the other, what is the scale factor?",
                kn: "ಎರಡು ತ್ರಿಕೋನಗಳು ಎರಡು ಸಮ ಕೋನ ಹೊಂದಿವೆ. AB=5, PQ=10 ಇದ್ದರೆ ಅನುಪಾತ ಎಷ್ಟು?"
            },
            question: {
                en: "Scale factor?",
                kn: "ಅನುಪಾತ?"
            },
            answer: "2",
            wrong: ["1.5", "2.5", "3"],
            explanation: {
                en: "AA similarity ⇒ triangles similar. Scale = PQ/AB = 10/5 = 2.",
                kn: "AA ಸಾಮ್ಯ ⇒ ತ್ರಿಕೋನಗಳು ಸಾಮ್ಯ. ಅನುಪಾತ = 10/5 = 2."
            },
            proofSteps: {
                en: ["Two angles match", "Apply AA similarity", "Scale = 2"],
                kn: ["ಎರಡು ಕೋನಗಳು ಸಮ", "AA ಸಾಮ್ಯ ಅನ್ವಯಿಸಿ", "ಅನುಪಾತ = 2"]
            }
        },
        // Similarity SSS (different context)
        {
            type: "triangle",
            theorem: 'similaritySSS',
            diagramType: 'triangleAngles',
            diagram: "Triangles: sides 3,6,9 and 6,12,18",
            scenario: {
                en: "Two triangles have sides in ratio 1:2. What is the ratio of their areas?",
                kn: "ಎರಡು ತ್ರಿಕೋನಗಳಲ್ಲಿ ಬದಿಗಳ ಅನುಪಾತ 1:2. ವಿಸ್ತೀರ್ಣದ ಅನುಪಾತ ಎಷ್ಟು?"
            },
            question: {
                en: "Area ratio?",
                kn: "ವಿಸ್ತೀರ್ಣದ ಅನುಪಾತ?"
            },
            answer: "1:4",
            wrong: ["1:2", "1:3", "1:6"],
            explanation: {
                en: "SSS similarity ⇒ side ratio squared for area: (2)^2=4 ⇒ 1:4.",
                kn: "SSS ಸಾಮ್ಯ ⇒ ಬದಿ ಅನುಪಾತದ ವರ್ಗ ವಿಸ್ತೀರ್ಣಕ್ಕೆ: (2)^2=4 ⇒ 1:4."
            },
            proofSteps: {
                en: ["Check side ratios", "Apply SSS similarity", "Area ratio = square of side ratio = 4"],
                kn: ["ಬದಿ ಅನುಪಾತ ಪರಿಶೀಲನೆ", "SSS ಸಾಮ್ಯ ಅನ್ವಯಿಸಿ", "ವಿಸ್ತೀರ್ಣದ ಅನುಪಾತ = 4"]
            }
        },
        // Similarity SAS (different context)
        {
            type: "triangle",
            theorem: 'similaritySAS',
            diagramType: 'triangleAngles',
            diagram: "Triangles: sides 4,6 with included 45°, sides 8,12 with included 45°",
            scenario: {
                en: "Two triangles have sides in ratio 1:2 around equal included angle. What is the ratio of their perimeters?",
                kn: "ಎರಡು ತ್ರಿಕೋನಗಳಲ್ಲಿ ಬದಿಗಳ ಅನುಪಾತ 1:2 ಮತ್ತು ಒಳಗೊಂಡ ಕೋನ ಸಮ. ಪರಿಮಿತಿಯ ಅನುಪಾತ ಎಷ್ಟು?"
            },
            question: {
                en: "Perimeter ratio?",
                kn: "ಪರಿಮಿತಿಯ ಅನುಪಾತ?"
            },
            answer: "1:2",
            wrong: ["1:3", "1:4", "2:3"],
            explanation: {
                en: "SAS similarity ⇒ perimeter ratio matches side ratio: 1:2.",
                kn: "SAS ಸಾಮ್ಯ ⇒ ಪರಿಮಿತಿಯ ಅನುಪಾತ ಬದಿ ಅನುಪಾತಕ್ಕೆ ಸಮ: 1:2."
            },
            proofSteps: {
                en: ["Check side ratios", "Confirm included angle equal", "Perimeter ratio = 1:2"],
                kn: ["ಬದಿ ಅನುಪಾತ ಪರಿಶೀಲನೆ", "ಒಳಗೊಂಡ ಕೋನ ಸಮ", "ಪರಿಮಿತಿಯ ಅನುಪಾತ = 1:2"]
            }
        },
        // Congruence SSS (different context)
        {
            type: "triangle",
            theorem: 'congruenceSSS',
            diagramType: 'triangleAngles',
            diagram: "Triangles: sides 5,7,9 and 5,7,9",
            scenario: {
                en: "Two triangles have sides 5,7,9. What is the largest angle in both triangles?",
                kn: "ಎರಡು ತ್ರಿಕೋನಗಳಲ್ಲಿ ಬದಿಗಳು 5,7,9. ಎರಡರಲ್ಲಿಯೂ ದೊಡ್ಡ ಕೋನ ಎಷ್ಟು?"
            },
            question: {
                en: "Largest angle?",
                kn: "ದೊಡ್ಡ ಕೋನ?"
            },
            answer: "~104°",
            wrong: ["~90°", "~120°", "~110°"],
            explanation: {
                en: "SSS congruence ⇒ triangles identical. Largest angle ≈104° (by cosine law).",
                kn: "SSS ಸಮರೂಪ ⇒ ತ್ರಿಕೋನಗಳು ಒಂದೇ. ದೊಡ್ಡ ಕೋನ ≈104° (ಕೋಸೈನ್ ನಿಯಮ)."
            },
            proofSteps: {
                en: ["All sides match", "Apply SSS congruence", "Use cosine law for angle ≈104°"],
                kn: ["ಮೂರು ಬದಿಗಳು ಸಮ", "SSS ಸಮರೂಪ ಅನ್ವಯಿಸಿ", "ಕೋಸೈನ್ ನಿಯಮ: ≈104°"]
            }
        },
        // Congruence RHS (different context)
        {
            type: "triangle",
            theorem: 'congruenceRHS',
            diagramType: 'rightTriangleHypotenuse',
            diagram: "Triangles: right angle, hypotenuse 10, side 6",
            scenario: {
                en: "Two right triangles have hypotenuse 10 and one side 6. What is the other side?",
                kn: "ಎರಡು ಸರಿಯಾದ ತ್ರಿಕೋನಗಳು ಕರ್ಣ 10 ಮತ್ತು ಒಂದು ಪಾದ 6 ಹೊಂದಿವೆ. ಇನ್ನೊಂದು ಪಾದ ಎಷ್ಟು?"
            },
            question: {
                en: "Other side?",
                kn: "ಇನ್ನೊಂದು ಪಾದ?"
            },
            answer: "8",
            wrong: ["7", "9", "10"],
            explanation: {
                en: "RHS congruence ⇒ triangles identical. Other side =8 (by Pythagoras).",
                kn: "RHS ಸಮರೂಪ ⇒ ತ್ರಿಕೋನಗಳು ಒಂದೇ. ಇನ್ನೊಂದು ಪಾದ =8 (ಪೈಥಾಗರಸ್)."
            },
            proofSteps: {
                en: ["Right angle, hypotenuse, side match", "Apply RHS congruence", "Other side =8"],
                kn: ["ಸರಿಯಾದ ಕೋನ, ಕರ್ಣ, ಪಾದ ಸಮ", "RHS ಸಮರೂಪ ಅನ್ವಯಿಸಿ", "ಪಾದ =8"]
            }
        },
    {
        type: "pythagoras",
        theorem: 'pythagoras',
        diagramType: 'rightTriangleHypotenuse',
        diagram: "Right triangle ABC: a=3, b=4, c=?",
        scenario: {
            en: "In right triangle ABC the legs have lengths 3 and 4. You need the hypotenuse.",
            kn: "ಸರಿಯಾದ ತ್ರಿಕೋನ ABC ಯಲ್ಲಿ ಪಾದಗಳ ಉದ್ದಗಳು 3 ಮತ್ತು 4. ನೀವು ಕರ್ಣವನ್ನು ಕಂಡುಹಿಡಿಯಬೇಕು." 
        },
        question: {
            en: "Find the length of the hypotenuse (c)",
            kn: "ಕರ್ಣದ ಉದ್ದ (c) ಕಂಡುಹಿಡಿಯಿರಿ"
        },
        answer: "5",
        wrong: ["6", "7", "4.5"],
        explanation: {
            en: "Using Pythagoras: c² = a² + b² = 9 + 16 = 25, so c = 5",
            kn: "ಪೈಥಾಗರಸ್ ಬಳಸಿ: c² = a² + b² = 9 + 16 = 25, ಆದ್ದರಿಂದ c = 5"
        },
        proofSteps: {
            en: ["Identify right triangle: legs a=3, b=4", "Apply a² + b²: 9 + 16 = 25", "Take square root: √25 = 5"],
            kn: ["ಸರಿಯಾದ ತ್ರಿಕೋನ ಗುರುತು: ಬದಿಗಳು a=3, b=4", "a² + b² ಅನ್ವಯಿಸಿ: 9 + 16 = 25", "ವರ್ಗಮೂಲ ತೆಗೆದುಕೊಳ್ಳಿ: √25 = 5"]
        }
    },
    {
        type: "pythagoras",
        theorem: 'pythagoras',
        diagramType: 'rightTriangleHypotenuse',
        diagram: "Right triangle: a=5, b=12, c=?",
        scenario: {
            en: "A right triangle has side lengths 5 and 12 adjacent to the right angle.",
            kn: "ಒಂದು ಸರಿಯಾದ ತ್ರಿಕೋನದಲ್ಲಿ ಬದಿಗಳ ಉದ್ದಗಳು 5 ಮತ್ತು 12 ಇವೆ." 
        },
        question: {
            en: "Find the hypotenuse length",
            kn: "ಕರ್ಣದ ಉದ್ದ ಕಂಡುಹಿಡಿಯಿರಿ"
        },
        answer: "13",
        wrong: ["14", "15", "17"],
        explanation: {
            en: "c² = 5² + 12² = 25 + 144 = 169, so c = 13",
            kn: "c² = 5² + 12² = 25 + 144 = 169, ಆದ್ದರಿಂದ c = 13"
        },
        proofSteps: {
            en: ["Use Pythagoras on a=5, b=12", "Compute 5² + 12² = 25 + 144 = 169", "Square root: √169 = 13"],
            kn: ["a=5, b=12 ಮೇಲೆ ಪೈಥಾಗರಸ್ ಬಳಸಿ", "5² + 12² = 25 + 144 = 169 ಲೆಕ್ಕ ಹಾಕಿ", "ವರ್ಗಮೂಲ: √169 = 13"]
        }
    },
    {
        type: "pythagoras",
        theorem: 'pythagoras',
        diagramType: 'rightTriangleMissingLeg',
        diagram: "Right triangle: a=?, b=24, c=25",
        scenario: {
            en: "A right triangle has hypotenuse 25 and one leg 24. Find the other leg.",
            kn: "ಒಂದು ಸರಿಯಾದ ತ್ರಿಕೋನದಲ್ಲಿ ಕರ್ಣ 25 ಮತ್ತು ಒಂದು ಪಾದ 24. ಇನ್ನೊಂದು ಪಾದವನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ." 
        },
        question: {
            en: "Find the missing side (a)",
            kn: "ಕಾಣೆಯಾದ ಬದಿ (a) ಕಂಡುಹಿಡಿಯಿರಿ"
        },
        answer: "7",
        wrong: ["6", "8", "9"],
        explanation: {
            en: "a² = c² - b² = 625 - 576 = 49, so a = 7",
            kn: "a² = c² - b² = 625 - 576 = 49, ಆದ್ದರಿಂದ a = 7"
        },
        proofSteps: {
            en: ["Rearrange Pythagoras: a² = c² - b²", "Compute 25² - 24² = 625 - 576 = 49", "Square root: √49 = 7"],
            kn: ["ಪೈಥಾಗರಸ್ ಮರುಬಳಕೆ: a² = c² - b²", "25² - 24² = 625 - 576 = 49 ಲೆಕ್ಕ", "ವರ್ಗಮೂಲ: √49 = 7"]
        }
    },
    {
        type: "triangle",
        theorem: 'triangleAngleSum',
        diagramType: 'triangleAngles',
        diagram: "Triangle: Two angles are 60° and 80°",
        scenario: {
            en: "You are given two interior angles of a triangle: 60° and 80°.",
            kn: "ಒಂದು ತ್ರಿಕೋನದ ಎರಡು ಆಂತರಿಕ ಕೋನಗಳು 60° ಮತ್ತು 80° ಕೊಡಲಾಗಿದೆ." 
        },
        question: {
            en: "Find the third angle",
            kn: "ಮೂರನೇ ಕೋನ ಕಂಡುಹಿಡಿಯಿರಿ"
        },
        answer: "40°",
        wrong: ["50°", "30°", "45°"],
        explanation: {
            en: "Sum of angles in triangle = 180°. Third angle = 180° - 60° - 80° = 40°",
            kn: "ತ್ರಿಕೋನದಲ್ಲಿ ಕೋನಗಳ ಮೊತ್ತ = 180°. ಮೂರನೇ ಕೋನ = 180° - 60° - 80° = 40°"
        },
        proofSteps: {
            en: ["Use angle sum: A + B + C = 180°", "C = 180° - 60° - 80°", "Compute: C = 40°"],
            kn: ["ಕೋನ ಮೊತ್ತ ಬಳಕೆ: A + B + C = 180°", "C = 180° - 60° - 80°", "ಲೆಕ್ಕ: C = 40°"]
        }
    },
    {
        type: "circle",
        theorem: 'circleCircumference',
        diagramType: 'circleRadius',
        diagram: "Circle: radius = 7 cm",
        scenario: {
            en: "A circle has radius 7 cm. You must find its perimeter (circumference).",
            kn: "ಒಂದು ವೃತ್ತದ ತ್ರಿಜ್ಯ 7 ಸೆಂ. ಅದರ ಸುತ್ತಳತೆ ಕಂಡುಹಿಡಿಯಬೇಕು." 
        },
        question: {
            en: "Find the circumference (use π = 22/7)",
            kn: "ಸುತ್ತಳತೆ ಕಂಡುಹಿಡಿಯಿರಿ (π = 22/7 ಬಳಸಿ)"
        },
        answer: "44 cm",
        wrong: ["42 cm", "48 cm", "40 cm"],
        explanation: {
            en: "Circumference = 2πr = 2 × (22/7) × 7 = 44 cm",
            kn: "ಸುತ್ತಳತೆ = 2πr = 2 × (22/7) × 7 = 44 cm"
        },
        proofSteps: {
            en: ["Formula: C = 2πr", "Substitute r=7, π=22/7", "C = 2 × (22/7) × 7 = 44 cm"],
            kn: ["ಸೂತ್ರ: C = 2πr", "r=7, π=22/7 ಪ್ರತಿಷ್ಠಾಪಿಸಿ", "C = 2 × (22/7) × 7 = 44 cm"]
        }
    },
    {
        type: "circle",
        theorem: 'circleArea',
        diagramType: 'circleDiameter',
        diagram: "Circle: diameter = 14 cm",
        scenario: {
            en: "A circle's diameter is 14 cm. Find the area.",
            kn: "ಒಂದು ವೃತ್ತದ ವ್ಯಾಸ 14 ಸೆಂ. ವಿಸ್ತೀರ್ಣ ಕಂಡುಹಿಡಿಯಿರಿ." 
        },
        question: {
            en: "Find the area (use π = 22/7)",
            kn: "ವಿಸ್ತೀರ್ಣ ಕಂಡುಹಿಡಿಯಿರಿ (π = 22/7 ಬಳಸಿ)"
        },
        answer: "154 cm²",
        wrong: ["144 cm²", "164 cm²", "140 cm²"],
        explanation: {
            en: "Radius = 14/2 = 7 cm. Area = πr² = (22/7) × 49 = 154 cm²",
            kn: "ತ್ರಿಜ್ಯ = 14/2 = 7 cm. ವಿಸ್ತೀರ್ಣ = πr² = (22/7) × 49 = 154 cm²"
        },
        proofSteps: {
            en: ["Radius r = 14/2 = 7", "Formula: A = πr²", "A = (22/7) × 49 = 154 cm²"],
            kn: ["ತ್ರಿಜ್ಯ r = 14/2 = 7", "ಸೂತ್ರ: A = πr²", "A = (22/7) × 49 = 154 cm²"]
        }
    },
    {
        type: "pythagoras",
        theorem: 'pythagoras',
        diagramType: 'ladderRightTriangle',
        diagram: "Ladder against wall: base=6m from wall, ladder=10m",
        scenario: {
            en: "A ladder of length 10 m rests with its base 6 m from a wall. Height reached?",
            kn: "10 ಮೀ ಉದ್ದದ ಏಣಿ ಗೋಡೆಯಿಂದ 6 ಮೀ ದೂರದಲ್ಲಿ ನಿಂತಿದೆ. ತಲುಪಿದ ಎತ್ತರ ಎಷ್ಟು?" 
        },
        question: {
            en: "How high up the wall does the ladder reach?",
            kn: "ಏಣಿ ಗೋಡೆಯ ಮೇಲೆ ಎಷ್ಟು ಎತ್ತರಕ್ಕೆ ತಲುಪುತ್ತದೆ?"
        },
        answer: "8 m",
        wrong: ["7 m", "9 m", "7.5 m"],
        explanation: {
            en: "height² = 10² - 6² = 100 - 36 = 64, so height = 8 m",
            kn: "ಎತ್ತರ² = 10² - 6² = 100 - 36 = 64, ಆದ್ದರಿಂದ ಎತ್ತರ = 8 m"
        },
        proofSteps: {
            en: ["Right triangle formed: ladder hypotenuse 10, base 6", "Use a² + b² = c² rearranged: height² = 10² - 6²", "Compute: 100 - 36 = 64 → height = 8"],
            kn: ["ಸರಿಯಾದ ತ್ರಿಕೋನ: ಏಣಿ ಕರ್ಣ 10, ಆಧಾರ 6", "a² + b² = c² ಮರುಬಳಕೆ: height² = 10² - 6²", "ಲೆಕ್ಕ: 100 - 36 = 64 → height = 8"]
        }
    },
    {
        type: "triangle",
        theorem: 'isoscelesHeightUsingPythagoras',
        diagramType: 'isoscelesTriangle',
        diagram: "Isosceles triangle: two equal sides = 10 cm each, base = 12 cm",
        scenario: {
            en: "In an isosceles triangle the equal sides are 10 cm, base 12 cm. Find the altitude.",
            kn: "ಒಂದು ಸಮಬಾಹು ತ್ರಿಕೋನದಲ್ಲಿ ಸಮ ಬದಿಗಳ ಉದ್ದ 10 ಸೆಂ, ಆಧಾರ 12 ಸೆಂ. ಲಂಬ ಎತ್ತರ ಕಂಡುಹಿಡಿಯಿರಿ." 
        },
        question: {
            en: "Find the height (perpendicular from vertex to base)",
            kn: "ಎತ್ತರ ಕಂಡುಹಿಡಿಯಿರಿ (ಶೃಂಗದಿಂದ ಆಧಾರಕ್ಕೆ ಲಂಬ)"
        },
        answer: "8 cm",
        wrong: ["9 cm", "7 cm", "10 cm"],
        explanation: {
            en: "Height divides base into two 6cm parts. h² = 10² - 6² = 100 - 36 = 64, so h = 8 cm",
            kn: "ಎತ್ತರ ಆಧಾರವನ್ನು ಎರಡು 6cm ಭಾಗಗಳಾಗಿ ವಿಭಜಿಸುತ್ತದೆ. h² = 10² - 6² = 100 - 36 = 64, ಆದ್ದರಿಂದ h = 8 cm"
        },
        proofSteps: {
            en: ["Split isosceles base: each half = 6", "Right triangle: legs 6 and height h, hypotenuse 10", "h² = 10² - 6² = 100 - 36 = 64 → h = 8"],
            kn: ["ಸಮಬಾಹು ಆಧಾರ ವಿಭಜನೆ: ಪ್ರತಿ ಅರ್ಧ = 6", "ಸರಿಯಾದ ತ್ರಿಕೋನ: ಬದಿಗಳು 6 ಮತ್ತು h, ಕರ್ಣ 10", "h² = 10² - 6² = 100 - 36 = 64 → h = 8"]
        }
    },
    {
        type: "triangle",
        theorem: 'labeledTriangleSSS',
        diagramType: 'labeledTriangleSSS',
        diagram: "Two triangles with labeled sides: AB=6, BC=8, AC=10; PQ=6, QR=8, PR=10",
        scenario: {
            en: "Two triangles have all three sides equal. What is the perimeter of triangle PQR?",
            kn: "ಎರಡು ತ್ರಿಕೋನಗಳಲ್ಲಿ ಮೂರು ಬದಿಗಳು ಸಮ. PQR ತ್ರಿಕೋನದ ಪರಿಮಿತಿ ಎಷ್ಟು?"
        },
        question: {
            en: "Perimeter of PQR?",
            kn: "PQR ಪರಿಮಿತಿ?"
        },
        answer: "24",
        wrong: ["20", "18", "22"],
        explanation: {
            en: "SSS congruence ⇒ triangles identical. Perimeter = 6+8+10=24.",
            kn: "SSS ಸಮರೂಪ ⇒ ತ್ರಿಕೋನಗಳು ಒಂದೇ. ಪರಿಮಿತಿ = 6+8+10=24."
        },
        proofSteps: {
            en: ["All sides match", "Apply SSS congruence", "Sum for perimeter: 24"],
            kn: ["ಮೂರು ಬದಿಗಳು ಸಮ", "SSS ಸಮರೂಪ ಅನ್ವಯಿಸಿ", "ಪರಿಮಿತಿ: 24"]
        }
    }
];

function generateTheoremProblem() {
    if (theoremProverCurrent >= THEOREM_PROVER_TOTAL) {
        // Show results screen
        const resultsContainer = document.getElementById('theoremProverResults');
        const resultText = document.getElementById('theoremProverResultText');
        const viewSummaryBtn = document.getElementById('theoremProverViewSummary');
        const resetBtn = document.getElementById('theoremProverReset');
        const diagramDiv = document.getElementById('theoremDiagram');
        const questionDiv = document.getElementById('theoremProverQuestion');
        const optionsDiv = document.getElementById('theoremProverOptions');
        const feedback = document.getElementById('theoremProverFeedback');

        // Hide game elements
        if (diagramDiv) diagramDiv.style.display = 'none';
        if (questionDiv) questionDiv.style.display = 'none';
        if (optionsDiv) optionsDiv.style.display = 'none';
        if (feedback) feedback.style.display = 'none';

        const percentage = Math.round((theoremProverScore / THEOREM_PROVER_MAX) * 100);
        let html = '';

        // Add roast if score < 60%
        if (percentage < 60 && percentage > 0) {
            const roast = getRandomRoast();
            html += `<div style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.15) 0%, rgba(219, 39, 119, 0.15) 100%); border: 2px solid rgba(236, 72, 153, 0.5); border-radius: 1rem; padding: 1.25rem; margin-bottom: 1.5rem; text-align: center; backdrop-filter: blur(10px);">`;
            html += `<div style="font-size: 1.3rem; font-weight: 900; color: #ec4899; text-shadow: 0 2px 8px rgba(236, 72, 153, 0.3);">${roast}</div>`;
            html += `</div>`;
        }

        html += `<div style="font-size: 1.8rem; font-weight: 900; margin-bottom: 1rem;">${t('sessionComplete')}</div>`;
        html += `<div style="font-size: 2rem; font-weight: 900; color: #5DD179;">${theoremProverScore} / ${THEOREM_PROVER_MAX}</div>`;

        resultText.innerHTML = html;
        resultsContainer.style.display = 'block';

        if (theoremProverMistakes.length > 0) {
            viewSummaryBtn.style.display = 'block';
            viewSummaryBtn.onclick = () => {
                resultsContainer.style.display = 'none';
                renderTheoremProverSummary();
                document.getElementById('theoremProverSummary').style.display = 'block';
                resetBtn.style.display = 'block';
            };
        } else {
            resetBtn.style.display = 'block';
        }
        return;
    }

    currentTheorem = theoremProblems[theoremProverCurrent];
    theoremProverStage = 'theorem';
    lastTheoremSelectionCorrect = false;

    const diagramDiv = document.getElementById('theoremDiagram');
    const questionDiv = document.getElementById('theoremProverQuestion');
    const optionsDiv = document.getElementById('theoremProverOptions');
    const theoremStage = document.getElementById('theoremSelectionStage');
    const theoremOptionsDiv = document.getElementById('theoremTheoremOptions');
    const theoremPrompt = document.getElementById('theoremSelectPrompt');
    const theoremFeedback = document.getElementById('theoremSelectFeedback');
    const counterEl = document.getElementById('theoremProverCounter');
    const proofStepsBox = document.getElementById('theoremProofSteps');

    if (proofStepsBox) { proofStepsBox.style.display = 'none'; proofStepsBox.innerHTML = ''; }
    if (diagramDiv) {
        diagramDiv.innerHTML = renderTheoremSVG(currentTheorem);
    }
    if (questionDiv) questionDiv.textContent = currentTheorem.scenario[gamesLanguage];
    if (counterEl) counterEl.textContent = `${t('question')} ${theoremProverCurrent + 1} / ${THEOREM_PROVER_TOTAL}`;

    // Stage 1: Select theorem
    if (theoremStage && theoremOptionsDiv && theoremPrompt) {
        theoremStage.style.display = 'block';
        theoremPrompt.textContent = gamesLanguage === 'en' ? 'Which theorem or principle applies here?' : 'ಇಲ್ಲಿ ಯಾವ ಪ್ರಮೇಯ/ಸಿದ್ಧಾಂತ ಅನ್ವಯಿಸುತ್ತದೆ?';
        theoremFeedback.textContent = '';
        theoremOptionsDiv.innerHTML = '';
        const available = [
            'pythagoras','triangleAngleSum','triangleExteriorAngle','triangleInequality','basicProportionality',
            'congruenceSAS','congruenceRHS','similarityAA','similaritySSS','similaritySAS','circleCircumference','circleArea','isoscelesHeightUsingPythagoras'
        ];
        
        // Limit options to 4 randomly selected theorems
        const shuffled = available.sort(() => 0.5 - Math.random());
        const limitedOptions = shuffled.slice(0, 4);

        limitedOptions.forEach(key => {
            const btn = document.createElement('button');
            btn.className = 'game-btn';
            btn.textContent = theoremDefinitions[key][gamesLanguage];
            btn.onclick = () => {
                const correct = key === currentTheorem.theorem;
                lastTheoremSelectionCorrect = correct;
                Array.from(theoremOptionsDiv.children).forEach(b=>b.disabled=true);
                theoremFeedback.textContent = correct ? (gamesLanguage==='en'?'✓ Correct theorem!':'✓ ಸರಿಯಾದ ಪ್ರಮೇಯ!') : (gamesLanguage==='en'?'✗ Incorrect theorem':'✗ ತಪ್ಪಾದ ಪ್ರಮೇಯ');
                theoremFeedback.style.color = correct ? '#5DD179' : '#FF6B6B';
                setTimeout(() => {
                    // move to value stage
                    theoremProverStage = 'value';
                    if (theoremStage) theoremStage.style.display = 'none';
                    renderTheoremValueStage();
                }, 1000);
            };
            theoremOptionsDiv.appendChild(btn);
        });
    }
}

// Render an inline SVG diagram for better visual understanding
function renderTheoremSVG(problem) {
    const dt = problem.diagramType;
    switch (dt) {
        case 'rightTriangleHypotenuse': {
            // a=3, b=4, c=?
            return `\n<svg viewBox="0 0 220 160" width="100%" height="100%" aria-label="Right triangle with legs 3 and 4" role="img">\n  <defs>\n    <linearGradient id="triGrad" x1="0" y1="0" x2="1" y2="1">\n      <stop offset="0%" stop-color="rgba(255,255,255,0.55)"/>\n      <stop offset="100%" stop-color="rgba(255,255,255,0.25)"/>\n    </linearGradient>\n  </defs>\n  <polygon points="20,20 20,140 200,140" fill="url(#triGrad)" stroke="white" stroke-width="3" />\n  <path d="M20 140 L50 140 L50 110" fill="none" stroke="white" stroke-width="3"/>\n  <text x="22" y="90" fill="#fff" font-size="16" font-weight="700">3</text>\n  <text x="105" y="155" fill="#fff" font-size="16" font-weight="700">4</text>\n  <text x="120" y="85" fill="#fff" font-size="18" font-weight="900">c = ?</text>\n</svg>`;
        }
        case 'rightTriangleMissingLeg': {
            // b=24, c=25 find a
            return `\n<svg viewBox="0 0 260 170" aria-label="Right triangle with hypotenuse 25 and leg 24" role="img">\n  <polygon points="30,20 30,150 240,150" fill="rgba(255,255,255,0.35)" stroke="white" stroke-width="3"/>\n  <text x="40" y="95" fill="#fff" font-size="16" font-weight="700">a = ?</text>\n  <text x="120" y="165" fill="#fff" font-size="16" font-weight="700">24</text>\n  <text x="140" y="90" fill="#fff" font-size="18" font-weight="900">25</text>\n</svg>`;
        }
        case 'triangleAngles': {
            return `\n<svg viewBox="0 0 220 160" aria-label="Triangle with two angles 60 and 80" role="img">\n  <polygon points="110,20 20,140 200,140" fill="rgba(255,255,255,0.3)" stroke="white" stroke-width="3"/>\n  <text x="60" y="135" fill="#fff" font-size="16" font-weight="700">60°</text>\n  <text x="150" y="135" fill="#fff" font-size="16" font-weight="700">80°</text>\n  <text x="105" y="60" fill="#fff" font-size="18" font-weight="900">?</text>\n</svg>`;
        }
        case 'circleRadius': {
            return `\n<svg viewBox="0 0 180 180" aria-label="Circle radius 7" role="img">\n  <circle cx="90" cy="90" r="70" fill="rgba(255,255,255,0.25)" stroke="white" stroke-width="3"/>\n  <line x1="90" y1="90" x2="160" y2="90" stroke="#fff" stroke-width="3"/>\n  <text x="95" y="85" fill="#fff" font-size="16" font-weight="700">r=7</text>\n</svg>`;
        }
        case 'circleDiameter': {
            return `\n<svg viewBox="0 0 180 180" aria-label="Circle diameter 14" role="img">\n  <circle cx="90" cy="90" r="70" fill="rgba(255,255,255,0.28)" stroke="white" stroke-width="3"/>\n  <line x1="20" y1="90" x2="160" y2="90" stroke="#fff" stroke-width="3"/>\n  <text x="65" y="80" fill="#fff" font-size="16" font-weight="700">d=14</text>\n</svg>`;
        }
        case 'ladderRightTriangle': {
            return `\n<svg viewBox="0 0 240 180" aria-label="Ladder leaning against wall" role="img">\n  <rect x="170" y="20" width="30" height="140" fill="rgba(255,255,255,0.15)" stroke="white" stroke-width="3"/>\n  <line x1="40" y1="160" x2="170" y2="20" stroke="#fff" stroke-width="5"/>\n  <line x1="40" y1="160" x2="170" y2="160" stroke="#fff" stroke-width="3"/>\n  <text x="90" y="120" fill="#fff" font-size="16" font-weight="700">10 m</text>\n  <text x="90" y="175" fill="#fff" font-size="16" font-weight="700">6 m</text>\n  <text x="180" y="95" fill="#fff" font-size="16" font-weight="700">h = ?</text>\n</svg>`;
        }
        case 'isoscelesTriangle': {
            return `\n<svg viewBox="0 0 240 180" aria-label="Isosceles triangle" role="img">\n  <polygon points="120,20 40,160 200,160" fill="rgba(255,255,255,0.32)" stroke="white" stroke-width="3"/>\n  <line x1="120" y1="20" x2="120" y2="160" stroke="#fff" stroke-dasharray="6 4" stroke-width="3"/>\n  <text x="70" y="110" fill="#fff" font-size="16" font-weight="700">10</text>\n  <text x="150" y="110" fill="#fff" font-size="16" font-weight="700">10</text>\n  <text x="100" y="175" fill="#fff" font-size="16" font-weight="700">12</text>\n  <text x="125" y="95" fill="#fff" font-size="16" font-weight="900">h = ?</text>\n</svg>`;
        }
        case 'labeledTriangleSSS': {
            return `\n<svg viewBox="0 0 240 180" aria-label="Two triangles with labeled sides" role="img">\n  <polygon points="40,160 120,20 200,160" fill="rgba(255,255,255,0.3)" stroke="white" stroke-width="3"/>\n  <text x="70" y="140" fill="#fff" font-size="16" font-weight="700">6</text>\n  <text x="150" y="140" fill="#fff" font-size="16" font-weight="700">8</text>\n  <text x="115" y="50" fill="#fff" font-size="16" font-weight="700">10</text>\n</svg>`;
        }
        default:
            return `<div style="font-size:1rem;">${problem.diagram}</div>`;
    }
}

function renderTheoremValueStage() {
    const questionDiv = document.getElementById('theoremProverQuestion');
    const optionsDiv = document.getElementById('theoremProverOptions');
    const proofStepsBox = document.getElementById('theoremProofSteps');
    if (questionDiv) questionDiv.textContent = currentTheorem.question[gamesLanguage];
    if (optionsDiv) {
        const allOptions = [currentTheorem.answer, ...currentTheorem.wrong].sort(() => Math.random() - 0.5);
        optionsDiv.innerHTML = '';
        allOptions.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'game-btn';
            btn.textContent = option;
            btn.onclick = () => checkTheoremProver(option);
            optionsDiv.appendChild(btn);
        });
    }
    if (proofStepsBox) {
        const steps = currentTheorem.proofSteps[gamesLanguage];
        const hiddenLast = steps.slice(0, Math.max(steps.length - 1, 1));
        proofStepsBox.style.display = 'block';
        proofStepsBox.innerHTML = '<strong>' + (gamesLanguage==='en'?'Logical Steps (final step hidden):':'ತಾರ್ಕಿಕ ಹಂತಗಳು (ಕೊನೆಯ ಹಂತ ಮರೆಮಾಡಿದೆ):') + '</strong><ol style="margin-top:0.5rem; padding-left:1.25rem;">' + hiddenLast.map(s=>`<li>${s}</li>`).join('') + '</ol><div style="margin-top:0.5rem; font-size:0.75rem; opacity:0.7;">' + (gamesLanguage==='en'?'Answer to reveal final step':'ಉತ್ತರದ ನಂತರ ಕೊನೆಯ ಹಂತ ಕಾಣಿಸುತ್ತದೆ') + '</div>';
    }
}


function checkTheoremProver(selected) {
    const feedback = document.getElementById('theoremProverFeedback');
    const scoreEl = document.getElementById('theoremProverScore');
    const progressEl = document.getElementById('theoremProverProgress');
    if (theoremProverStage !== 'value') return; // safety
    const answerCorrect = selected === currentTheorem.answer;
    let points = 0;
    if (lastTheoremSelectionCorrect && answerCorrect) points = 12; // full
    else if (lastTheoremSelectionCorrect && !answerCorrect) points = 4; // partial theorem understanding
    else if (!lastTheoremSelectionCorrect && answerCorrect) points = 8; // missed theorem but solved value
    else points = 0;
    theoremProverScore = Math.min(theoremProverScore + points, THEOREM_PROVER_MAX);

    if (!answerCorrect || !lastTheoremSelectionCorrect) {
        theoremProverMistakes.push({
            type: currentTheorem.type,
            theorem: currentTheorem.theorem,
            theoremCorrect: lastTheoremSelectionCorrect,
            valueCorrect: answerCorrect,
            diagram: currentTheorem.diagram,
            question: currentTheorem.question[gamesLanguage],
            chosenAnswer: selected,
            correctAnswer: currentTheorem.answer,
            explanation: currentTheorem.explanation[gamesLanguage]
        });
    }

    if (feedback) {
        let msg = '';
        if (answerCorrect) {
            msg = gamesLanguage==='en' ? '✓ Correct value!' : '✓ ಸರಿಯಾದ ಮೌಲ್ಯ!';
        } else {
            msg = (gamesLanguage==='en' ? '✗ Incorrect. Correct: ' : '✗ ತಪ್ಪು. ಸರಿಯಾದುದು: ') + currentTheorem.answer;
        }
        msg += ' (' + (gamesLanguage==='en' ? 'Points +' : 'ಅಂಕ +') + points + ')';
        feedback.textContent = msg;
        feedback.style.color = answerCorrect ? '#5DD179' : '#FF6B6B';
    }

    if (scoreEl) scoreEl.textContent = `${theoremProverScore} / ${THEOREM_PROVER_MAX}`;
    if (progressEl) progressEl.style.width = `${(theoremProverScore / THEOREM_PROVER_MAX) * 100}%`;

    // Reveal full proof after answering
    const proofStepsBox = document.getElementById('theoremProofSteps');
    if (proofStepsBox) {
        const stepsAll = currentTheorem.proofSteps[gamesLanguage];
        proofStepsBox.innerHTML = '<strong>' + (gamesLanguage==='en'?'Full Proof:':'ಪೂರ್ಣ ಸಾಬೀತು:') + '</strong><ol style="margin-top:0.5rem; padding-left:1.25rem;">' + stepsAll.map((s,i)=>`<li${i===stepsAll.length-1? ' style="font-weight:700;color:'+(answerCorrect?'#5DD179':'#FF6B6B')+'"':''}>${s}</li>`).join('') + '</ol>';
    }

    theoremProverCurrent++;
    setTimeout(() => {
        if (feedback) feedback.textContent = '';
        generateTheoremProblem();
    }, 2200);
}

function resetTheoremProver() {
    theoremProverScore = 0;
    theoremProverCurrent = 0;
    theoremProverMistakes = [];
    theoremProverStage = 'theorem';
    lastTheoremSelectionCorrect = false;

    const scoreEl = document.getElementById('theoremProverScore');
    const progressEl = document.getElementById('theoremProverProgress');
    const counterEl = document.getElementById('theoremProverCounter');
    const resultsContainer = document.getElementById('theoremProverResults');
    const summaryContainer = document.getElementById('theoremProverSummary');
    const resetBtn = document.getElementById('theoremProverReset');
    const diagramDiv = document.getElementById('theoremDiagram');
    const questionDiv = document.getElementById('theoremProverQuestion');
    const optionsDiv = document.getElementById('theoremProverOptions');
    const feedback = document.getElementById('theoremProverFeedback');

    if (scoreEl) scoreEl.textContent = `${theoremProverScore} / ${THEOREM_PROVER_MAX}`;
    if (progressEl) progressEl.style.width = '0%';
    if (counterEl) counterEl.textContent = `${t('question')} 1 / ${THEOREM_PROVER_TOTAL}`;
    if (resultsContainer) resultsContainer.style.display = 'none';
    if (summaryContainer) {
        summaryContainer.style.display = 'none';
        summaryContainer.innerHTML = '';
    }
    if (resetBtn) resetBtn.style.display = 'none';
    if (diagramDiv) diagramDiv.style.display = 'flex';
    if (questionDiv) questionDiv.style.display = 'block';
    if (optionsDiv) optionsDiv.style.display = 'grid';
    const theoremStage = document.getElementById('theoremSelectionStage');
    const proofStepsBox = document.getElementById('theoremProofSteps');
    if (theoremStage) theoremStage.style.display = 'none';
    if (proofStepsBox) { proofStepsBox.style.display = 'none'; proofStepsBox.innerHTML=''; }
    if (feedback) feedback.textContent = '';

    generateTheoremProblem();
}

function renderTheoremProverSummary() {
    const container = document.getElementById('theoremProverSummary');
    if (!container) return;

    let html = '<h3 style="margin-bottom: 1.5rem; font-size: 1.5rem; font-weight: 900;">' + t('whatToReview') + '</h3>';

    if (theoremProverMistakes.length === 0) {
        html += '<p style="font-size: 1.2rem;">' + t('perfectScore') + '</p>';
    } else {
        // Separate theorem selection vs calculation issues
        const theoremIssues = theoremProverMistakes.filter(m => !m.theoremCorrect);
        const valueIssues = theoremProverMistakes.filter(m => !m.valueCorrect);

        if (theoremIssues.length) {
            html += `<div style="background: rgba(255,255,255,0.1); border-left:4px solid #22d3ee; padding:1rem; margin-bottom:1rem; border-radius:0.5rem;">`;
            html += `<h4 style="margin-bottom:0.75rem; color:#22d3ee; font-weight:800;">${gamesLanguage==='en'?'Theorem Selection Issues':'ಪ್ರಮೇಯ ಆಯ್ಕೆ ಸಮಸ್ಯೆಗಳು'}</h4>`;
            theoremIssues.forEach(m => {
                html += `<div style="margin-bottom:0.75rem; padding:0.75rem; background:rgba(0,0,0,0.25); border-radius:0.5rem;">`;
                html += `<div style="font-weight:700; color:#A0D8F1;">${m.diagram}</div>`;
                html += `<div>${m.question}</div>`;
                html += `<div style="color:#FF6B6B;">${gamesLanguage==='en'?'Wrong theorem chosen':'ತಪ್ಪು ಪ್ರಮೇಯ ಆಯ್ಕೆ'}</div>`;
                html += `<div style="margin-top:0.4rem; font-style:italic; color:#A0D8F1;">${theoremDefinitions[m.theorem][gamesLanguage]}</div>`;
                html += `</div>`;
            });
            html += `</div>`;
        }

        if (valueIssues.length) {
            html += `<div style="background: rgba(255,255,255,0.1); border-left:4px solid #4facfe; padding:1rem; margin-bottom:1rem; border-radius:0.5rem;">`;
            html += `<h4 style="margin-bottom:0.75rem; color:#4facfe; font-weight:800;">${gamesLanguage==='en'?'Calculation Mistakes':'ಲೆಕ್ಕ ತಪ್ಪುಗಳು'}</h4>`;
            valueIssues.forEach(m => {
                html += `<div style="margin-bottom:0.75rem; padding:0.75rem; background:rgba(0,0,0,0.25); border-radius:0.5rem;">`;
                html += `<div style="font-weight:700; color:#A0D8F1;">${m.diagram}</div>`;
                html += `<div>${m.question}</div>`;
                html += `<div style="color:#FFB347;">Your answer: ${m.chosenAnswer}</div>`;
                html += `<div style="color:#5DD179;">Correct: ${m.correctAnswer}</div>`;
                html += `<div style="margin-top:0.4rem; font-style:italic; color:#A0D8F1;">${m.explanation}</div>`;
                html += `</div>`;
            });
            html += `</div>`;
        }

        if (!theoremIssues.length && !valueIssues.length) {
            html += `<p style="font-size:1.1rem;">${gamesLanguage==='en'?'Only minor efficiency issues – well done!':'ಸ್ವಲ್ಪ ದಕ್ಷತಾ ಸಮಸ್ಯೆಗಳು ಮಾತ್ರ – ಚೆನ್ನಾಗಿದೆ!'}</p>`;
        }
    }

    container.innerHTML = html;
}

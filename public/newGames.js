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

// ============= THEOREM PROVER GAME =============
let theoremProverScore = 0;
let theoremProverCurrent = 0;
const THEOREM_PROVER_TOTAL = 8;
const THEOREM_PROVER_MAX = 96;
let theoremProverMistakes = [];
let currentTheorem = null;

// Theorem problems database
const theoremProblems = [
    {
        type: "pythagoras",
        diagram: "Right triangle ABC: a=3, b=4, c=?",
        question: {
            en: "Find the length of the hypotenuse (c)",
            kn: "ಕರ್ಣದ ಉದ್ದ (c) ಕಂಡುಹಿಡಿಯಿರಿ"
        },
        answer: "5",
        wrong: ["6", "7", "4.5"],
        explanation: {
            en: "Using Pythagoras: c² = a² + b² = 9 + 16 = 25, so c = 5",
            kn: "ಪೈಥಾಗರಸ್ ಬಳಸಿ: c² = a² + b² = 9 + 16 = 25, ಆದ್ದರಿಂದ c = 5"
        }
    },
    {
        type: "pythagoras",
        diagram: "Right triangle: a=5, b=12, c=?",
        question: {
            en: "Find the hypotenuse length",
            kn: "ಕರ್ಣದ ಉದ್ದ ಕಂಡುಹಿಡಿಯಿರಿ"
        },
        answer: "13",
        wrong: ["14", "15", "17"],
        explanation: {
            en: "c² = 5² + 12² = 25 + 144 = 169, so c = 13",
            kn: "c² = 5² + 12² = 25 + 144 = 169, ಆದ್ದರಿಂದ c = 13"
        }
    },
    {
        type: "pythagoras",
        diagram: "Right triangle: a=?, b=24, c=25",
        question: {
            en: "Find the missing side (a)",
            kn: "ಕಾಣೆಯಾದ ಬದಿ (a) ಕಂಡುಹಿಡಿಯಿರಿ"
        },
        answer: "7",
        wrong: ["6", "8", "9"],
        explanation: {
            en: "a² = c² - b² = 625 - 576 = 49, so a = 7",
            kn: "a² = c² - b² = 625 - 576 = 49, ಆದ್ದರಿಂದ a = 7"
        }
    },
    {
        type: "triangle",
        diagram: "Triangle: Two angles are 60° and 80°",
        question: {
            en: "Find the third angle",
            kn: "ಮೂರನೇ ಕೋನ ಕಂಡುಹಿಡಿಯಿರಿ"
        },
        answer: "40°",
        wrong: ["50°", "30°", "45°"],
        explanation: {
            en: "Sum of angles in triangle = 180°. Third angle = 180° - 60° - 80° = 40°",
            kn: "ತ್ರಿಕೋನದಲ್ಲಿ ಕೋನಗಳ ಮೊತ್ತ = 180°. ಮೂರನೇ ಕೋನ = 180° - 60° - 80° = 40°"
        }
    },
    {
        type: "circle",
        diagram: "Circle: radius = 7 cm",
        question: {
            en: "Find the circumference (use π = 22/7)",
            kn: "ಸುತ್ತಳತೆ ಕಂಡುಹಿಡಿಯಿರಿ (π = 22/7 ಬಳಸಿ)"
        },
        answer: "44 cm",
        wrong: ["42 cm", "48 cm", "40 cm"],
        explanation: {
            en: "Circumference = 2πr = 2 × (22/7) × 7 = 44 cm",
            kn: "ಸುತ್ತಳತೆ = 2πr = 2 × (22/7) × 7 = 44 cm"
        }
    },
    {
        type: "circle",
        diagram: "Circle: diameter = 14 cm",
        question: {
            en: "Find the area (use π = 22/7)",
            kn: "ವಿಸ್ತೀರ್ಣ ಕಂಡುಹಿಡಿಯಿರಿ (π = 22/7 ಬಳಸಿ)"
        },
        answer: "154 cm²",
        wrong: ["144 cm²", "164 cm²", "140 cm²"],
        explanation: {
            en: "Radius = 14/2 = 7 cm. Area = πr² = (22/7) × 49 = 154 cm²",
            kn: "ತ್ರಿಜ್ಯ = 14/2 = 7 cm. ವಿಸ್ತೀರ್ಣ = πr² = (22/7) × 49 = 154 cm²"
        }
    },
    {
        type: "pythagoras",
        diagram: "Ladder against wall: base=6m from wall, ladder=10m",
        question: {
            en: "How high up the wall does the ladder reach?",
            kn: "ಏಣಿ ಗೋಡೆಯ ಮೇಲೆ ಎಷ್ಟು ಎತ್ತರಕ್ಕೆ ತಲುಪುತ್ತದೆ?"
        },
        answer: "8 m",
        wrong: ["7 m", "9 m", "7.5 m"],
        explanation: {
            en: "height² = 10² - 6² = 100 - 36 = 64, so height = 8 m",
            kn: "ಎತ್ತರ² = 10² - 6² = 100 - 36 = 64, ಆದ್ದರಿಂದ ಎತ್ತರ = 8 m"
        }
    },
    {
        type: "triangle",
        diagram: "Isosceles triangle: two equal sides = 10 cm each, base = 12 cm",
        question: {
            en: "Find the height (perpendicular from vertex to base)",
            kn: "ಎತ್ತರ ಕಂಡುಹಿಡಿಯಿರಿ (ಶೃಂಗದಿಂದ ಆಧಾರಕ್ಕೆ ಲಂಬ)"
        },
        answer: "8 cm",
        wrong: ["9 cm", "7 cm", "10 cm"],
        explanation: {
            en: "Height divides base into two 6cm parts. h² = 10² - 6² = 100 - 36 = 64, so h = 8 cm",
            kn: "ಎತ್ತರ ಆಧಾರವನ್ನು ಎರಡು 6cm ಭಾಗಗಳಾಗಿ ವಿಭಜಿಸುತ್ತದೆ. h² = 10² - 6² = 100 - 36 = 64, ಆದ್ದರಿಂದ h = 8 cm"
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

    const diagramDiv = document.getElementById('theoremDiagram');
    const questionDiv = document.getElementById('theoremProverQuestion');
    const optionsDiv = document.getElementById('theoremProverOptions');
    const counterEl = document.getElementById('theoremProverCounter');

    if (diagramDiv) diagramDiv.textContent = currentTheorem.diagram;
    if (questionDiv) questionDiv.textContent = currentTheorem.question[gamesLanguage];
    if (counterEl) counterEl.textContent = `${t('question')} ${theoremProverCurrent + 1} / ${THEOREM_PROVER_TOTAL}`;

    // Shuffle options
    const allOptions = [currentTheorem.answer, ...currentTheorem.wrong];
    const shuffled = allOptions.sort(() => Math.random() - 0.5);

    if (optionsDiv) {
        optionsDiv.innerHTML = '';
        shuffled.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'game-btn';
            btn.textContent = option;
            btn.onclick = () => checkTheoremProver(option);
            optionsDiv.appendChild(btn);
        });
    }
}

function checkTheoremProver(selected) {
    const feedback = document.getElementById('theoremProverFeedback');
    const scoreEl = document.getElementById('theoremProverScore');
    const progressEl = document.getElementById('theoremProverProgress');

    const isCorrect = selected === currentTheorem.answer;

    if (isCorrect) {
        theoremProverScore = Math.min(theoremProverScore + 12, THEOREM_PROVER_MAX);
        if (feedback) {
            feedback.textContent = gamesLanguage === 'en' ? '✓ Correct!' : '✓ ಸರಿ!';
            feedback.style.color = '#5DD179';
        }
    } else {
        theoremProverMistakes.push({
            type: currentTheorem.type,
            diagram: currentTheorem.diagram,
            question: currentTheorem.question[gamesLanguage],
            yourAnswer: selected,
            correctAnswer: currentTheorem.answer,
            explanation: currentTheorem.explanation[gamesLanguage]
        });
        if (feedback) {
            feedback.textContent = `${gamesLanguage === 'en' ? '✗ Incorrect. Correct answer: ' : '✗ ತಪ್ಪು. ಸರಿಯಾದ ಉತ್ತರ: '}${currentTheorem.answer}`;
            feedback.style.color = '#FF6B6B';
        }
    }

    if (scoreEl) scoreEl.textContent = `${theoremProverScore} / ${THEOREM_PROVER_MAX}`;
    if (progressEl) progressEl.style.width = `${(theoremProverScore / THEOREM_PROVER_MAX) * 100}%`;

    theoremProverCurrent++;
    setTimeout(() => {
        if (feedback) feedback.textContent = '';
        generateTheoremProblem();
    }, 2000);
}

function resetTheoremProver() {
    theoremProverScore = 0;
    theoremProverCurrent = 0;
    theoremProverMistakes = [];

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
        // Group by type
        const byType = {};
        theoremProverMistakes.forEach(m => {
            if (!byType[m.type]) byType[m.type] = [];
            byType[m.type].push(m);
        });

        Object.keys(byType).forEach(type => {
            html += `<div style="background: rgba(255, 255, 255, 0.1); border-left: 4px solid #4facfe; padding: 1rem; margin-bottom: 1rem; border-radius: 0.5rem;">`;
            html += `<h4 style="margin-bottom: 0.75rem; color: #4facfe; font-weight: 800;">${type.toUpperCase()} PROBLEMS</h4>`;
            byType[type].forEach((mistake, idx) => {
                html += `<div style="margin-bottom: 0.75rem; padding: 0.75rem; background: rgba(0,0,0,0.2); border-radius: 0.5rem;">`;
                html += `<div style="font-weight: 700; margin-bottom: 0.5rem; color: #A0D8F1;">${mistake.diagram}</div>`;
                html += `<div style="margin-bottom: 0.5rem;">${mistake.question}</div>`;
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

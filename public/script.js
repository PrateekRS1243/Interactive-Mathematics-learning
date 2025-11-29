let currentLanguage = 'en';

const translations = {
    en: 'en',
    kn: 'kn'
};

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'kn' : 'en';
    updateLanguage();
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-en][data-kn]');
    elements.forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLanguage}`);
    });
}

function openModal(topic) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    let content = '';

    switch(topic) {
        case 'shapes':
            content = getShapesContent();
            break;
        case 'volumes':
            content = getVolumesContent();
            break;
        case 'algebra':
            content = getAlgebraContent();
            break;
        case 'theorems':
            content = getTheoremsContent();
            break;
        case 'axioms':
            content = getAxiomsContent();
            break;
        case 'arithmetic':
            content = getArithmeticContent();
            break;
    }

    modalBody.innerHTML = content;
    modal.classList.add('active');

    initializeInteractivity(topic);
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
}

function getShapesContent() {
    return `
        <div class="shape-container">
            <h2 class="shape-title">
                📐 <span data-en="Basic Figures" data-kn="ಆಧಾರಭೂತ ಆಕೃತಿಗಳು">Basic Figures</span>
            </h2>

            <div class="shape-grid">
                <div class="shape-item" data-shape="triangle">
                    <svg class="shape-svg" viewBox="0 0 200 200">
                        <polygon points="100,20 20,180 180,180"
                                 fill="#4A90E2"
                                 stroke="#2C3E50"
                                 stroke-width="3"
                                 class="interactive-shape"/>
                    </svg>
                    <div class="shape-name" data-en="Triangle" data-kn="ತ್ರಿಭುಜ">Triangle</div>
                    <div class="shape-info" data-en="3 sides, 3 angles" data-kn="3 ಬಾಹುಗಳು, 3 ಕೋನಗಳು">3 sides, 3 angles</div>
                </div>

                <div class="shape-item" data-shape="square">
                    <svg class="shape-svg" viewBox="0 0 200 200">
                        <rect x="40" y="40" width="120" height="120"
                              fill="#50C878"
                              stroke="#2C3E50"
                              stroke-width="3"
                              class="interactive-shape"/>
                    </svg>
                    <div class="shape-name" data-en="Square" data-kn="ಚೌಕ">Square</div>
                    <div class="shape-info" data-en="4 equal sides" data-kn="4 ಸಮಾನ ಬಾಹುಗಳು">4 equal sides</div>
                </div>

                <div class="shape-item" data-shape="rectangle">
                    <svg class="shape-svg" viewBox="0 0 200 200">
                        <rect x="30" y="60" width="140" height="80"
                              fill="#FF6B6B"
                              stroke="#2C3E50"
                              stroke-width="3"
                              class="interactive-shape"/>
                    </svg>
                    <div class="shape-name" data-en="Rectangle" data-kn="ಆಯತ">Rectangle</div>
                    <div class="shape-info" data-en="Opposite sides equal" data-kn="ಎದುರು ಬಾಹುಗಳು ಸಮಾನ">Opposite sides equal</div>
                </div>

                <div class="shape-item" data-shape="circle">
                    <svg class="shape-svg" viewBox="0 0 200 200">
                        <circle cx="100" cy="100" r="70"
                                fill="#FFB347"
                                stroke="#2C3E50"
                                stroke-width="3"
                                class="interactive-shape"/>
                    </svg>
                    <div class="shape-name" data-en="Circle" data-kn="ವೃತ್ತ">Circle</div>
                    <div class="shape-info" data-en="All points equidistant" data-kn="ಎಲ್ಲಾ ಬಿಂದುಗಳು ಸಮದೂರ">All points equidistant</div>
                </div>
            </div>

            <div id="shapeExplanation" class="explanation-box"></div>

            <div class="interactive-demo">
                <h3 data-en="Interactive Triangle Demo" data-kn="ಸಂವಾದಾತ್ಮಕ ತ್ರಿಭುಜ ಪ್ರದರ್ಶನ">Interactive Triangle Demo</h3>
                <p data-en="Drag the sliders to change triangle dimensions" data-kn="ತ್ರಿಭುಜದ ಆಯಾಮಗಳನ್ನು ಬದಲಾಯಿಸಲು ಸ್ಲೈಡರ್‌ಗಳನ್ನು ಎಳೆಯಿರಿ">Drag the sliders to change triangle dimensions</p>

                <div class="slider-container">
                    <div class="slider-label">
                        <span data-en="Base" data-kn="ಆಧಾರ">Base</span>
                        <span id="baseValue">100</span>
                    </div>
                    <input type="range" min="50" max="200" value="100" class="slider" id="baseSlider">
                </div>

                <div class="slider-container">
                    <div class="slider-label">
                        <span data-en="Height" data-kn="ಎತ್ತರ">Height</span>
                        <span id="heightValue">100</span>
                    </div>
                    <input type="range" min="50" max="200" value="100" class="slider" id="heightSlider">
                </div>

                <div class="canvas-container">
                    <canvas id="triangleCanvas" width="300" height="300"></canvas>
                </div>

                <div class="formula-box">
                    <strong data-en="Area = ½ × base × height" data-kn="ವಿಸ್ತೀರ್ಣ = ½ × ಆಧಾರ × ಎತ್ತರ">Area = ½ × base × height</strong><br>
                    <span data-en="Current Area:" data-kn="ಪ್ರಸ್ತುತ ವಿಸ್ತೀರ್ಣ:">Current Area:</span> <span id="triangleArea">5000</span>
                </div>
            </div>
        </div>
    `;
}

function getVolumesContent() {
    return `
        <div class="shape-container">
            <h2 class="shape-title">
                🧊 <span data-en="Surface Areas & Volumes" data-kn="ಪೃಶ್ಠಫಲ & ಆಯತನ">Surface Areas & Volumes</span>
            </h2>

            <div class="shape-grid">
                <div class="shape-item" data-3dshape="cube">
                    <svg class="shape-svg" viewBox="0 0 200 200">
                        <path d="M60,80 L140,80 L140,160 L60,160 Z" fill="#4A90E2" stroke="#2C3E50" stroke-width="2"/>
                        <path d="M60,80 L90,50 L170,50 L140,80 Z" fill="#6BA5E7" stroke="#2C3E50" stroke-width="2"/>
                        <path d="M140,80 L170,50 L170,130 L140,160 Z" fill="#357ABD" stroke="#2C3E50" stroke-width="2"/>
                    </svg>
                    <div class="shape-name" data-en="Cube" data-kn="ಘನ">Cube</div>
                    <div class="shape-info" data-en="6 equal square faces" data-kn="6 ಸಮಾನ ಚೌಕಾಕೃತಿ ಮುಖಗಳು">6 equal square faces</div>
                </div>

                <div class="shape-item" data-3dshape="cuboid">
                    <svg class="shape-svg" viewBox="0 0 200 200">
                        <path d="M50,90 L150,90 L150,160 L50,160 Z" fill="#50C878" stroke="#2C3E50" stroke-width="2"/>
                        <path d="M50,90 L80,60 L180,60 L150,90 Z" fill="#6FD892" stroke="#2C3E50" stroke-width="2"/>
                        <path d="M150,90 L180,60 L180,130 L150,160 Z" fill="#3FAD5E" stroke="#2C3E50" stroke-width="2"/>
                    </svg>
                    <div class="shape-name" data-en="Cuboid" data-kn="ಆಯತಘನ">Cuboid</div>
                    <div class="shape-info" data-en="6 rectangular faces" data-kn="6 ಆಯತಾಕೃತಿ ಮುಖಗಳು">6 rectangular faces</div>
                </div>

                <div class="shape-item" data-3dshape="cylinder">
                    <svg class="shape-svg" viewBox="0 0 200 200">
                        <ellipse cx="100" cy="60" rx="60" ry="20" fill="#FF6B6B" stroke="#2C3E50" stroke-width="2"/>
                        <rect x="40" y="60" width="120" height="100" fill="#FF6B6B" stroke="none"/>
                        <line x1="40" y1="60" x2="40" y2="160" stroke="#2C3E50" stroke-width="2"/>
                        <line x1="160" y1="60" x2="160" y2="160" stroke="#2C3E50" stroke-width="2"/>
                        <ellipse cx="100" cy="160" rx="60" ry="20" fill="#E85555" stroke="#2C3E50" stroke-width="2"/>
                    </svg>
                    <div class="shape-name" data-en="Cylinder" data-kn="ಸಿಲಿಂಡರ್">Cylinder</div>
                    <div class="shape-info" data-en="2 circular bases" data-kn="2 ವೃತ್ತಾಕಾರ ತಳಗಳು">2 circular bases</div>
                </div>

                <div class="shape-item" data-3dshape="sphere">
                    <svg class="shape-svg" viewBox="0 0 200 200">
                        <defs>
                            <radialGradient id="sphereGrad">
                                <stop offset="0%" style="stop-color:#FFB347;stop-opacity:1" />
                                <stop offset="100%" style="stop-color:#E89020;stop-opacity:1" />
                            </radialGradient>
                        </defs>
                        <circle cx="100" cy="100" r="70" fill="url(#sphereGrad)" stroke="#2C3E50" stroke-width="2"/>
                    </svg>
                    <div class="shape-name" data-en="Sphere" data-kn="ಗೋಳ">Sphere</div>
                    <div class="shape-info" data-en="Perfectly round 3D shape" data-kn="ಸಂಪೂರ್ಣ ವೃತ್ತಾಕಾರ 3D ಆಕೃತಿ">Perfectly round 3D shape</div>
                </div>
            </div>

            <div id="volumeExplanation" class="explanation-box"></div>

            <div class="interactive-demo">
                <h3 data-en="Calculate Volume" data-kn="ಆಯತನ ಲೆಕ್ಕಾಚಾರ">Calculate Volume</h3>

                <div class="slider-container">
                    <div class="slider-label">
                        <span data-en="Length" data-kn="ಉದ್ದ">Length</span>
                        <span id="lengthValue">10</span> <span data-en="units" data-kn="ಘಟಕಗಳು">units</span>
                    </div>
                    <input type="range" min="1" max="20" value="10" class="slider" id="lengthSlider">
                </div>

                <div class="slider-container">
                    <div class="slider-label">
                        <span data-en="Width" data-kn="ಅಗಲ">Width</span>
                        <span id="widthValue">10</span> <span data-en="units" data-kn="ಘಟಕಗಳು">units</span>
                    </div>
                    <input type="range" min="1" max="20" value="10" class="slider" id="widthSlider">
                </div>

                <div class="slider-container">
                    <div class="slider-label">
                        <span data-en="Height" data-kn="ಎತ್ತರ">Height</span>
                        <span id="depthValue">10</span> <span data-en="units" data-kn="ಘಟಕಗಳು">units</span>
                    </div>
                    <input type="range" min="1" max="20" value="10" class="slider" id="depthSlider">
                </div>

                <div class="formula-box">
                    <strong data-en="Cuboid Volume = Length × Width × Height" data-kn="ಆಯತಘನ ಆಯತನ = ಉದ್ದ × ಅಗಲ × ಎತ್ತರ">Cuboid Volume = Length × Width × Height</strong><br>
                    <span data-en="Volume:" data-kn="ಆಯತನ:">Volume:</span> <span id="volumeResult">1000</span> <span data-en="cubic units" data-kn="ಘನ ಘಟಕಗಳು">cubic units</span>
                </div>
            </div>

            <div class="question-card">
                <div class="question-text" data-en="Question: Find the volume of a cube with side 5 cm" data-kn="ಪ್ರಶ್ನೆ: 5 ಸೆಂ.ಮೀ ಬಾಹುವಿರುವ ಘನದ ಆಯತನ ಕಂಡುಹಿಡಿಯಿರಿ">Question: Find the volume of a cube with side 5 cm</div>
                <button class="btn-primary" onclick="toggleAnswer('answer1')">
                    <span data-en="Show Answer" data-kn="ಉತ್ತರ ತೋರಿಸಿ">Show Answer</span>
                </button>
                <div class="answer-box" id="answer1">
                    <strong data-en="Answer:" data-kn="ಉತ್ತರ:">Answer:</strong><br>
                    <span data-en="Volume = side³ = 5³ = 125 cm³" data-kn="ಆಯತನ = ಬಾಹು³ = 5³ = 125 ಸೆಂ.ಮೀ³">Volume = side³ = 5³ = 125 cm³</span>
                </div>
            </div>
        </div>
    `;
}

function getAlgebraContent() {
    return `
        <div class="shape-container">
            <h2 class="shape-title">
                🔢 <span data-en="Algebraic Equations" data-kn="ಬೀಜಗಣಿತ ಸಮೀಕರಣಗಳು">Algebraic Equations</span>
            </h2>

            <div class="interactive-demo">
                <h3 data-en="Linear Equation: y = mx + c" data-kn="ರೇಖೀಯ ಸಮೀಕರಣ: y = mx + c">Linear Equation: y = mx + c</h3>

                <div class="slider-container">
                    <div class="slider-label">
                        <span data-en="Slope (m)" data-kn="ಇಳಿಜಾರು (m)">Slope (m)</span>
                        <span id="slopeValue">1</span>
                    </div>
                    <input type="range" min="-5" max="5" value="1" step="0.1" class="slider" id="slopeSlider">
                </div>

                <div class="slider-container">
                    <div class="slider-label">
                        <span data-en="Intercept (c)" data-kn="ಛೇದಕ (c)">Intercept (c)</span>
                        <span id="interceptValue">0</span>
                    </div>
                    <input type="range" min="-10" max="10" value="0" step="0.5" class="slider" id="interceptSlider">
                </div>

                <div class="canvas-container">
                    <canvas id="graphCanvas" width="400" height="400"></canvas>
                </div>

                <div class="formula-box">
                    <strong data-en="Current Equation:" data-kn="ಪ್ರಸ್ತುತ ಸಮೀಕರಣ:">Current Equation:</strong>
                    y = <span id="equationDisplay">1x + 0</span>
                </div>
            </div>

            <div class="interactive-demo" style="margin-top: 2rem;">
                <h3 data-en="Quadratic Equation: ax² + bx + c = 0" data-kn="ವರ್ಗ ಸಮೀಕರಣ: ax² + bx + c = 0">Quadratic Equation: ax² + bx + c = 0</h3>

                <div class="slider-container">
                    <div class="slider-label">
                        <span>a</span>
                        <span id="aValue">1</span>
                    </div>
                    <input type="range" min="-3" max="3" value="1" step="0.1" class="slider" id="aSlider">
                </div>

                <div class="slider-container">
                    <div class="slider-label">
                        <span>b</span>
                        <span id="bValue">0</span>
                    </div>
                    <input type="range" min="-10" max="10" value="0" step="0.5" class="slider" id="bSlider">
                </div>

                <div class="slider-container">
                    <div class="slider-label">
                        <span>c</span>
                        <span id="cValue">0</span>
                    </div>
                    <input type="range" min="-10" max="10" value="0" step="0.5" class="slider" id="cSlider">
                </div>

                <div class="canvas-container">
                    <canvas id="quadraticCanvas" width="400" height="400"></canvas>
                </div>

                <div class="formula-box">
                    <strong data-en="Current Equation:" data-kn="ಪ್ರಸ್ತುತ ಸಮೀಕರಣ:">Current Equation:</strong>
                    <span id="quadraticEquation">x² = 0</span>
                </div>
            </div>
        </div>
    `;
}

function getTheoremsContent() {
    return `
        <div class="shape-container">
            <h2 class="shape-title">
                📊 <span data-en="Theorems of Triangles" data-kn="ತ್ರಿಭುಜಗಳ ಸಿದ್ಧಾಂತಗಳು">Theorems of Triangles</span>
            </h2>

            <div class="interactive-demo">
                <h3 data-en="Pythagoras Theorem" data-kn="ಪೈಥಾಗೋರಸ್ ಸಿದ್ಧಾಂತ">Pythagoras Theorem</h3>
                <p data-en="In a right-angled triangle: a² + b² = c²" data-kn="ಲಂಬಕೋನ ತ್ರಿಭುಜದಲ್ಲಿ: a² + b² = c²">In a right-angled triangle: a² + b² = c²</p>

                <div class="slider-container">
                    <div class="slider-label">
                        <span data-en="Side a" data-kn="ಬಾಹು a">Side a</span>
                        <span id="sideAValue">3</span>
                    </div>
                    <input type="range" min="1" max="10" value="3" class="slider" id="sideASlider">
                </div>

                <div class="slider-container">
                    <div class="slider-label">
                        <span data-en="Side b" data-kn="ಬಾಹು b">Side b</span>
                        <span id="sideBValue">4</span>
                    </div>
                    <input type="range" min="1" max="10" value="4" class="slider" id="sideBSlider">
                </div>

                <div class="canvas-container">
                    <canvas id="pythagorasCanvas" width="400" height="400"></canvas>
                </div>

                <div class="formula-box">
                    <strong data-en="Pythagoras Theorem:" data-kn="ಪೈಥಾಗೋರಸ್ ಸಿದ್ಧಾಂತ:">Pythagoras Theorem:</strong><br>
                    a² + b² = c²<br>
                    <span id="pythagorasCalc">3² + 4² = 5²<br>9 + 16 = 25</span>
                </div>

                <button class="btn-primary" onclick="animatePythagoras()" style="margin-top: 1rem;">
                    <span data-en="Show Animation" data-kn="ಅನಿಮೇಶನ್ ತೋರಿಸಿ">Show Animation</span>
                </button>
            </div>

            <div class="question-card" style="margin-top: 2rem;">
                <div class="question-text" data-en="Question: Find the hypotenuse of a right triangle with sides 6 cm and 8 cm" data-kn="ಪ್ರಶ್ನೆ: 6 ಸೆಂ.ಮೀ ಮತ್ತು 8 ಸೆಂ.ಮೀ ಬಾಹುಗಳಿರುವ ಲಂಬಕೋನ ತ್ರಿಭುಜದ ಕರ್ಣ ಕಂಡುಹಿಡಿಯಿರಿ">Question: Find the hypotenuse of a right triangle with sides 6 cm and 8 cm</div>
                <button class="btn-primary" onclick="toggleAnswer('answer2')">
                    <span data-en="Show Answer" data-kn="ಉತ್ತರ ತೋರಿಸಿ">Show Answer</span>
                </button>
                <div class="answer-box" id="answer2">
                    <strong data-en="Answer:" data-kn="ಉತ್ತರ:">Answer:</strong><br>
                    <span data-en="c² = 6² + 8² = 36 + 64 = 100" data-kn="c² = 6² + 8² = 36 + 64 = 100">c² = 6² + 8² = 36 + 64 = 100</span><br>
                    <span data-en="c = √100 = 10 cm" data-kn="c = √100 = 10 ಸೆಂ.ಮೀ">c = √100 = 10 cm</span>
                </div>
            </div>
        </div>
    `;
}

function getAxiomsContent() {
    return `
        <div class="shape-container">
            <h2 class="shape-title">
                📏 <span data-en="Euclid's Axioms" data-kn="ಯೂಕ್ಲಿಡ್‌ನ ಸ್ವೀಕಾರ್ಯಗಳು">Euclid's Axioms</span>
            </h2>

            <div class="question-card">
                <h3 data-en="Axiom 1" data-kn="ಸ್ವೀಕಾರ್ಯ 1">Axiom 1</h3>
                <div class="question-text" data-en="Things which are equal to the same thing are equal to one another" data-kn="ಒಂದೇ ವಸ್ತುವಿಗೆ ಸಮಾನವಾದ ವಸ್ತುಗಳು ಪರಸ್ಪರ ಸಮಾನವಾಗಿರುತ್ತವೆ">Things which are equal to the same thing are equal to one another</div>
                <button class="btn-primary" onclick="toggleAnswer('axiom1')">
                    <span data-en="Show Example" data-kn="ಉದಾಹರಣೆ ತೋರಿಸಿ">Show Example</span>
                </button>
                <div class="answer-box" id="axiom1">
                    <span data-en="If a = c and b = c, then a = b" data-kn="a = c ಮತ್ತು b = c ಆದರೆ, a = b">If a = c and b = c, then a = b</span><br>
                    <span data-en="Example: If Ram's height = 150cm and Sita's height = 150cm, then Ram's height = Sita's height" data-kn="ಉದಾಹರಣೆ: ರಾಮನ ಎತ್ತರ = 150 ಸೆಂ.ಮೀ ಮತ್ತು ಸೀತೆಯ ಎತ್ತರ = 150 ಸೆಂ.ಮೀ ಆದರೆ, ರಾಮನ ಎತ್ತರ = ಸೀತೆಯ ಎತ್ತರ">Example: If Ram's height = 150cm and Sita's height = 150cm, then Ram's height = Sita's height</span>
                </div>
            </div>

            <div class="question-card">
                <h3 data-en="Axiom 2" data-kn="ಸ್ವೀಕಾರ್ಯ 2">Axiom 2</h3>
                <div class="question-text" data-en="If equals are added to equals, the wholes are equal" data-kn="ಸಮಾನಗಳಿಗೆ ಸಮಾನಗಳನ್ನು ಸೇರಿಸಿದರೆ, ಮೊತ್ತಗಳು ಸಮಾನವಾಗಿರುತ್ತವೆ">If equals are added to equals, the wholes are equal</div>
                <button class="btn-primary" onclick="toggleAnswer('axiom2')">
                    <span data-en="Show Example" data-kn="ಉದಾಹರಣೆ ತೋರಿಸಿ">Show Example</span>
                </button>
                <div class="answer-box" id="axiom2">
                    <span data-en="If a = b, then a + c = b + c" data-kn="a = b ಆದರೆ, a + c = b + c">If a = b, then a + c = b + c</span><br>
                    <span data-en="Example: If 5 = 5, then 5 + 3 = 5 + 3 = 8" data-kn="ಉದಾಹರಣೆ: 5 = 5 ಆದರೆ, 5 + 3 = 5 + 3 = 8">Example: If 5 = 5, then 5 + 3 = 5 + 3 = 8</span>
                </div>
            </div>

            <div class="question-card">
                <h3 data-en="Axiom 3" data-kn="ಸ್ವೀಕಾರ್ಯ 3">Axiom 3</h3>
                <div class="question-text" data-en="If equals are subtracted from equals, the remainders are equal" data-kn="ಸಮಾನಗಳಿಂದ ಸಮಾನಗಳನ್ನು ವ್ಯವಕಲಿಸಿದರೆ, ಉಳಿದವುಗಳು ಸಮಾನವಾಗಿರುತ್ತವೆ">If equals are subtracted from equals, the remainders are equal</div>
                <button class="btn-primary" onclick="toggleAnswer('axiom3')">
                    <span data-en="Show Example" data-kn="ಉದಾಹರಣೆ ತೋರಿಸಿ">Show Example</span>
                </button>
                <div class="answer-box" id="axiom3">
                    <span data-en="If a = b, then a - c = b - c" data-kn="a = b ಆದರೆ, a - c = b - c">If a = b, then a - c = b - c</span><br>
                    <span data-en="Example: If 10 = 10, then 10 - 4 = 10 - 4 = 6" data-kn="ಉದಾಹರಣೆ: 10 = 10 ಆದರೆ, 10 - 4 = 10 - 4 = 6">Example: If 10 = 10, then 10 - 4 = 10 - 4 = 6</span>
                </div>
            </div>

            <div class="question-card">
                <h3 data-en="Axiom 4" data-kn="ಸ್ವೀಕಾರ್ಯ 4">Axiom 4</h3>
                <div class="question-text" data-en="Things which coincide with one another are equal to one another" data-kn="ಪರಸ್ಪರ ಏಕರೂಪವಾಗಿರುವ ವಸ್ತುಗಳು ಪರಸ್ಪರ ಸಮಾನವಾಗಿರುತ್ತವೆ">Things which coincide with one another are equal to one another</div>
                <button class="btn-primary" onclick="toggleAnswer('axiom4')">
                    <span data-en="Show Example" data-kn="ಉದಾಹರಣೆ ತೋರಿಸಿ">Show Example</span>
                </button>
                <div class="answer-box" id="axiom4">
                    <span data-en="If two shapes exactly overlap, they are equal" data-kn="ಎರಡು ಆಕೃತಿಗಳು ಸಂಪೂರ್ಣವಾಗಿ ಅತಿಕ್ರಮಿಸಿದರೆ, ಅವು ಸಮಾನ">If two shapes exactly overlap, they are equal</span><br>
                    <span data-en="Example: Two circles with the same radius are equal" data-kn="ಉದಾಹರಣೆ: ಒಂದೇ ತ್ರಿಜ್ಯವಿರುವ ಎರಡು ವೃತ್ತಗಳು ಸಮಾನ">Example: Two circles with the same radius are equal</span>
                </div>
            </div>

            <div class="question-card">
                <h3 data-en="Axiom 5" data-kn="ಸ್ವೀಕಾರ್ಯ 5">Axiom 5</h3>
                <div class="question-text" data-en="The whole is greater than the part" data-kn="ಸಂಪೂರ್ಣವು ಭಾಗಕ್ಕಿಂತ ದೊಡ್ಡದು">The whole is greater than the part</div>
                <button class="btn-primary" onclick="toggleAnswer('axiom5')">
                    <span data-en="Show Example" data-kn="ಉದಾಹರಣೆ ತೋರಿಸಿ">Show Example</span>
                </button>
                <div class="answer-box" id="axiom5">
                    <span data-en="A line segment is greater than any part of it" data-kn="ರೇಖಾಖಂಡವು ಅದರ ಯಾವುದೇ ಭಾಗಕ್ಕಿಂತ ದೊಡ್ಡದು">A line segment is greater than any part of it</span><br>
                    <span data-en="Example: If a line AB = 10 cm and AC is part of AB with length 6 cm, then AB > AC" data-kn="ಉದಾಹರಣೆ: ರೇಖೆ AB = 10 ಸೆಂ.ಮೀ ಮತ್ತು AC ಯು AB ಯ ಭಾಗವಾಗಿದ್ದು 6 ಸೆಂ.ಮೀ ಆದರೆ, AB > AC">Example: If a line AB = 10 cm and AC is part of AB with length 6 cm, then AB > AC</span>
                </div>
            </div>
        </div>
    `;
}

function getArithmeticContent() {
    return `
        <div class="shape-container">
            <h2 class="shape-title">
                ➕ <span data-en="Basic Arithmetic" data-kn="ಮೂಲ ಗಣಿತ">Basic Arithmetic</span>
            </h2>

            <div class="interactive-demo">
                <h3 data-en="Interactive Calculator" data-kn="ಸಂವಾದಾತ್ಮಕ ಕ್ಯಾಲ್ಕುಲೇಟರ್">Interactive Calculator</h3>

                <div style="display: grid; grid-template-columns: 1fr auto 1fr auto 1fr; gap: 1rem; align-items: center; margin: 2rem 0;">
                    <input type="number" id="num1" value="5" style="padding: 1rem; font-size: 1.5rem; border: 2px solid #4A90E2; border-radius: 8px; text-align: center;">

                    <select id="operation" style="padding: 1rem; font-size: 1.5rem; border: 2px solid #50C878; border-radius: 8px; cursor: pointer;">
                        <option value="+">+</option>
                        <option value="-">−</option>
                        <option value="*">×</option>
                        <option value="/">÷</option>
                    </select>

                    <input type="number" id="num2" value="3" style="padding: 1rem; font-size: 1.5rem; border: 2px solid #4A90E2; border-radius: 8px; text-align: center;">

                    <span style="font-size: 1.5rem; font-weight: bold;">=</span>

                    <div id="result" style="padding: 1rem; font-size: 1.5rem; background: #FFB347; border-radius: 8px; text-align: center; font-weight: bold;">8</div>
                </div>

                <button class="btn-primary" onclick="calculate()" style="width: 100%;">
                    <span data-en="Calculate" data-kn="ಲೆಕ್ಕಾಚಾರ ಮಾಡಿ">Calculate</span>
                </button>
            </div>

            <div class="interactive-demo" style="margin-top: 2rem;">
                <h3 data-en="Drag & Drop Math" data-kn="ಎಳೆಯಿರಿ ಮತ್ತು ಬಿಡಿ ಗಣಿತ">Drag & Drop Math</h3>
                <p data-en="Drag numbers to solve: 7 + 8 = ?" data-kn="ಸಂಖ್ಯೆಗಳನ್ನು ಎಳೆದು ಪರಿಹರಿಸಿ: 7 + 8 = ?">Drag numbers to solve: 7 + 8 = ?</p>

                <div style="display: flex; justify-content: center; gap: 1rem; margin: 2rem 0; flex-wrap: wrap;">
                    <div class="draggable-number" draggable="true" data-value="15">15</div>
                    <div class="draggable-number" draggable="true" data-value="12">12</div>
                    <div class="draggable-number" draggable="true" data-value="10">10</div>
                    <div class="draggable-number" draggable="true" data-value="8">8</div>
                </div>

                <div class="drop-zone" id="dropZone">
                    <span data-en="Drop Answer Here" data-kn="ಉತ್ತರ ಇಲ್ಲಿ ಬಿಡಿ">Drop Answer Here</span>
                </div>

                <div id="dragResult" style="margin-top: 1rem; font-size: 1.2rem; text-align: center; font-weight: bold;"></div>
            </div>
        </div>
    `;
}

function initializeInteractivity(topic) {
    updateLanguage();

    if (topic === 'shapes') {
        initShapesInteractivity();
    } else if (topic === 'volumes') {
        initVolumesInteractivity();
    } else if (topic === 'algebra') {
        initAlgebraInteractivity();
    } else if (topic === 'theorems') {
        initTheoremsInteractivity();
    } else if (topic === 'arithmetic') {
        initArithmeticInteractivity();
    }
}

function initShapesInteractivity() {
    const shapeItems = document.querySelectorAll('.shape-item');
    const explanationBox = document.getElementById('shapeExplanation');

    const explanations = {
        triangle: {
            en: 'A triangle has 3 sides and 3 angles. The sum of all angles is always 180°. Types: Equilateral (all sides equal), Isosceles (2 sides equal), Scalene (no sides equal).',
            kn: 'ತ್ರಿಭುಜವು 3 ಬಾಹುಗಳು ಮತ್ತು 3 ಕೋನಗಳನ್ನು ಹೊಂದಿದೆ. ಎಲ್ಲಾ ಕೋನಗಳ ಮೊತ್ತ ಯಾವಾಗಲೂ 180° ಆಗಿರುತ್ತದೆ. ಪ್ರಕಾರಗಳು: ಸಮಭುಜ (ಎಲ್ಲಾ ಬಾಹುಗಳು ಸಮಾನ), ಸಮದ್ವಿಬಾಹು (2 ಬಾಹುಗಳು ಸಮಾನ), ವಿಷಮಬಾಹು (ಯಾವ ಬಾಹುಗಳೂ ಸಮಾನವಲ್ಲ).'
        },
        square: {
            en: 'A square has 4 equal sides and 4 right angles (90°). All sides are equal and all angles are equal. Area = side × side.',
            kn: 'ಚೌಕವು 4 ಸಮಾನ ಬಾಹುಗಳು ಮತ್ತು 4 ಲಂಬ ಕೋನಗಳನ್ನು (90°) ಹೊಂದಿದೆ. ಎಲ್ಲಾ ಬಾಹುಗಳು ಸಮಾನ ಮತ್ತು ಎಲ್ಲಾ ಕೋನಗಳು ಸಮಾನ. ವಿಸ್ತೀರ್ಣ = ಬಾಹು × ಬಾಹು.'
        },
        rectangle: {
            en: 'A rectangle has 4 sides with opposite sides equal. All angles are 90°. Area = length × width.',
            kn: 'ಆಯತವು 4 ಬಾಹುಗಳನ್ನು ಹೊಂದಿದ್ದು ಎದುರು ಬಾಹುಗಳು ಸಮಾನ. ಎಲ್ಲಾ ಕೋನಗಳು 90°. ವಿಸ್ತೀರ್ಣ = ಉದ್ದ × ಅಗಲ.'
        },
        circle: {
            en: 'A circle is a shape where all points are equidistant from the center. Circumference = 2πr, Area = πr².',
            kn: 'ವೃತ್ತವು ಕೇಂದ್ರದಿಂದ ಎಲ್ಲಾ ಬಿಂದುಗಳು ಸಮದೂರದಲ್ಲಿರುವ ಆಕೃತಿ. ಪರಿಧಿ = 2πr, ವಿಸ್ತೀರ್ಣ = πr².'
        }
    };

    shapeItems.forEach(item => {
        item.addEventListener('click', () => {
            const shape = item.getAttribute('data-shape');
            explanationBox.innerHTML = explanations[shape][currentLanguage];
            explanationBox.classList.add('active');

            item.querySelector('.shape-svg').style.transform = 'scale(1.2)';
            setTimeout(() => {
                item.querySelector('.shape-svg').style.transform = 'scale(1)';
            }, 300);
        });
    });

    const baseSlider = document.getElementById('baseSlider');
    const heightSlider = document.getElementById('heightSlider');
    const baseValue = document.getElementById('baseValue');
    const heightValue = document.getElementById('heightValue');
    const triangleArea = document.getElementById('triangleArea');
    const canvas = document.getElementById('triangleCanvas');
    const ctx = canvas.getContext('2d');

    function drawTriangle() {
        const base = parseInt(baseSlider.value);
        const height = parseInt(heightSlider.value);

        baseValue.textContent = base;
        heightValue.textContent = height;

        const area = 0.5 * base * height;
        triangleArea.textContent = area.toFixed(2);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#F5F7FA';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const scale = 1.2;
        const offsetX = (canvas.width - base * scale) / 2;
        const offsetY = (canvas.height - height * scale) / 2;

        ctx.beginPath();
        ctx.moveTo(offsetX + base * scale / 2, offsetY);
        ctx.lineTo(offsetX, offsetY + height * scale);
        ctx.lineTo(offsetX + base * scale, offsetY + height * scale);
        ctx.closePath();

        ctx.fillStyle = '#4A90E2';
        ctx.fill();
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 3;
        ctx.stroke();
    }

    baseSlider.addEventListener('input', drawTriangle);
    heightSlider.addEventListener('input', drawTriangle);
    drawTriangle();
}

function initVolumesInteractivity() {
    const shapeItems = document.querySelectorAll('.shape-item');
    const explanationBox = document.getElementById('volumeExplanation');

    const explanations = {
        cube: {
            en: 'A cube has 6 equal square faces. Volume = side³, Surface Area = 6 × side²',
            kn: 'ಘನವು 6 ಸಮಾನ ಚೌಕಾಕೃತಿ ಮುಖಗಳನ್ನು ಹೊಂದಿದೆ. ಆಯತನ = ಬಾಹು³, ಪೃಶ್ಠಫಲ = 6 × ಬಾಹು²'
        },
        cuboid: {
            en: 'A cuboid has 6 rectangular faces. Volume = length × width × height',
            kn: 'ಆಯತಘನವು 6 ಆಯತಾಕೃತಿ ಮುಖಗಳನ್ನು ಹೊಂದಿದೆ. ಆಯತನ = ಉದ್ದ × ಅಗಲ × ಎತ್ತರ'
        },
        cylinder: {
            en: 'A cylinder has 2 circular bases. Volume = πr²h, Surface Area = 2πr(r + h)',
            kn: 'ಸಿಲಿಂಡರ್ 2 ವೃತ್ತಾಕಾರ ತಳಗಳನ್ನು ಹೊಂದಿದೆ. ಆಯತನ = πr²h, ಪೃಶ್ಠಫಲ = 2πr(r + h)'
        },
        sphere: {
            en: 'A sphere is perfectly round. Volume = (4/3)πr³, Surface Area = 4πr²',
            kn: 'ಗೋಳವು ಸಂಪೂರ್ಣ ವೃತ್ತಾಕಾರವಾಗಿದೆ. ಆಯತನ = (4/3)πr³, ಪೃಶ್ಠಫಲ = 4πr²'
        }
    };

    shapeItems.forEach(item => {
        item.addEventListener('click', () => {
            const shape = item.getAttribute('data-3dshape');
            explanationBox.innerHTML = explanations[shape][currentLanguage];
            explanationBox.classList.add('active');
        });
    });

    const lengthSlider = document.getElementById('lengthSlider');
    const widthSlider = document.getElementById('widthSlider');
    const depthSlider = document.getElementById('depthSlider');
    const lengthValue = document.getElementById('lengthValue');
    const widthValue = document.getElementById('widthValue');
    const depthValue = document.getElementById('depthValue');
    const volumeResult = document.getElementById('volumeResult');

    function calculateVolume() {
        const length = parseInt(lengthSlider.value);
        const width = parseInt(widthSlider.value);
        const depth = parseInt(depthSlider.value);

        lengthValue.textContent = length;
        widthValue.textContent = width;
        depthValue.textContent = depth;

        const volume = length * width * depth;
        volumeResult.textContent = volume;
    }

    lengthSlider.addEventListener('input', calculateVolume);
    widthSlider.addEventListener('input', calculateVolume);
    depthSlider.addEventListener('input', calculateVolume);
    calculateVolume();
}

function initAlgebraInteractivity() {
    const slopeSlider = document.getElementById('slopeSlider');
    const interceptSlider = document.getElementById('interceptSlider');
    const slopeValue = document.getElementById('slopeValue');
    const interceptValue = document.getElementById('interceptValue');
    const equationDisplay = document.getElementById('equationDisplay');
    const canvas = document.getElementById('graphCanvas');
    const ctx = canvas.getContext('2d');

    function drawGraph() {
        const m = parseFloat(slopeSlider.value);
        const c = parseFloat(interceptSlider.value);

        slopeValue.textContent = m;
        interceptValue.textContent = c;
        equationDisplay.textContent = `${m}x + ${c}`;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#F5F7FA';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const scale = 20;

        ctx.strokeStyle = '#ddd';
        ctx.lineWidth = 1;

        for (let i = 0; i <= canvas.width; i += scale) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, canvas.height);
            ctx.stroke();
        }

        for (let i = 0; i <= canvas.height; i += scale) {
            ctx.beginPath();
            ctx.moveTo(0, i);
            ctx.lineTo(canvas.width, i);
            ctx.stroke();
        }

        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(centerX, 0);
        ctx.lineTo(centerX, canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, centerY);
        ctx.lineTo(canvas.width, centerY);
        ctx.stroke();

        ctx.strokeStyle = '#4A90E2';
        ctx.lineWidth = 3;
        ctx.beginPath();

        for (let x = -10; x <= 10; x += 0.1) {
            const y = m * x + c;
            const canvasX = centerX + x * scale;
            const canvasY = centerY - y * scale;

            if (x === -10) {
                ctx.moveTo(canvasX, canvasY);
            } else {
                ctx.lineTo(canvasX, canvasY);
            }
        }

        ctx.stroke();
    }

    slopeSlider.addEventListener('input', drawGraph);
    interceptSlider.addEventListener('input', drawGraph);
    drawGraph();

    const aSlider = document.getElementById('aSlider');
    const bSlider = document.getElementById('bSlider');
    const cSlider = document.getElementById('cSlider');
    const aValue = document.getElementById('aValue');
    const bValue = document.getElementById('bValue');
    const cValue = document.getElementById('cValue');
    const quadraticEquation = document.getElementById('quadraticEquation');
    const quadCanvas = document.getElementById('quadraticCanvas');
    const quadCtx = quadCanvas.getContext('2d');

    function drawQuadratic() {
        const a = parseFloat(aSlider.value);
        const b = parseFloat(bSlider.value);
        const c = parseFloat(cSlider.value);

        aValue.textContent = a;
        bValue.textContent = b;
        cValue.textContent = c;
        quadraticEquation.textContent = `${a}x² + ${b}x + ${c} = 0`;

        quadCtx.clearRect(0, 0, quadCanvas.width, quadCanvas.height);

        quadCtx.fillStyle = '#F5F7FA';
        quadCtx.fillRect(0, 0, quadCanvas.width, quadCanvas.height);

        const centerX = quadCanvas.width / 2;
        const centerY = quadCanvas.height / 2;
        const scale = 20;

        quadCtx.strokeStyle = '#ddd';
        quadCtx.lineWidth = 1;

        for (let i = 0; i <= quadCanvas.width; i += scale) {
            quadCtx.beginPath();
            quadCtx.moveTo(i, 0);
            quadCtx.lineTo(i, quadCanvas.height);
            quadCtx.stroke();
        }

        for (let i = 0; i <= quadCanvas.height; i += scale) {
            quadCtx.beginPath();
            quadCtx.moveTo(0, i);
            quadCtx.lineTo(quadCanvas.width, i);
            quadCtx.stroke();
        }

        quadCtx.strokeStyle = '#2C3E50';
        quadCtx.lineWidth = 2;
        quadCtx.beginPath();
        quadCtx.moveTo(centerX, 0);
        quadCtx.lineTo(centerX, quadCanvas.height);
        quadCtx.stroke();

        quadCtx.beginPath();
        quadCtx.moveTo(0, centerY);
        quadCtx.lineTo(quadCanvas.width, centerY);
        quadCtx.stroke();

        if (a !== 0) {
            quadCtx.strokeStyle = '#FF6B6B';
            quadCtx.lineWidth = 3;
            quadCtx.beginPath();

            for (let x = -10; x <= 10; x += 0.1) {
                const y = a * x * x + b * x + c;
                const canvasX = centerX + x * scale;
                const canvasY = centerY - y * scale;

                if (x === -10) {
                    quadCtx.moveTo(canvasX, canvasY);
                } else {
                    quadCtx.lineTo(canvasX, canvasY);
                }
            }

            quadCtx.stroke();
        }
    }

    aSlider.addEventListener('input', drawQuadratic);
    bSlider.addEventListener('input', drawQuadratic);
    cSlider.addEventListener('input', drawQuadratic);
    drawQuadratic();
}

function initTheoremsInteractivity() {
    const sideASlider = document.getElementById('sideASlider');
    const sideBSlider = document.getElementById('sideBSlider');
    const sideAValue = document.getElementById('sideAValue');
    const sideBValue = document.getElementById('sideBValue');
    const pythagorasCalc = document.getElementById('pythagorasCalc');
    const canvas = document.getElementById('pythagorasCanvas');
    const ctx = canvas.getContext('2d');

    function drawPythagoras() {
        const a = parseInt(sideASlider.value);
        const b = parseInt(sideBSlider.value);
        const c = Math.sqrt(a * a + b * b);

        sideAValue.textContent = a;
        sideBValue.textContent = b;

        pythagorasCalc.innerHTML = `${a}² + ${b}² = ${c.toFixed(2)}²<br>${a*a} + ${b*b} = ${(c*c).toFixed(2)}`;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#F5F7FA';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const scale = 25;
        const offsetX = 100;
        const offsetY = 100;

        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
        ctx.lineTo(offsetX + a * scale, offsetY);
        ctx.lineTo(offsetX + a * scale, offsetY + b * scale);
        ctx.closePath();

        ctx.fillStyle = 'rgba(74, 144, 226, 0.3)';
        ctx.fill();
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 16px sans-serif';
        ctx.fillText(`a = ${a}`, offsetX + a * scale / 2, offsetY - 10);
        ctx.fillText(`b = ${b}`, offsetX + a * scale + 20, offsetY + b * scale / 2);
        ctx.fillText(`c = ${c.toFixed(2)}`, offsetX + a * scale / 2 - 40, offsetY + b * scale / 2 + 20);

        ctx.fillStyle = '#FFB347';
        ctx.fillRect(offsetX + a * scale - 15, offsetY, 15, 15);
    }

    sideASlider.addEventListener('input', drawPythagoras);
    sideBSlider.addEventListener('input', drawPythagoras);
    drawPythagoras();
}

window.animatePythagoras = function() {
    alert(currentLanguage === 'en' ?
          'Animation: The square on the hypotenuse equals the sum of squares on the other two sides!' :
          'ಅನಿಮೇಶನ್: ಕರ್ಣದ ಮೇಲಿನ ವರ್ಗವು ಇತರ ಎರಡು ಬಾಹುಗಳ ಮೇಲಿನ ವರ್ಗಗಳ ಮೊತ್ತಕ್ಕೆ ಸಮಾನವಾಗಿದೆ!');
};

function initArithmeticInteractivity() {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const operation = document.getElementById('operation');
    const result = document.getElementById('result');

    function updateResult() {
        const n1 = parseFloat(num1.value) || 0;
        const n2 = parseFloat(num2.value) || 0;
        const op = operation.value;

        let res;
        switch(op) {
            case '+': res = n1 + n2; break;
            case '-': res = n1 - n2; break;
            case '*': res = n1 * n2; break;
            case '/': res = n2 !== 0 ? n1 / n2 : 'Error'; break;
        }

        result.textContent = typeof res === 'number' ? res.toFixed(2) : res;
    }

    num1.addEventListener('input', updateResult);
    num2.addEventListener('input', updateResult);
    operation.addEventListener('change', updateResult);
    updateResult();

    const draggables = document.querySelectorAll('.draggable-number');
    const dropZone = document.getElementById('dropZone');
    const dragResult = document.getElementById('dragResult');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.getAttribute('data-value'));
        });

        draggable.addEventListener('touchstart', (e) => {
            e.target.classList.add('dragging');
        });
    });

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.style.background = 'rgba(74, 144, 226, 0.2)';
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.style.background = '';
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        const value = e.dataTransfer.getData('text/plain');
        dropZone.style.background = '';

        if (value === '15') {
            dragResult.textContent = currentLanguage === 'en' ? '✓ Correct! 7 + 8 = 15' : '✓ ಸರಿ! 7 + 8 = 15';
            dragResult.style.color = '#4CAF50';
        } else {
            dragResult.textContent = currentLanguage === 'en' ? '✗ Try again!' : '✗ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ!';
            dragResult.style.color = '#FF6B6B';
        }
    });
}

window.calculate = function() {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const operation = document.getElementById('operation');
    const result = document.getElementById('result');

    const n1 = parseFloat(num1.value) || 0;
    const n2 = parseFloat(num2.value) || 0;
    const op = operation.value;

    let res;
    switch(op) {
        case '+': res = n1 + n2; break;
        case '-': res = n1 - n2; break;
        case '*': res = n1 * n2; break;
        case '/': res = n2 !== 0 ? n1 / n2 : 'Error'; break;
    }

    result.textContent = typeof res === 'number' ? res.toFixed(2) : res;

    result.style.transform = 'scale(1.2)';
    setTimeout(() => {
        result.style.transform = 'scale(1)';
    }, 300);
};

window.toggleAnswer = function(id) {
    const answerBox = document.getElementById(id);
    answerBox.classList.toggle('show');
};

document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('langToggle');
    langToggle.addEventListener('click', toggleLanguage);

    const modalClose = document.getElementById('modalClose');
    modalClose.addEventListener('click', closeModal);

    const modal = document.getElementById('modal');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    const topicCards = document.querySelectorAll('.topic-card');
    topicCards.forEach(card => {
        card.addEventListener('click', () => {
            const topic = card.getAttribute('data-topic');
            openModal(topic);
        });
    });

    const style = document.createElement('style');
    style.textContent = `
        .draggable-number {
            background: #4A90E2;
            color: white;
            padding: 1.5rem 2rem;
            border-radius: 12px;
            font-size: 1.5rem;
            font-weight: bold;
            cursor: move;
            user-select: none;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
        }

        .draggable-number:active {
            transform: scale(1.1);
            cursor: grabbing;
        }

        .drop-zone {
            border: 3px dashed #4A90E2;
            border-radius: 12px;
            padding: 3rem;
            text-align: center;
            font-size: 1.3rem;
            font-weight: 600;
            color: #7F8C8D;
            transition: all 0.3s ease;
            min-height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .dragging {
            opacity: 0.5;
        }
    `;
    document.head.appendChild(style);
});

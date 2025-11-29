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

let currentShape = 'triangle';

document.addEventListener('DOMContentLoaded', () => {
    const shapeItems = document.querySelectorAll('.shape-item');
    const explanationBox = document.getElementById('shapeExplanation');
    const shapeContainer = document.querySelector('.shape-container');
    let demoContainer = document.querySelector('.interactive-demo');

    shapeItems.forEach(item => {
        item.addEventListener('click', () => {
            const shape = item.getAttribute('data-shape');
            currentShape = shape;
            // Explanation box removed: do not populate or show it
            if (explanationBox) {
                explanationBox.innerHTML = '';
                explanationBox.classList.remove('active');
            }

            shapeItems.forEach(i => i.classList.remove('selected'));
            item.classList.add('selected');

            item.querySelector('.shape-svg').style.transform = 'scale(1.2)';
            setTimeout(() => {
                item.querySelector('.shape-svg').style.transform = 'scale(1)';
            }, 300);

            updateDemo(shape);
        });
    });

    function ensureDemoContainer() {
        if (!demoContainer && shapeContainer) {
            demoContainer = document.createElement('div');
            demoContainer.className = 'interactive-demo';
            demoContainer.setAttribute('aria-live', 'polite');
            shapeContainer.appendChild(demoContainer);
        }
        return demoContainer;
    }

    function updateDemo(shape) {
        const demos = {
            triangle: createTriangleDemo,
            square: createSquareDemo,
            rectangle: createRectangleDemo,
            circle: createCircleDemo
        };

        ensureDemoContainer();
        if (!demoContainer) return;
        demoContainer.innerHTML = '';
        demos[shape]();
    }

    function createTriangleDemo() {
        demoContainer.innerHTML = `
            <h3 data-en="TRIANGLE" data-kn="ತ್ರಿಭುಜ">TRIANGLE</h3>

            <div class="definition-box" style="background: linear-gradient(135deg, #5BA3F5 0%, #3d7fc4 100%);">
                <p class="definition-text" data-en="A triangle has 3 sides and 3 angles. The sum of all angles is always 180°." data-kn="ತ್ರಿಭುಜವು 3 ಬಾಹುಗಳು ಮತ್ತು 3 ಕೋನಗಳನ್ನು ಹೊಂದಿದೆ. ಎಲ್ಲಾ ಕೋನಗಳ ಮೊತ್ತ ಯಾವಾಗಲೂ 180° ಆಗಿರುತ್ತದೆ.">
                    A triangle has 3 sides and 3 angles. The sum of all angles is always 180°.
                </p>
                <p class="definition-text" style="font-size: 1.1rem; margin: 1rem 0 1.5rem 0;" data-en="Types: Equilateral (all sides equal), Isosceles (2 sides equal), Scalene (no sides equal)." data-kn="ಪ್ರಕಾರಗಳು: ಸಮಭುಜ (ಎಲ್ಲಾ ಬಾಹುಗಳು ಸಮಾನ), ಸಮದ್ವಿಬಾಹು (2 ಬಾಹುಗಳು ಸಮಾನ), ವಿಷಮಬಾಹು (ಬಾಹುಗಳು ಸಮಾನವಲ್ಲ).">
                    Types: Equilateral (all sides equal), Isosceles (2 sides equal), Scalene (no sides equal).
                </p>
                <div class="definition-formulas">
                    <span class="definition-formula" style="color: #5BA3F5;">Area = ½ × base × height</span>
                    <span class="definition-formula" style="color: #5BA3F5;">Perimeter = a + b + c</span>
                </div>
            </div>

            <div class="shape-grid" style="margin-bottom: 2rem;">
                <div class="shape-item" style="min-height: auto; padding: 1rem;">
                    <h4 style="color: var(--primary-blue); margin-bottom: 0.5rem;" data-en="Types" data-kn="ಪ್ರಕಾರಗಳು">Types</h4>
                    <ul style="text-align: left; font-size: 0.9rem; line-height: 1.6;">
                        <li data-en="Equilateral: All sides equal" data-kn="ಸಮಭುಜ: ಎಲ್ಲಾ ಬಾಹುಗಳು ಸಮಾನ">Equilateral: All sides equal</li>
                        <li data-en="Isosceles: 2 sides equal" data-kn="ಸಮದ್ವಿಬಾಹು: 2 ಬಾಹುಗಳು ಸಮಾನ">Isosceles: 2 sides equal</li>
                        <li data-en="Scalene: No sides equal" data-kn="ವಿಷಮಬಾಹು: ಯಾವ ಬಾಹುಗಳೂ ಸಮಾನವಲ್ಲ">Scalene: No sides equal</li>
                    </ul>
                </div>
                <div class="shape-item" style="min-height: auto; padding: 1rem;">
                    <h4 style="color: var(--primary-blue); margin-bottom: 0.5rem;" data-en="Key Parts" data-kn="ಮುಖ್ಯ ಭಾಗಗಳು">Key Parts</h4>
                    <ul style="text-align: left; font-size: 0.9rem; line-height: 1.6;">
                        <li data-en="Base: Bottom side" data-kn="ಆಧಾರ: ಕೆಳಗಿನ ಬಾಹು">Base: Bottom side</li>
                        <li data-en="Height: Perpendicular line to base" data-kn="ಎತ್ತರ: ಆಧಾರಕ್ಕೆ ಲಂಬ ರೇಖೆ">Height: Perpendicular line to base</li>
                        <li data-en="Vertex: Corner point" data-kn="ಶೃಂಗ: ಮೂಲೆ ಬಿಂದು">Vertex: Corner point</li>
                    </ul>
                </div>
                <div class="shape-item" style="min-height: auto; padding: 1rem;">
                    <h4 style="color: var(--primary-blue); margin-bottom: 0.5rem;" data-en="Properties" data-kn="ಗುಣಗಳು">Properties</h4>
                    <ul style="text-align: left; font-size: 0.9rem; line-height: 1.6;">
                        <li data-en="Sum of angles = 180°" data-kn="ಕೋನಗಳ ಮೊತ್ತ = 180°">Sum of angles = 180°</li>
                        <li data-en="Perimeter = a + b + c" data-kn="ಪರಿಧಿ = a + b + c">Perimeter = a + b + c</li>
                        <li data-en="Area = ½ × base × height" data-kn="ವಿಸ್ತೀರ್ಣ = ½ × ಆಧಾರ × ಎತ್ತರ">Area = ½ × base × height</li>
                    </ul>
                </div>
            </div>

            <div class="demo-layout">
                <div class="slider-vertical-container">
                    <div class="slider-label" data-en="Base" data-kn="ಆಧಾರ">Base</div>
                    <input type="range" min="50" max="200" value="100" class="slider-vertical" id="param1Slider" orient="vertical">
                    <div class="slider-value" id="param1Value">100</div>
                </div>
                <div class="canvas-container">
                    <canvas id="shapeCanvas" width="300" height="300"></canvas>
                </div>
                <div class="slider-vertical-container">
                    <div class="slider-label" data-en="Height" data-kn="ಎತ್ತರ">Height</div>
                    <input type="range" min="50" max="200" value="100" class="slider-vertical" id="param2Slider" orient="vertical">
                    <div class="slider-value" id="param2Value">100</div>
                </div>
                <div class="formula-box">
                    <div style="margin-bottom: 0.5rem;"><strong data-en="Area = ½ × base × height" data-kn="ವಿಸ್ತೀರ್ಣ = ½ × ಆಧಾರ × ಎತ್ತರ">Area = ½ × base × height</strong></div>
                    <div style="margin-bottom: 0.5rem;"><span data-en="Area:" data-kn="ವಿಸ್ತೀರ್ಣ:">Area:</span> <span id="shapeArea">5000</span></div>
                    <div><strong data-en="Perimeter = a + b + c" data-kn="ಪರಿಧಿ = a + b + c">Perimeter = a + b + c</strong></div>
                    <div><span data-en="Perimeter:" data-kn="ಪರಿಧಿ:">Perimeter:</span> <span id="shapePerimeter">300</span></div>
                </div>
            </div>
        `;
        updateLanguage();
        initTriangleInteraction();
    }

    function createSquareDemo() {
        demoContainer.innerHTML = `
            <h3 data-en="SQUARE" data-kn="ಚೌಕ">SQUARE</h3>

            <div class="definition-box" style="background: linear-gradient(135deg, #5DD179 0%, #3db85e 100%);">
                <p class="definition-text" data-en="A square is a regular quadrilateral with four equal sides and four right angles." data-kn="ಚೌಕವು ನಾಲುಗ ಸಮಾನ ಬಾಹುಗಳು ಮತ್ತು ನಾಲುಗ ಸಮಕೋನಗಳನ್ನು ಹೊಂದಿರುವ ನಿಯಮಿತ ಚತುರ್ಭುಜ.">
                    A square is a regular quadrilateral with four equal sides and four right angles.
                </p>
                <div class="definition-formulas">
                    <span class="definition-formula" style="color: #5DD179;">Area = side²</span>
                    <span class="definition-formula" style="color: #5DD179;">Perimeter = 4 × side</span>
                </div>
            </div>

            <div class="shape-grid" style="margin-bottom: 2rem;">
                <div class="shape-item" style="min-height: auto; padding: 1rem;">
                    <h4 style="color: var(--primary-green); margin-bottom: 0.5rem;" data-en="Key Parts" data-kn="ಮುಖ್ಯ ಭಾಗಗಳು">Key Parts</h4>
                    <ul style="text-align: left; font-size: 0.9rem; line-height: 1.6;">
                        <li data-en="Side: Equal length edges" data-kn="ಬಾಹು: ಸಮಾನ ಉದ್ದದ ಅಂಚುಗಳು">Side: Equal length edges</li>
                        <li data-en="Diagonal: Line connecting opposite corners" data-kn="ಕರ್ಣ: ಎದುರು ಮೂಲೆಗಳನ್ನು ಸಂಪರ್ಕಿಸುವ ರೇಖೆ">Diagonal: Line connecting opposite corners</li>
                        <li data-en="Vertex: Corner point (4 total)" data-kn="ಶೃಂಗ: ಮೂಲೆ ಬಿಂದು (ಒಟ್ಟು 4)">Vertex: Corner point (4 total)</li>
                    </ul>
                </div>
                <div class="shape-item" style="min-height: auto; padding: 1rem;">
                    <h4 style="color: var(--primary-green); margin-bottom: 0.5rem;" data-en="Properties" data-kn="ಗುಣಗಳು">Properties</h4>
                    <ul style="text-align: left; font-size: 0.9rem; line-height: 1.6;">
                        <li data-en="All 4 sides equal" data-kn="ಎಲ್ಲಾ 4 ಬಾಹುಗಳು ಸಮಾನ">All 4 sides equal</li>
                        <li data-en="All 4 angles = 90°" data-kn="ಎಲ್ಲಾ 4 ಕೋನಗಳು = 90°">All 4 angles = 90°</li>
                        <li data-en="Diagonals bisect at 90°" data-kn="ಕರ್ಣಗಳು 90° ನಲ್ಲಿ ವಿಭಜನೆ">Diagonals bisect at 90°</li>
                    </ul>
                </div>
                <div class="shape-item" style="min-height: auto; padding: 1rem;">
                    <h4 style="color: var(--primary-green); margin-bottom: 0.5rem;" data-en="Formulas" data-kn="ಸೂತ್ರಗಳು">Formulas</h4>
                    <ul style="text-align: left; font-size: 0.9rem; line-height: 1.6;">
                        <li data-en="Area = side²" data-kn="ವಿಸ್ತೀರ್ಣ = ಬಾಹು²">Area = side²</li>
                        <li data-en="Perimeter = 4 × side" data-kn="ಪರಿಧಿ = 4 × ಬಾಹು">Perimeter = 4 × side</li>
                        <li data-en="Diagonal = side × √2" data-kn="ಕರ್ಣ = ಬಾಹು × √2">Diagonal = side × √2</li>
                    </ul>
                </div>
            </div>

            <div class="demo-layout">
                <div class="slider-vertical-container">
                    <div class="slider-label" data-en="Side" data-kn="ಬಾಹು">Side</div>
                    <input type="range" min="60" max="200" value="120" class="slider-vertical" id="param1Slider" orient="vertical">
                    <div class="slider-value" id="param1Value">120</div>
                </div>
                <div class="canvas-container">
                    <canvas id="shapeCanvas" width="300" height="300"></canvas>
                </div>
                <div class="formula-box">
                    <div style="margin-bottom: 0.5rem;"><strong data-en="Area = side²" data-kn="ವಿಸ್ತೀರ್ಣ = ಬಾಹು²">Area = side²</strong></div>
                    <div style="margin-bottom: 0.5rem;"><span data-en="Area:" data-kn="ವಿಸ್ತೀರ್ಣ:">Area:</span> <span id="shapeArea">14400</span></div>
                    <div><strong data-en="Perimeter = 4 × side" data-kn="ಪರಿಧಿ = 4 × ಬಾಹು">Perimeter = 4 × side</strong></div>
                    <div><span data-en="Perimeter:" data-kn="ಪರಿಧಿ:">Perimeter:</span> <span id="shapePerimeter">480</span></div>
                </div>
            </div>
        `;
        updateLanguage();
        initSquareInteraction();
    }

    function createRectangleDemo() {
        demoContainer.innerHTML = `
            <h3 data-en="RECTANGLE" data-kn="ಆಯತ">RECTANGLE</h3>

            <div class="definition-box" style="background: linear-gradient(135deg, #FF7B7B 0%, #e65555 100%);">
                <p class="definition-text" data-en="A rectangle is a quadrilateral with four right angles and opposite sides equal." data-kn="ಆಯತವು ನಾಲುಗ ಸಮಕೋನಗಳು ಮತ್ತು ಎದುರುಬುಗಳ ಬಾಹುಗಳು ಸಮಾನವಾಗಿರುವ ಚತುರ್ಭುಜ.">
                    A rectangle is a quadrilateral with four right angles and opposite sides equal.
                </p>
                <div class="definition-formulas">
                    <span class="definition-formula" style="color: #FF7B7B;">Area = length × width</span>
                    <span class="definition-formula" style="color: #FF7B7B;">Perimeter = 2(l + w)</span>
                </div>
            </div>

            <div class="shape-grid" style="margin-bottom: 2rem;">
                <div class="shape-item" style="min-height: auto; padding: 1rem;">
                    <h4 style="color: var(--primary-red); margin-bottom: 0.5rem;" data-en="Key Parts" data-kn="ಮುಖ್ಯ ಭಾಗಗಳು">Key Parts</h4>
                    <ul style="text-align: left; font-size: 0.9rem; line-height: 1.6;">
                        <li data-en="Length: Longer side" data-kn="ಉದ್ದ: ದೀರ್ಘ ಬಾಹು">Length: Longer side</li>
                        <li data-en="Width: Shorter side" data-kn="ಅಗಲ: ಕಿರು ಬಾಹು">Width: Shorter side</li>
                        <li data-en="Diagonal: Connects opposite corners" data-kn="ಕರ್ಣ: ಎದುರು ಮೂಲೆಗಳನ್ನು ಸಂಪರ್ಕಿಸುತ್ತದೆ">Diagonal: Connects opposite corners</li>
                    </ul>
                </div>
                <div class="shape-item" style="min-height: auto; padding: 1rem;">
                    <h4 style="color: var(--primary-red); margin-bottom: 0.5rem;" data-en="Properties" data-kn="ಗುಣಗಳು">Properties</h4>
                    <ul style="text-align: left; font-size: 0.9rem; line-height: 1.6;">
                        <li data-en="Opposite sides equal" data-kn="ಎದುರು ಬಾಹುಗಳು ಸಮಾನ">Opposite sides equal</li>
                        <li data-en="All 4 angles = 90°" data-kn="ಎಲ್ಲಾ 4 ಕೋನಗಳು = 90°">All 4 angles = 90°</li>
                        <li data-en="Diagonals equal & bisect each other" data-kn="ಕರ್ಣಗಳು ಸಮಾನ ಮತ್ತು ಪರಸ್ಪರ ವಿಭಜನೆ">Diagonals equal & bisect each other</li>
                    </ul>
                </div>
                <div class="shape-item" style="min-height: auto; padding: 1rem;">
                    <h4 style="color: var(--primary-red); margin-bottom: 0.5rem;" data-en="Formulas" data-kn="ಸೂತ್ರಗಳು">Formulas</h4>
                    <ul style="text-align: left; font-size: 0.9rem; line-height: 1.6;">
                        <li data-en="Area = length × width" data-kn="ವಿಸ್ತೀರ್ಣ = ಉದ್ದ × ಅಗಲ">Area = length × width</li>
                        <li data-en="Perimeter = 2(l + w)" data-kn="ಪರಿಧಿ = 2(ಉದ್ದ + ಅಗಲ)">Perimeter = 2(l + w)</li>
                        <li data-en="Diagonal = √(l² + w²)" data-kn="ಕರ್ಣ = √(ಉದ್ದ² + ಅಗಲ²)">Diagonal = √(l² + w²)</li>
                    </ul>
                </div>
            </div>

            <div class="demo-layout">
                <div class="slider-vertical-container">
                    <div class="slider-label" data-en="Length" data-kn="ಉದ್ದ">Length</div>
                    <input type="range" min="80" max="220" value="150" class="slider-vertical" id="param1Slider" orient="vertical">
                    <div class="slider-value" id="param1Value">150</div>
                </div>
                <div class="canvas-container">
                    <canvas id="shapeCanvas" width="300" height="300"></canvas>
                </div>
                <div class="slider-vertical-container">
                    <div class="slider-label" data-en="Width" data-kn="ಅಗಲ">Width</div>
                    <input type="range" min="60" max="150" value="100" class="slider-vertical" id="param2Slider" orient="vertical">
                    <div class="slider-value" id="param2Value">100</div>
                </div>
                <div class="formula-box">
                    <div style="margin-bottom: 0.5rem;"><strong data-en="Area = length × width" data-kn="ವಿಸ್ತೀರ್ಣ = ಉದ್ದ × ಅಗಲ">Area = length × width</strong></div>
                    <div style="margin-bottom: 0.5rem;"><span data-en="Area:" data-kn="ವಿಸ್ತೀರ್ಣ:">Area:</span> <span id="shapeArea">15000</span></div>
                    <div><strong data-en="Perimeter = 2(l + w)" data-kn="ಪರಿಧಿ = 2(ಉದ್ದ + ಅಗಲ)">Perimeter = 2(l + w)</strong></div>
                    <div><span data-en="Perimeter:" data-kn="ಪರಿಧಿ:">Perimeter:</span> <span id="shapePerimeter">500</span></div>
                </div>
            </div>
        `;
        updateLanguage();
        initRectangleInteraction();
    }

    function createCircleDemo() {
        demoContainer.innerHTML = `
            <h3 data-en="CIRCLE" data-kn="ವೃತ್ತ">CIRCLE</h3>

            <div class="definition-box">
                <p class="definition-text" data-en="A circle is a shape where all points are equidistant from the center." data-kn="ವೃತ್ತವು ಎಲ್ಲಾ ಬಿಂದುಗಳು ಕೇಂದ್ರದಿಂದ ಸಮ ದೂರದಲ್ಲಿರುವ ಆಕಾರ.">
                    A circle is a shape where all points are equidistant from the center.
                </p>
                <div class="definition-formulas">
                    <span class="definition-formula">Circumference = 2πr</span>
                    <span class="definition-formula">Area = πr²</span>
                </div>
            </div>

            <div class="shape-grid" style="margin-bottom: 2rem;">
                <div class="shape-item" style="min-height: auto; padding: 1rem;">
                    <h4 style="color: var(--primary-orange); margin-bottom: 0.5rem;" data-en="Key Parts" data-kn="ಮುಖ್ಯ ಭಾಗಗಳು">Key Parts</h4>
                    <ul style="text-align: left; font-size: 0.9rem; line-height: 1.6;">
                        <li data-en="Radius: Center to edge" data-kn="ತ್ರಿಜ್ಯ: ಕೇಂದ್ರದಿಂದ ಅಂಚಿಗೆ">Radius: Center to edge</li>
                        <li data-en="Diameter: Across through center" data-kn="ವ್ಯಾಸ: ಕೇಂದ್ರದ ಮೂಲಕ ಅಡ್ಡಲಾಗಿ">Diameter: Across through center</li>
                        <li data-en="Chord: Line between two points" data-kn="ಜ್ಯಾ: ಎರಡು ಬಿಂದುಗಳ ನಡುವಿನ ರೇಖೆ">Chord: Line between two points</li>
                    </ul>
                </div>
                <div class="shape-item" style="min-height: auto; padding: 1rem;">
                    <h4 style="color: var(--primary-orange); margin-bottom: 0.5rem;" data-en="More Parts" data-kn="ಹೆಚ್ಚಿನ ಭಾಗಗಳು">More Parts</h4>
                    <ul style="text-align: left; font-size: 0.9rem; line-height: 1.6;">
                        <li data-en="Tangent: Touches at one point" data-kn="ಸ್ಪರ್ಶ: ಒಂದು ಬಿಂದುವಿನಲ್ಲಿ ಸ್ಪರ್ಶಿಸುತ್ತದೆ">Tangent: Touches at one point</li>
                        <li data-en="Sector: Pie slice portion" data-kn="ವಲಯ: ಪೈ ತುಂಡು ಭಾಗ">Sector: Pie slice portion</li>
                        <li data-en="Arc: Curved portion of edge" data-kn="ಚಾಪ: ಅಂಚಿನ ವಕ್ರ ಭಾಗ">Arc: Curved portion of edge</li>
                    </ul>
                </div>
                <div class="shape-item" style="min-height: auto; padding: 1rem;">
                    <h4 style="color: var(--primary-orange); margin-bottom: 0.5rem;" data-en="Formulas" data-kn="ಸೂತ್ರಗಳು">Formulas</h4>
                    <ul style="text-align: left; font-size: 0.9rem; line-height: 1.6;">
                        <li data-en="Area = πr²" data-kn="ವಿಸ್ತೀರ್ಣ = πr²">Area = πr²</li>
                        <li data-en="Circumference = 2πr" data-kn="ಪರಿಧಿ = 2πr">Circumference = 2πr</li>
                        <li data-en="Diameter = 2r" data-kn="ವ್ಯಾಸ = 2r">Diameter = 2r</li>
                    </ul>
                </div>
            </div>

            <div class="demo-layout">
                <div class="slider-vertical-container">
                    <div class="slider-label" data-en="Radius" data-kn="ತ್ರಿಜ್ಯ">Radius</div>
                    <input type="range" min="30" max="120" value="70" class="slider-vertical" id="param1Slider" orient="vertical">
                    <div class="slider-value" id="param1Value">70</div>
                </div>
                <div class="canvas-container">
                    <canvas id="shapeCanvas" width="300" height="300"></canvas>
                </div>
                <div class="formula-box">
                    <div style="margin-bottom: 0.5rem;"><strong data-en="Area = πr²" data-kn="ವಿಸ್ತೀರ್ಣ = πr²">Area = πr²</strong></div>
                    <div style="margin-bottom: 0.5rem;"><span data-en="Area:" data-kn="ವಿಸ್ತೀರ್ಣ:">Area:</span> <span id="shapeArea">15393.80</span></div>
                    <div><strong data-en="Circumference = 2πr" data-kn="ಪರಿಧಿ = 2πr">Circumference = 2πr</strong></div>
                    <div><span data-en="Circumference:" data-kn="ಪರಿಧಿ:">Circumference:</span> <span id="shapePerimeter">439.82</span></div>
                </div>
            </div>
        `;
        updateLanguage();
        initCircleInteraction();
    }

    function initTriangleInteraction() {
        const slider1 = document.getElementById('param1Slider');
        const slider2 = document.getElementById('param2Slider');
        const value1 = document.getElementById('param1Value');
        const value2 = document.getElementById('param2Value');
        const areaEl = document.getElementById('shapeArea');
        const perimeterEl = document.getElementById('shapePerimeter');
        const canvas = document.getElementById('shapeCanvas');
        const ctx = canvas.getContext('2d');

        function draw() {
            const base = parseInt(slider1.value);
            const height = parseInt(slider2.value);
            value1.textContent = base;
            value2.textContent = height;
            const side1 = Math.sqrt(Math.pow(base/2, 2) + Math.pow(height, 2));
            const perimeter = base + side1 + side1;
            areaEl.textContent = (0.5 * base * height).toFixed(2);
            perimeterEl.textContent = perimeter.toFixed(2);

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#0a0e14';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const scale = 1.2;
            const offsetX = (canvas.width - base * scale) / 2;
            const offsetY = (canvas.height - height * scale) / 2;

            ctx.beginPath();
            ctx.moveTo(offsetX + base * scale / 2, offsetY);
            ctx.lineTo(offsetX, offsetY + height * scale);
            ctx.lineTo(offsetX + base * scale, offsetY + height * scale);
            ctx.closePath();
            ctx.fillStyle = '#5BA3F5';
            ctx.fill();
            ctx.strokeStyle = '#e4e6eb';
            ctx.lineWidth = 3;
            ctx.stroke();
        }

        slider1.addEventListener('input', draw);
        slider2.addEventListener('input', draw);
        draw();
    }

    function initSquareInteraction() {
        const slider1 = document.getElementById('param1Slider');
        const value1 = document.getElementById('param1Value');
        const areaEl = document.getElementById('shapeArea');
        const perimeterEl = document.getElementById('shapePerimeter');
        const canvas = document.getElementById('shapeCanvas');
        const ctx = canvas.getContext('2d');

        function draw() {
            const side = parseInt(slider1.value);
            value1.textContent = side;
            areaEl.textContent = (side * side).toFixed(2);
            perimeterEl.textContent = (4 * side).toFixed(2);

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#0a0e14';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const offsetX = (canvas.width - side) / 2;
            const offsetY = (canvas.height - side) / 2;

            ctx.fillStyle = '#5DD179';
            ctx.fillRect(offsetX, offsetY, side, side);
            ctx.strokeStyle = '#e4e6eb';
            ctx.lineWidth = 3;
            ctx.strokeRect(offsetX, offsetY, side, side);
        }

        slider1.addEventListener('input', draw);
        draw();
    }

    function initRectangleInteraction() {
        const slider1 = document.getElementById('param1Slider');
        const slider2 = document.getElementById('param2Slider');
        const value1 = document.getElementById('param1Value');
        const value2 = document.getElementById('param2Value');
        const areaEl = document.getElementById('shapeArea');
        const perimeterEl = document.getElementById('shapePerimeter');
        const canvas = document.getElementById('shapeCanvas');
        const ctx = canvas.getContext('2d');

        function draw() {
            const length = parseInt(slider1.value);
            const width = parseInt(slider2.value);
            value1.textContent = length;
            value2.textContent = width;
            areaEl.textContent = (length * width).toFixed(2);
            perimeterEl.textContent = (2 * (length + width)).toFixed(2);

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#0a0e14';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const offsetX = (canvas.width - length) / 2;
            const offsetY = (canvas.height - width) / 2;

            ctx.fillStyle = '#FF7B7B';
            ctx.fillRect(offsetX, offsetY, length, width);
            ctx.strokeStyle = '#e4e6eb';
            ctx.lineWidth = 3;
            ctx.strokeRect(offsetX, offsetY, length, width);
        }

        slider1.addEventListener('input', draw);
        slider2.addEventListener('input', draw);
        draw();
    }

    function initCircleInteraction() {
        const slider1 = document.getElementById('param1Slider');
        const value1 = document.getElementById('param1Value');
        const areaEl = document.getElementById('shapeArea');
        const perimeterEl = document.getElementById('shapePerimeter');
        const canvas = document.getElementById('shapeCanvas');
        const ctx = canvas.getContext('2d');

        function draw() {
            const radius = parseInt(slider1.value);
            value1.textContent = radius;
            areaEl.textContent = (Math.PI * radius * radius).toFixed(2);
            perimeterEl.textContent = (2 * Math.PI * radius).toFixed(2);

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#0a0e14';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
            ctx.fillStyle = '#FFC166';
            ctx.fill();
            ctx.strokeStyle = '#e4e6eb';
            ctx.lineWidth = 3;
            ctx.stroke();
        }

        slider1.addEventListener('input', draw);
        draw();
    }

    // Do not show any shape demo by default; wait for user click
    document.querySelector('.shape-item[data-shape="triangle"]').classList.add('selected');
});

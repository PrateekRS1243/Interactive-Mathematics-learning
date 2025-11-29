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

window.toggleAnswer = function(id) {
    const answerBox = document.getElementById(id);
    answerBox.classList.toggle('show');
};

document.addEventListener('DOMContentLoaded', () => {
    const shapeItems = document.querySelectorAll('.shape-item');
    const explanationBox = document.getElementById('volumeExplanation');

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
});

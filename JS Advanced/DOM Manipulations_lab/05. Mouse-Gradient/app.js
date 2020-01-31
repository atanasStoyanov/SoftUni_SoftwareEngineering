function attachGradientEvents() {
    let gradientBox = document.getElementById('gradient-box');
    let result = document.getElementById('result');
    let boxWidth = gradientBox.clientWidth;

    gradientBox.addEventListener('mousemove', showPercent);
    gradientBox.addEventListener('mouseout', hidePercent);

    function showPercent(e) {
        e.preventDefault();

        let currentPosition = e.offsetX;
        let percent = calculatePercent(boxWidth, currentPosition);
        
        addTextToElement(result, percent);

    }

    function calculatePercent(elementWidht, position) {
        return `${Math.floor(position / elementWidht * 100)}%`;
    }

    function addTextToElement(HTMLElement, text) {
        HTMLElement.textContent = text;
    }

    function hidePercent(e) {
        e.preventDefault();

        result.textContent = '';
    }

}
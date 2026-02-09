const generateBtn = document.getElementById('generate-btn');
const powerballNumbersDiv = document.getElementById('powerball-numbers');
const powerballNumberDiv = document.getElementById('powerball-number');

function generatePowerballNumbers() {
    const whiteBalls = [];
    while (whiteBalls.length < 5) {
        const randomNum = Math.floor(Math.random() * 69) + 1;
        if (!whiteBalls.includes(randomNum)) {
            whiteBalls.push(randomNum);
        }
    }
    whiteBalls.sort((a, b) => a - b);

    const powerball = Math.floor(Math.random() * 26) + 1;

    return { whiteBalls, powerball };
}

function displayNumbers(numbers) {
    const whiteBallDivs = powerballNumbersDiv.querySelectorAll('.number-circle');
    whiteBallDivs.forEach((div, index) => {
        div.textContent = numbers.whiteBalls[index];
    });

    const powerballDiv = powerballNumberDiv.querySelector('.number-circle');
    powerballDiv.textContent = numbers.powerball;
}

generateBtn.addEventListener('click', () => {
    const numbers = generatePowerballNumbers();
    displayNumbers(numbers);
});

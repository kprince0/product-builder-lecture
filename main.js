const generateBtn = document.getElementById('generate-btn');
const powerballNumbersDiv = document.getElementById('powerball-numbers');
const powerballNumberDiv = document.getElementById('powerball-number');
const themeToggle = document.getElementById('checkbox');
const body = document.body;

// Function to set the theme
function setTheme(isDarkMode) {
    if (isDarkMode) {
        body.classList.add('dark-mode');
        themeToggle.checked = true;
    } else {
        body.classList.remove('dark-mode');
        themeToggle.checked = false;
    }
}

// Load theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    setTheme(true);
} else {
    setTheme(false); // Default to light mode
}

// Event listener for theme toggle
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        setTheme(true);
        localStorage.setItem('theme', 'dark');
    } else {
        setTheme(false);
        localStorage.setItem('theme', 'light');
    }
});

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

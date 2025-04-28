const questionContainer = document.getElementById('quiz-container');
const optionsContainer = document.getElementById('options');
const submitButton = document.getElementById('submit-button');
const resultsDiv = document.getElementById('results');

// Sample quiz questions (replace with your own)
const questions = [
    {
        question: "What is the primary goal of cybersecurity?",
        options: ["To make computers faster", "To protect systems and data", "To create new software", "To design hardware"],
        answer: 1
    },
    {
        question: "What is a firewall?",
        options: ["A physical barrier", "A network security system", "A type of virus", "A software update"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const currentQuestionData = questions[currentQuestion];
    document.getElementById('question').textContent = currentQuestionData.question;
    optionsContainer.innerHTML = '';

    for (let i = 0; i < currentQuestionData.options.length; i++) {
        const optionButton = document.createElement('button');
        optionButton.textContent = currentQuestionData.options[i];
        optionButton.setAttribute('data-index', i);
        optionButton.addEventListener('click', selectAnswer);
        optionsContainer.appendChild(optionButton);
    }
    submitButton.removeAttribute('disabled');
}

function selectAnswer(event) {
    const selectedIndex = event.target.getAttribute('data-index');
    if (selectedIndex == questions[currentQuestion].answer) {
        score++;
    }
    submitButton.disabled = true; // Disable button after selection
}

submitButton.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResults();
    }
});


function displayResults() {
    resultsDiv.innerHTML = `You scored ${score} out of ${questions.length}!`;
}


displayQuestion();
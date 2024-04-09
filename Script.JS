const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    question: "What is the chemical symbol for water?",
    answers: ["H2O", "CO2", "O2", "CH4"],
    correctAnswer: "H2O"
  }
];

let currentQuestion = 0;
const questionElement = document.querySelector('.question');
const answerElement = document.querySelector('.answers');
const nextButton = document.getElementById('next-btn');

function showQuestion() {
  const question = questions[currentQuestion];
  questionElement.textContent = question.question;
  answerElement.innerHTML = '';
  question.answers.forEach(answer => {
    const label = document.createElement('label');
    label.innerHTML = `<input type="radio" name="answer" value="${answer}"> ${answer}`;
    answerElement.appendChild(label);
  });
}

function checkAnswer() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (!selectedAnswer) return false;
  return selectedAnswer.value === questions[currentQuestion].correctAnswer;
}

function showNextQuestion() {
  if (checkAnswer()) {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      questionElement.textContent = 'Quiz Completed!';
      answerElement.innerHTML = '';
      nextButton.style.display = 'none';
    }
  } else {
    alert('Please select an answer!');
  }
}

nextButton.addEventListener('click', showNextQuestion);
showQuestion();

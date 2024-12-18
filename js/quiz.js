const questions = [
  {
    question: "What is the name of the main character in 'Naruto'?",
    options: [
      "Naruto Uzumaki",
      "Sasuke Uchiha",
      "Sakura Haruno",
      "Kakashi Hatake",
    ],
    correctAnswer: "Naruto Uzumaki",
  },
  {
    question: "Which anime features a battle royale game?",
    options: ["Attack on Titan", "Naruto", "Squid Game", "Sword Art Online"],
    correctAnswer: "Sword Art Online",
  },
  {
    question: "Who is the main antagonist in 'Dragon Ball Z'?",
    options: ["Frieza", "Cell", "Majin Buu", "Vegeta"],
    correctAnswer: "Frieza",
  },
  {
    question:
      "Which anime is known for the phrase 'I am gonna be king of the pirates!'?",
    options: ["Naruto", "One Piece", "Dragon Ball Z", "Bleach"],
    correctAnswer: "One Piece",
  },
  {
    question: "In which anime does the character 'Luffy' appear?",
    options: [
      "One Piece",
      "Attack on Titan",
      "Fullmetal Alchemist",
      "Death Note",
    ],
    correctAnswer: "One Piece",
  },
  {
    question: "Who is the creator of 'Attack on Titan'?",
    options: [
      "Hiro Mashima",
      "Yoshihiro Togashi",
      "Hajime Isayama",
      "Eiichiro Oda",
    ],
    correctAnswer: "Hajime Isayama",
  },
  {
    question:
      "What is the name of the demon-slaying anime with the character Tanjiro?",
    options: [
      "Demon Slayer",
      "Bleach",
      "Fullmetal Alchemist",
      "My Hero Academia",
    ],
    correctAnswer: "Demon Slayer",
  },
  {
    question:
      "What is the primary goal of the character Edward Elric in 'Fullmetal Alchemist'?",
    options: [
      "To find the Dragon Balls",
      "To restore his brother's body",
      "To become a great alchemist",
      "To protect the country",
    ],
    correctAnswer: "To restore his brother's body",
  },
  {
    question:
      "Which anime features a protagonist named Light Yagami who uses a supernatural notebook?",
    options: ["Naruto", "One Piece", "Death Note", "Bleach"],
    correctAnswer: "Death Note",
  },
  {
    question:
      "Which anime is set in a post-apocalyptic world with giant humanoid creatures called Titans?",
    options: ["Attack on Titan", "Sword Art Online", "Dragon Ball Z", "Naruto"],
    correctAnswer: "Attack on Titan",
  },
  {
    question:
      "What is the name of the legendary Pokémon in 'Pokémon: The First Movie'?",
    options: ["Mew", "Mewtwo", "Pikachu", "Charizard"],
    correctAnswer: "Mewtwo",
  },
  {
    question:
      "Which anime features a young boy with a straw hat and a dream to find the One Piece?",
    options: ["Dragon Ball Z", "One Piece", "Naruto", "Bleach"],
    correctAnswer: "One Piece",
  },
  {
    question:
      "What is the ability called in 'My Hero Academia' that gives characters unique powers?",
    options: ["Quirks", "Stands", "Devil Fruits", "Nenjutsu"],
    correctAnswer: "Quirks",
  },
  {
    question: "In 'Bleach', what is the name of Ichigo Kurosaki's sword?",
    options: ["Tensa Zangetsu", "Excalibur", "Kusanagi", "Zabuza Blade"],
    correctAnswer: "Tensa Zangetsu",
  },
  {
    question:
      "Which anime follows the adventures of Gon Freecss as he becomes a hunter?",
    options: ["Hunter x Hunter", "Yu Yu Hakusho", "Naruto", "Fairy Tail"],
    correctAnswer: "Hunter x Hunter",
  },
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const questionData = questions[currentQuestion];
  document.getElementById("question").textContent = questionData.question;

  const options = document.getElementById("options");
  options.innerHTML = "";
  questionData.options.forEach((option) => {
    const col = document.createElement("div");
    col.classList.add("inline");

    const button = document.createElement("button");
    button.classList.add("button", "quiz-button", "w-fit", "option");

    const buttonBg = document.createElement("div");
    buttonBg.classList.add("button__bg");

    const span = document.createElement("span");
    span.textContent = option;

    button.appendChild(buttonBg);
    button.appendChild(span);
    button.setAttribute(
      "data-answer",
      option === questionData.correctAnswer ? "correct" : "wrong"
    );

    col.appendChild(button);
    options.appendChild(col);
  });

  document.getElementById("question-number").textContent = `Question ${
    currentQuestion + 1
  } of ${questions.length}`;
  document.getElementById("score").textContent = `Score: ${score}`;
}

function handleAnswer(event) {
  const targetButton = event.target.closest(".option");
  const scoreElement = document.getElementById("score");

  if (!targetButton) return;

  const isCorrect = targetButton.getAttribute("data-answer") === "correct";
  if (isCorrect) {
    score++;
    scoreElement.classList.add("text-success");
  } else {
    scoreElement.classList.add("text-danger");
  }

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
      scoreElement.classList.remove("text-success");
      scoreElement.classList.remove("text-danger");
    } else {
      showResult();
    }
  }, 500);
}

function showResult() {
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("result").style.display = "block";

  const correctAnswers = questions
    .map((q, index) => `${index + 1}. ${q.correctAnswer}`)
    .join("\n");

  alert(
    `Your score: ${score}/${questions.length}\n\nCorrect Answers:\n${correctAnswers}`
  );
}

document.getElementById("options").addEventListener("click", handleAnswer);

loadQuestion();

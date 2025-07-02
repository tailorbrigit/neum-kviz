const questions = [
  {
    question: "Melyik tudományterületen alkotott maradandót Neumann János?",
    options: ["Kémia és biológia", "Történelem és irodalom", "Matematika és számítástechnika", "Geológia és csillagászat"],
    correct: 3
  },
  {
    question: "Melyik elv köthető Neumann János számítógép-architektúrájához?",
    options: ["Mechanikus lyukkártyás számítás", "Tárolt program elve", "Kvantumszámítógépes elv", "Analóg számítógépek dominanciája"],
    correct: 1
  },
  {
    question: "Melyik országban született Neumann János?",
    options: ["Egyesült államok", "Magyarország", "Németország", "Franciaország"],
    correct: 1
  },
  {
    question: "Melyik egyetemen szerzett doktori fokozatot Neumann?",
    options: ["Harvard Egyetem", "Massachusettsi Műszaki Egyetem (MIT)", "Oxfordi Egyetem", "Budapest Tudományegyetem"],
    correct: 3
  },
  {
    question: "Melyik híres projektben vett részt az Egyesült Államokban?",
    options: ["Manhattan-terv", "Apollo-program", "Internet feltalálása", "DNS szerkezetének felfedezése"],
    correct: 0
  },
  {
    question: "Mi volt Neumann János egyik legfontosabb hozzájárulása a játékelmélethez??",
    options: ["A bábuk mozgásának leírása sakkban", "A Monopoly szabályainak tökéletesítése", "A minimax elv megfogalmazása", "A számítógépes játékok első grafikájának megalkotása"],
    correct: 2
  },
  {
    question: "Milyen katonai területen alkalmazták Neumann kutatásait?",
    options: ["Híradástechnika és radarfejlesztés", "Kézifegyverek tervezése", "Katonai repülőgépek aerodinamikája", "Ballisztika és atomfegyver-fejlesztés"],
    correct: 3
  },
  {
    question: "Melyik matematikai területhez kapcsolódott Neumann munkássága?",
    options: ["Operátoralgebra és kvantummechanika", "Kriptográfia és kódelmélet", "Pszichológiai statisztika", "Topológia és geometria"],
    correct: 0
  },
  {
    question: "Mi a neve annak a számítógépnek, amelyet Neumann János épített Princetonban?",
    options: ["ENIAC", "IAS számítógép", "IBM 360", "UNIVAC"],
    correct: 1
  },
  {
    question: "Hol található Neumann János végső nyughelye?",
    options: ["Budapest, Magyarország", "Berlin, Németország", "Princeton, Egyesült Államok", "Párizs, Franciaország"],
    correct: 2
  },
];

let currentQuestion = 0;
let answeredCorrectly = false;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  document.getElementById("feedback").innerText = "";
  document.getElementById("next-button").style.display = "none";
  answeredCorrectly = false;

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => checkAnswer(index);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(selectedIndex) {
  const q = questions[currentQuestion];
  if (answeredCorrectly) return;

  if (selectedIndex === q.correct) {
    document.getElementById("feedback").innerText = "✅ Helyes válasz!";
    document.getElementById("next-button").style.display = "block";
    answeredCorrectly = true;
  } else {
    document.getElementById("feedback").innerText = "❌ Helytelen válasz, próbáld újra!";
  }
}

function loadNextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("question").innerText = "🎉 Gratulálunk! Kész vagy a kvízzel.";
    document.getElementById("answers").innerHTML = "";
    document.getElementById("next-button").style.display = "none";
    document.getElementById("feedback").innerText = "";
  }
}

window.onload = loadQuestion;

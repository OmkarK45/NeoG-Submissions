const readlineSync = require("readline-sync");
const chalk = require("chalk");

const { blue, red, yellow, green, white } = chalk.bold;
const { bgRed, bgGreen, bgBlue, bgYellow, bold } = chalk;
console.log(chalk.bgRed("⚡ Welcome to the Cricket Quiz ! ⚡"));

// Player Intro
const player = readlineSync.question(green("Hey, What's your name ?\n"));

console.log(bgRed.black(` Welcome ${player}, Let\'s play! `));

// Rules of the game
console.log(bgGreen.black(" Rules of this game are simple \n"));
console.log(
  bgBlue.black(
    " 1. You will be asked 10 question based on the game of cricket\n 2. Each question will have 4 options out of which only one is correct. \n 3. You will be rewarded 1 point for each correct response!\n"
  )
);
console.log(bgYellow.black("All The Best !! "));

let score = 0;
const validResponses = ["a", "b", "c", "d"];
const qBank = [
  {
    q: "Which cricketer is popularly known as Haryana Hurricane ?\n",
    a: "Ravi Shastri",
    b: "Mohinder Amarnath",
    c: "Sunil Gavaskar",
    d: "Kapil Dev",
    ans: "d",
  },
  {
    q:
      "Who was the first Indian player to score 5 successive ducks in Test matches ?\n",
    a: "Rohit Sharma",
    b: "MS Dhoni",
    c: "Ajit Agarkar",
    d: "Sachin Tendulkar",
    ans: "c",
  },
  {
    q:
      "Which of these players has represented the Sunrisers Hydrabad in the IPL ?\n",
    a: "Dhawal Kulkarni",
    b: "Dwayne Smitch",
    c: "Albie Morkel",
    d: "Alex Hales",
    ans: "d",
  },
  {
    q:
      "Bollywood actor Emran Hashmi acted in 'Azhar', a biopic on which cricker ?\n",
    a: "Arthur Ali",
    b: "Mohammad Azaharuddin",
    c: "Azhar Mahmood",
    d: "Axar Patel",
    ans: "b",
  },
  {
    q:
      "In Nathan Astle's 222 in the fourth innings of the Christchurch Test in 2002, which team was the opponent ?\n",
    a: "Bangladesh",
    b: "New Zealand",
    c: "England",
    d: "Australia",
    ans: "c",
  },
  {
    q:
      "Who is the only player to have played his sixth consecutive ICC Champions Trophy in 2017 ?\n",
    a: "Shoaib Malik",
    b: "MS Dhoni",
    c: "Shakib Al-Hasan",
    d: "Mohammad Hafeez",
    ans: "a",
  },
  {
    q: "Which country does Nawroz Mangal represent in International Cricket\n",
    a: "India",
    b: "Afganistan",
    c: "Pakistan",
    d: "Bangladesh",
    ans: "b",
  },
  {
    q: "How many IPL trophies have MI won ?\n",
    a: 2,
    b: 5,
    c: 4,
    d: 7,
    ans: "b",
  },
  {
    q: "Who took the first hat-trick for Zimbabwe in an ODI ?\n",
    a: "Heath Streak",
    b: "Eddo Brandes",
    c: "Henry Olonga",
    d: "Prosper Utseya",
    ans: "b",
  },
  {
    q: "In which year was the first ODI played at Sharjah?\n",
    a: 1992,
    b: 1982,
    c: 1984,
    d: 1987,
    ans: "c",
  },
];

const quiz = () => {
  for (let i = 0; i < qBank.length; ) {
    console.log("\n===========================================\n");
    console.log(white(`Q${i + 1} : ${qBank[i].q}`));
    console.log(bold.hex("b6ebf1")(`          a: ${qBank[i].a}`));
    console.log(bold.hex("b6ebf1")(`          b: ${qBank[i].b}`));
    console.log(bold.hex("b6ebf1")(`          c: ${qBank[i].c}`));
    console.log(bold.hex("b6ebf1")(`          d: ${qBank[i].d}`));
    const response = readlineSync.question("Your Response : ");

    if (!validResponses.includes(response)) {
      console.log(bgRed.black("Invalid Option Please try again!"));
    } else {
      if (response.toLocaleLowerCase() == qBank[i].ans.toLocaleLowerCase()) {
        console.log(bgGreen.black(" Correct Answer ! "));
        score++;
      } else {
        console.log(bgRed.black(" Incorrect Answer! "));
        console.log(bgBlue.black("The correct answer is :", qBank[i].ans));
      }
      i++;
    }
  }
  return score;
};

quiz();
console.log("Your score is : ", score);
console.log(
  chalk.green("\nThanks for playing ! Source code on github.com/omkark45")
);

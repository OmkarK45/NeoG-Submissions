const readlineSync = require("readline-sync");
const chalk = require("chalk");

const { blue, red, yellow, green, white } = chalk.bold;
const { bgRed, bgGreen, bgBlue, bgYellow, bold } = chalk;
console.log(chalk.bgRed("⚡ Welcome to the GTA 5 Quiz ! ⚡"));

// Player Intro
const player = readlineSync.question(green("Hey, What's your name ?\n"));

console.log(bgRed.black(` Welcome ${player}, Let\'s play! `));

// Rules of the game
console.log(bgGreen.black(" Rules of this game are simple \n"));
console.log(
  bgBlue.black(
    " 1. You will be asked 10 question based on GTA V\n 2. Each question will have 4 options out of which only one is correct. \n 3. You will be rewarded 1 point for each correct response!\n"
  )
);
console.log(bgYellow.black("All The Best !! "));

let score = 0;
const validResponses = ["a", "b", "c", "d"];
const qBank = [
  {
    q: "When was GTA V released first ?\n",
    a: 2011,
    b: 2012,
    c: 2013,
    d: 2014,
    ans: "c",
  },
  {
    q: "How old is Franklin when GTA 5 takes place ?\n",
    a: 25,
    b: 21,
    c: 19,
    d: 30,
    ans: "a",
  },
  {
    q: "How many kids do Micheal have ?\n",
    a: 2,
    b: 3,
    c: 5,
    d: 10,
    ans: "a",
  },
  {
    q: "Who is the older of all 3 protagonist ?\n",
    a: "Michael",
    b: "Trevor",
    c: "Franklin",
    d: "Can't say",
    ans: "a",
  },
  {
    q: "Who is Franklin's best friend in the hood ?\n",
    a: "Lester",
    b: "Travis",
    c: "Lamar",
    d: "Tennis Coach",
    ans: "a",
  },
  {
    q: "Number of missons in GTA V (Except DLC)\n",
    a: 69,
    b: 58,
    c: 71,
    d: 80,
    ans: "a",
  },
  {
    q: "Who played Franklin Clinton in Grand Theft Auto 5 ?\n",
    a: 'Gerald "Slink" Johnson',
    b: "Shawn Darnell Fonteno",
    c: "Artimus Lamont Bentley",
    d: 'Christopher "Chris" Bellard',
    ans: "b",
  },
  {
    q: "What's the first mission in GTA V ?\n",
    a: "Repossession",
    b: "Father Son",
    c: "Daddy's Little Girl",
    d: "Prologue",
    ans: "d",
  },
  {
    q: "What is the name of Franklin’s dog?\n",
    a: "Oscar",
    b: "Tabby",
    c: "Chop",
    d: "Chris",
    ans: "c",
  },
  {
    q: "On which platform GTA 5 WASN’T released ?\n",
    a: "Sony Playstation 3",
    b: "XBOX 360",
    c: "Sony Playstation 4",
    d: "Sony Playstation 2",
    ans: "d",
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

const readlineSync = require("readline-sync");
const chalk = require("chalk");

// Chalk Colors
const colors = {
  blue: chalk.bold.blue,
  red: chalk.bold.red,
  yellow: chalk.bold.yellow,
  green: chalk.bold.green,
  white: chalk.bold.white,
};
console.log(chalk.bgRed("⚡ Welcome to the GTA 5 Quiz ! ⚡"));

// Player Intro
const player = readlineSync.question(colors.green("Hey, What's your name ?\n"));

console.log(chalk.bgRed.black(` Welcome ${player}, Let\'s play! `));

// Rules of the game
console.log(chalk.bgGreen.black(" Rules of this game are simple \n"));

// Game Driver

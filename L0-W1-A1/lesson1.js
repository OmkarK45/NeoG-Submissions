// EX-1
//console.log('Omkar Kulkarni');


//EX-2

//var readlineSync = require('readline-sync');

//  var username = readlineSync.question('Enter Your Name: ');
//  console.log(username);


// EX-3
//var username = readlineSync.question("What's your Name: ");
// console.log('Welcome ' + username);


// EX-4
var readlineSync = require('readline-sync');
//  var username = readlineSync.question("What's your Name: ");
//  console.log('Welcome ' + username);


//EX-5
//var answer = readlineSync.question('Is you Age greater than 18? ')
// if(answer == 'yes'){
//   console.log('Right');
// }else{
//   console.log('Wrong');
// }


//EX-6
//score = 0;
// var villain = readlineSync.question("Who is the villain in The Dark Knight ?"); 
// if(villain == 'Joker'){
//   score = score + 1;
//   console.log('Correct');
// }else{
//   console.log('Incorrect');
//   score = score -1;
// }
// var answer = readlineSync.question('Who is BATMAN? ')
// if(answer == 'Bruce Wayne'){
//   console.log('Right');
//   score = score + 1;
// }else{
//   console.log('Wrong');
//   score = score -1;
// }
// console.log('Your Score is ' + score);


// EX-7
// function add(numOne,numTwo){
//   console.log('Number One: ' , numOne , ' Number Two: ' , numTwo)
//   var sum = numOne + numTwo;
//   return sum;
// }

// function prod(numberOne, numberTwo){
//   console.log('Number One is ' +numberOne+ ' and Number Two is ' +numberTwo)
//   var prod = numberOne * numberTwo;
//   return prod;
// }

// var result = prod(4,5);
// console.log(result);

// console.log(add(6,7));
// var add = add(15,25);
// console.log(add);



//EX-8
// score = 0;
// function quiz(question,answer){
//   var userAnswer = readlineSync.question(question);
//   if(answer === userAnswer){
//     score= score+3;
//     console.log('You are Correct!');
//   }else{
//     console.log('You are Wrong!');
//     score = score -1; 
//   }
//   // return score;
//   // console.log('Your Score is: ' + score);
// }

// quiz("Am i older than 25? ",'No');
// quiz("What's my favourite sport? ",'Football');
// quiz("Who's my favourite player? ",'Ronaldo');
// console.log('Your Score is: ' + score);

//EX-9
// for(var i = 1; i<6;i++){
//   console.log( i + ' Omkar Kulkarni');
// }

//Homework


// Star Pattern
//var num = readlineSync.question('Enter Number of Stars: ');
// for(i=1;i<=num;i++) {
//   var str="";
//   for(j=1;j<=i;j++) {
//     str+="* ";
//   }
//   console.log(str);
// }
// console.log('Bonus Inverted Star Pattern')
// for(i=1;i<=num;i++) {
//   var str="";
//   for(j=num;j>=i;j--) {
//     str+="* ";
//   }
//   console.log(str);
// }


//EX-10
// var grocceryList = ['Cake','Milk','Pen','Paper','Pencil'];
// console.log(grocceryList[0]);
// console.log(grocceryList[2]);
// console.log(grocceryList[4]);
// console.log(grocceryList.length);
// console.log(grocceryList[grocceryList.length - 1]);

// EX-11
// var grocceryList = ['Cake','Milk','Pen','Paper','Pencil'];
// for(var i = 0;i<grocceryList.length;i++){
//   console.log(grocceryList[i]);
// }

// EX-12
//var superman = {
//   name: "superman",
//   power: "flight",
//   costumeColor: "blue",
//   strength: 10000,
//   stealth: 0,
//   intelligence: 100,
// }


// var batman = {
//   name: "batman",
//   power: "martial arts",
//   costumeColor: "black",
//   strength: 100,
//   stealth: 100,
//   intelligence: 1000,
// }

// console.log('superman strength: '+superman.strength);
// console.log('batman strength: '+batman.strength);
// console.log(superman.stealth < batman.stealth)

// Homework
// var superHeros = [{
//   name: "superman",
//   power: "flight",
//   costumeColor: "blue",
//   strength: 10000,
//   stealth: 0,
//   intelligence: 100,
// },{
//   name: "batman",
//   power: "martial arts",
//   costumeColor: "black",
//   strength: 100,
//   stealth: 100,
//   intelligence: 1000,
// }];

// for(var i = 0; i< superHeros.length; i++){
//   console.log('Super Hero: ', superHeros[i].name,', Super Hero Costume Color: ',superHeros[i].costumeColor);
//   console.log("----------")
// }

// EX - 13
questionOne ={
  question: "Full form of JS ? ",
  answer: "JavaScript"
}

questionTwo ={
  question: "Full form of MS? ",
  answer: "Microsoft"
}


// EX-14
// var readlineSync = require('readline-sync');
// console.log("Welcome to the Quiz");
// var username = readlineSync.question('Enter your Name: ');
// console.log('Welcome,' , username, 'Let\'s Start the Quiz!! ');

// var score = 0;
// function quiz(question,answer){
//   var userAnswer = readlineSync.question(question);

//   if(userAnswer.toLowerCase() === answer.toLowerCase()){
//     console.log('You are Right!!');
//     score = score + 3;
//   }else{
//     console.log('You are Wrong!!');
//     score = score - 1;
//   }

//   if(score < 0){
//     score = 0;
//   }

//   console.log('Your Score is: ', score);
//   console.log('----------------------------');
// }
// quiz(questionOne.question,questionOne.answer);
// quiz(questionTwo.question,questionTwo.answer);

// var questions = [
//   {question: 'Where do Prerana live? ',answer: 'Mumbai'},
//   {question: "What's Prerana's Age? ",answer: '17'},
//   {question: "What's Prerana's Favourite Color? ",answer: 'Black'},
//   {question: "What's Prerana's Favourite Food? ",answer: 'Vada Pav'}
// ];

// for(var i = 0;i<questions.length;i++){
//   quiz(questions[i].question,questions[i].answer);
// }

// console.log('Your Final Score is: ', score);

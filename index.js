var readlineSync = require("readline-sync");
const userName = readlineSync.question("Hola! What's your name \n");

console.log("Thank you " + userName + " for joining the quiz... \n");
console.log(
  "You have to answer atleast 3 questions correct to win. \nFor each right answer you will get 1 point which you can convert later to INR. But I am bankrupt so you can never reedem your points but still you can enjoy the game.. \n"
);

const array = [
  {
    question: "What is my name ?\n",
    answer: "tushar sahu",
  },

  {
    question: "From which course I did my graduation ?\n",
    answer: "bca",
  },

  {
    question: "What is the name of my city ?\n",
    answer: "jaipur",
  },

  {
    question: "How many girlfriends I have ?\n",
    answer: "0",
  },

  {
    question: "What is my profile ?\n",
    answer: "web developer",
  },

  {
    question: "What is my height ?\n",
    answer: "6ft",
  },

  {
    question: "What is my age ?\n",
    answer: "20",
  },

  {
    question: "What is my hobby ?\n",
    answer: "workout",
  },

  {
    question: "What is my salary ?\n",
    answer: "0",
  },

  {
    question: "What is my bodyweight ?\n",
    answer: "71kg",
  },
];

let counter = 0;
function quizResult(quizQuestion, quizAnswer) {
  let userAnswer = readlineSync.question(quizQuestion);
  if (userAnswer.toUpperCase() == quizAnswer.toUpperCase()){ 
    counter++;
    console.log("Whola! You gave right answer\nCurrent Score:" + counter);
    console.log("---------------------------------------------------\n");
  } else {
    console.log("Uh Oh! You gave wrong answer\nCurrent Score:" + counter);
    console.log("---------------------------------------------------\n");
  }
}

for (i = 0; i < array.length; i++) {
  quizResult(array[i].question, array[i].answer);
}
if(counter>3)
{
console.log("Total Score: "+ counter );
console.log("Congratulations you have won the game  :)");
console.log("-----------------------------------------------------")
}
else
{
console.log("Total Score: "+ counter );
console.log("Sorry you have lost the game  :(");
console.log("-----------------------------------------------------")
}

const highScore = [
    {
      name: "Tushar Sahu",
      score: 10,
    },
    {
      name: "Ajay",
      score: 8,
    },
  ];
  
  let brokeHighScore = false;
  
  console.log("\nCurrent High Scores are:");
  for (let j = 0; j < highScore.length; j++) {
    console.log("Name: " + highScore[j].name + "\n" + "Score: " + highScore[j].score+"\n");
  
    if (counter >= highScore[j].score) {
      brokeHighScore = true;
    }
  }
  
  if (brokeHighScore) {
    console.log("Congratulations You broke the high score. Please send the screenshot so we can update it on our scoreboard.");
  } else {
    console.log("Unfortunately you can't beat the high score. Please try again..");
  }
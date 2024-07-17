"use strict";
let score = document.querySelector(".score");
const button = document.querySelector(".check");
const again = document.querySelector(".again");
const guess = document.querySelector(".guess");

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber)

let sc = 20;
let highscore=0;

button.addEventListener("click", () => {

  const displayMessage= (message)=>{
    document.querySelector('.message').textContent=message;
  }

  const displayNumber= (Number)=>{
    document.querySelector('.number').textContent=Number;
  }

  const displayBodycolor= (color)=>{
    document.querySelector("body").style.backgroundColor = color;
  }
  
  const guess = Number(document.querySelector(".guess").value);
  document.querySelector(".guess").focus();

  // when there is no input
  if (!guess) {
    displayMessage("nothing selected");
    // document.querySelector(".message").textContent = "nothing selected";
    displayBodycolor('#222')
    // when player Wins
  } else if (guess === secretNumber) {
    displayBodycolor('#60b347');
    displayNumber(secretNumber);
    displayMessage("Correct answerr");
    if(sc>highscore){
      highscore= sc;
      document.querySelector('.highscore').textContent=highscore;
    }

    // when guess is too high

  } else if (guess!==secretNumber){
    if (sc > 1 ) {
      displayMessage(guess > secretNumber ? "too high.." : "too low..") 
      sc--;
      score.textContent = sc;
      displayBodycolor('#222')
    } else {
      displayMessage("You lost the game");
      score.textContent = 0;
      displayBodycolor('#d11616');
    }
  }
 
});
//------------ again button---------------

// again.addEventListener("click", () => {
//   location.reload();
// });

//------------ again button---------------
again.addEventListener("click", () => {
  sc=20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber)
  document.querySelector('.message').textContent='Start guessing';
  score.textContent=sc;

  document.querySelector('.number').textContent='?';
  guess.value='';
  document.querySelector(".guess").focus();
  document.querySelector("body").style.backgroundColor = " #222";
});


let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget=()=>{
  return Math.floor(Math.random(0,9));
}
console.log(generateTarget());
const compareGuesses =(humanguess,computerguess,targetnumber)=>{
  const computerdifference=Math.abs(targetnumber-computerguess);
  const humandifference=Math.abs(targetnumber-humanguess);
  return humandifference <= computerdifference;

}
const updateScore=winner=>{
  if(winner==='human'){
    humanScore++;
  }
  if(winner==='computer'){
    computerScore++;
  }


}
const advanceRound = () => {
  currentRoundNumber++;
}


let randomNumber=parseInt(Math.random()*100+1);

const submit=document.querySelector('#subt')
const UserInput=document.querySelector('#guessField') 
const guessSlot=document.querySelector('.guesses') 
const reamaining=document.querySelector('.lastResult') 
const loeORhi=document.querySelector('.lowORhi') 
const startOver=document.querySelector('.resultParse') 

//paragraph created foe creating new button
const p =document.createElement('p')


//global scope
let preGuess=[]    
let numGuess=1;
let playGame=true;


if(playGame){
    submit.addEventListener('click',function(e){
      e.preventDefault()
      const guess=parseInt(UserInput.value)
      validGuess(guess)
    });
}

// to check number is valid or not 
function validGuess(guess){
   if(isNaN(guess)){
    alert('Please enter a valid number')
   }
   else if(guess<1){
    alert('Please enter a  more than 1')
   }
   else if(guess>100){
    alert('Please enter a  less than 100')
   }
   else{
    preGuess.push(guess)

    if(numGuess===10){
        cleanUp(guess)
        displayMsg(`Game Over! Random Number was${randomNumber}`)
         endgame()
         newgame()
    } else{
        cleanUp(guess)
        checkGuess(guess)
    }
   }
}

//display message to user
function checkGuess(guess){
    if(guess===randomNumber){
         displayMsg(`congratulations! <h2>You Win</h2> in ${numGuess} guesses.`);
         endgame();
    } else if(guess<randomNumber){
          displayMsg(`number is too Low`);
    }
    else if(guess>randomNumber){
        displayMsg(`number is too High`);
  }
}

 //updataion 
 function cleanUp(guess){
 UserInput.value='';
 guessSlot.innerHTML +=`(${guess})`;
 numGuess++;
reamaining.innerHTML=`${11-numGuess}`;
 }



function displayMsg(message){
  loeORhi.innerHTML=`<h2>${message}</h2>`;
}

//for end game
function endgame(){
playGame=false;
UserInput.value='';
UserInput.setAttribute('disabled', '')
p.classList.add('button')
p.innerHTML= `<h2 id="newGame">New Game</h2>`;
// p.innerHTML=`you want to start new game `;
startOver.appendChild(p);
newgame();
}

//To start new game
function newgame(){

const newButton=document.querySelector('#newGame');
newButton.addEventListener('click',function(e){
  randomNumber=parseInt(Math.random()*100+1);
  preGuess=[];
  numGuess=1;
  guessSlot.innerHTML=''
  reamaining.innerHTML=`${11-numGuess}`;
  UserInput.removeAttribute('disabled');
  startOver.removeChild(p);
  playGame=true;
})
}


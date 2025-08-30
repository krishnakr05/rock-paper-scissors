let humanScore=0;
let computerScore=0;
let gameOver=false;

function getComputerChoice(){
    let num= Math.floor(Math.random()*3);
    if (num==0){
        return "rock"
    }
    else if(num== 1){
        return "paper"
    }
    else if(num== 2){
        return "scissors"
    }
}


function playRound(humanChoice, computerChoice){
        if(humanChoice==computerChoice){
            return "draw"
        }
        else if(
            humanChoice=="rock" && computerChoice=="scissors"||
            humanChoice=="paper" && computerChoice=="rock"||
            humanChoice=="scissors" && computerChoice=="paper"
        ){
            return "human"
        }
        else{
            return "computer"
        }
        
}

const resultsDiv= document.querySelector("#results");
const scoreDiv= document.querySelector("#score");
const finalResultDiv= document.querySelector("#finalResult");

const buttons= document.querySelectorAll("button");
buttons.forEach(button=>{
    button.addEventListener("click", ()=>{
        if(gameOver){
            return;
        }
        const humanChoice= button.id;
        const computerChoice= getComputerChoice();
        const result= playRound(humanChoice, computerChoice);
        if(result=="draw"){
            resultsDiv.textContent = `It's a draw! You both chose ${humanChoice}.`;
        }
        else if(result=="human"){
            resultsDiv.textContent = `You win this round!`;
            humanScore++;
        }
        else{
            resultsDiv.textContent= `You lose this round`;
            computerScore++;
        }
        scoreDiv.textContent=`Your score-> ${humanScore}, Computer's score-> ${computerScore}`
        if(humanScore==5 || computerScore==5){
            gameOver= true;
            if(humanScore==5){
                finalResultDiv.textContent= `You win the game!`;
            }
            else{
                finalResultDiv.textContent= `Computer wins the game!`
            }
        }
    })
})





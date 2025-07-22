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

function getHumanChoice(){
    let userInput= prompt("Enter choice:");
    return userInput;
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

function playGame(){
    let humanScore=0;
    let computerScore=0;

    

    for(let i=0; i<5; i++){
        const humanSelection= getHumanChoice();
        const computerSelection= getComputerChoice();

        console.log("round: "+(i+1))
        console.log("Your choice: ", humanSelection);
        console.log("Computer's choice :", computerSelection);

        result = playRound(humanSelection, computerSelection);
        
        if(result=="draw"){
            console.log("It's a draw")
        }
        else if(result=="human"){
            console.log("You win this round!")
            humanScore++
        }
        else{
            console.log("Computer wins this round!")
            computerScore++
        }

        console.log("Your score: "+humanScore)
        console.log("Computer score: "+computerScore)    
    }

    console.log("FINAL RESULT")
    if(humanScore>computerScore){
        console.log("You win!")
    }
    else if(humanScore<computerScore){
        console.log("You lose")
    }
    else{
        console.log("It's a draw!")
    }
    
}



console.log(playGame())


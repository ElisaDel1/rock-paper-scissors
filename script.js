/*      Get the computer choice

We need to create a function that chooses 1 string randomly between 3 strings and returns it.


Create function getComputerChoice
Create a variable computerChoice
    Create a variable randomNumber that will receive a random number between 0 and 2
    If randomNumber is 0, then computerChoice gets the value "rock"
    Else if randomNumber is 1, then computerChoice gets the value "paper"
    Else if randomNumber is 2, then computerChoice gets the value "scissors"
    The function returns computerChoice

*/


function getComputerChoice () {
    let computerChoice;
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        computerChoice = 'rock';
    } else if (randomNumber === 1) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    };

    return computerChoice;
}




/*      Get the human choice

We want the user to input exactly either "rock", "paper" or "scissors" and store its answer in the variable humanChoice.


Create a function getHumanChoice that will:
Create a variable that will receive the user's choice humanChoice.
    Ask through a prompt the user choice and put the answer in the humanChoice variable.

*/

function getHumanChoice () {
    let humanChoice = prompt('Please choose and write "rock", "paper" or "scissors"');
    return humanChoice;
}



/*      Keep track of scores

Create variables for either the computer and the human to keep track of their score.

*/




/*      Play a single round of the game

We need to create a function that will :
    - take the choices of the computer and the human as arguments
    - make the choices case-insensitive
    - compare the answers and decide who is the winner
    - log who is the winner
    - increment the score of the winner


Pseudocode :

Create a function playRound with the arguments humanChoice and computerChoice. This function will:
    Make the parameter humanChoice case-insensitive

    If computer choice is the same as human choice:
        log "There is no winner"
    else if (computerChoice is rock and humanChoice is paper) or (computer choice is paper and humanChoice is scissors) or (computerChoice is scissors and humanChoice is rock)
            log a string "You win! userChoice beats computerChoice"
            user score increments
    else:
        log a string "You lose! computerChoice beats humanChoice"
        computer score increments



Create a variable humanSelection that stores the result of the getHumanChoice function.

Create a variable computerSelection that stores the result of the getComputerChoice function.

*/

function playRound() {
    let humanChoice = getHumanChoice();
    humanChoice = humanChoice.toLowerCase();
    let computerChoice = getComputerChoice();


    if (computerChoice === humanChoice) {
        console.log('There is no winner.');
    } else if ((computerChoice === 'rock' && humanChoice === 'paper')
    || (computerChoice === 'paper' && humanChoice === 'scissors')
    || (computerChoice === 'scissors' && humanChoice === 'rock')) {
        humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1);
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    } else {
        computerChoice = computerChoice[0].toUpperCase() + computerChoice.slice(1);
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
        computerScore++;
    };
}




/*      Play the entire game



Create a function that will :
    - declare score variables
    - declare playRound function
    - call 5 times the playRound function.
    - keep track of the scores
    - log the winner after the 5 rounds

Pseudocode:

Create a playGame function:
    Create variables for either the computer and the human to keep track of their score.

    Declare playRound function here.

    Call the playRound function 5 times with a loop.

    Compare computerScore and humanScore:
        If computerScore is higher:
            log "Computer wins. Computer score is computerScore, and your score is humanScore"
        Else:
            log "You win!" Computer score is computerScore, and your score is humanScore"
    

*/


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        let humanChoice = getHumanChoice();
        humanChoice = humanChoice.toLowerCase();
        let computerChoice = getComputerChoice();


        if (computerChoice === humanChoice) {
            console.log(`There is no winner. Your choice and the computer choice are the same (${humanChoice}).`);
        } else if ((computerChoice === 'rock' && humanChoice === 'paper')
        || (computerChoice === 'paper' && humanChoice === 'scissors')
        || (computerChoice === 'scissors' && humanChoice === 'rock')) {
            humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1);
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
            humanScore++;
        } else {
            computerChoice = computerChoice[0].toUpperCase() + computerChoice.slice(1);
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
            computerScore++;
        };
    }

    for (let i = 0; i < 5; i++) {
        playRound();
    }

    if (computerScore > humanScore) {
        
    }

}


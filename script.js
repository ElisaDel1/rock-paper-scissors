/*      Get the computer choice

We need to create a function that chooses 1 string randomly between 3 strings and returns it.

Create a variable computerChoice

Create function getComputerChoice
    Create a variable randomNumber that will receive a random number between 0 and 2
    If randomNumber is 0, then computerChoice gets the value "rock"
    Else if randomNumber is 1, then computerChoice gets the value "paper"
    Else if randomNumber is 2, then computerChoice gets the value "scissors"
    The function returns computerChoice

*/

let computerChoice

function getComputerChoice () {
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

console.log(getComputerChoice());



/*      Get the human choice

We want the user to input exactly either "rock", "paper" or "scissors" and store its answer in the variable humanChoice.

Create a variable that will receive the user's choice humanChoice.

Create a function getHumanChoice that will:
    Ask through a prompt the user choice and put the answer in the humanChoice variable.

*/

let humanChoice;

function getHumanChoice () {
    humanChoice = prompt('Please choose and write "rock", "paper" or "scissors"');
    return humanChoice;
}

console.log(getHumanChoice());
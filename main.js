// START
function playRound(playerSelection, computerSelection, score) {
    if (((playerSelection == 'Rock') && (computerSelection == 'Scissors'))  ||
	   ((playerSelection == 'Paper') && (computerSelection == 'Rock'))      ||
	   ((playerSelection == 'Scissors') && (computerSelection == 'Paper'))) {
		console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        score[0]++;
    } else if (playerSelection == computerSelection){
        console.log("Tie!");
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        score[1]++;
    }
    return score;
}
function playerPlay() {
    while (true) {
        let selection = prompt("Enter Rock, Paper or Scissor");
        if (selection != null) {
            selection = selection.toLowerCase();
        }
        switch (selection) {
            case 'rock':
                return "Rock";
            break;
            case 'paper':
                return "Paper";
            break;
                case 'scissor':
                return "Scissor";
            break;
            default:
                alert(`"${selection}" is not a valid choice, pleace re-enter`);
        }
        setTimeout(function(){}, 500);
    }
}
function computerPlay() {
    let n = Math.random();
    if (n<=(1/3)) {
        return 'Rock';        
    } else if (n<=(2/3)) {
        return 'Paper';
    } else {
        return 'Scissors'
    }
}
function game() {
    let score = [0,0];
    for (let i=0; i<5;i++) {
        score = playRound(playerPlay(), computerPlay(), score);
    }

    let result;

    if (score[0] > score[1]) {
        result = 'win';
    } else if (score[0] < score[1]) {
        result = 'lose';
    } else {
        result = 'tie';
    }

    console.log(`The final score is ${score[0]} to ${score[1]}. You ${result}`)

}

// END
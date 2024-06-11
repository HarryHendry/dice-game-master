let playerOneScore = 0;
let playerTwoScore = 0;

function rollDice() {
    const randomNumber1 = Math.floor(Math.random() * 6 + 1);
    let dice1 = '/images/dice-' + randomNumber1 + '.png';
    let image1 = document.getElementById('dice1');
    image1.setAttribute('src', dice1);
    console.log(image1);

    const randomNumber2 = Math.floor(Math.random() * 6 + 1);
    let dice2 = '/images/dice-' + randomNumber2 + '.png';
    let image2 = document.getElementById('dice2');
    image2.setAttribute('src', dice2);
    console.log(image2);

    if (randomNumber1 > randomNumber2) {
        document.getElementById('dice-winner').textContent = 'Player One wins!';
        playerOneScore++;
    } else if (randomNumber2 > randomNumber1) {
        document.getElementById('dice-winner').textContent = 'Player Two wins!';
        playerTwoScore++;
    } else {
        document.getElementById('dice-winner').textContent = 'It\'s a draw!';
    }

    // Update the score display
    document.getElementById('player1-score').textContent = playerOneScore;
    document.getElementById('player2-score').textContent = playerTwoScore;
}

document.getElementById('roll-dice').addEventListener('click', rollDice);


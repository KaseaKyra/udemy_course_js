var scores;
var roundScore;
var activePlayer;
var isGamePlay;
var lastDice;

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    isGamePlay = true;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

init();
// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// var x = document.querySelector('#score-0').textContent;

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (isGamePlay) {
        // 1. random() number
        let dice1 = 0;
        let dice2 = 0;
        while (dice1 === 0 || dice2 === 0) {
            dice1 = Math.floor(Math.random() * 6);
            dice2 = Math.floor(Math.random() * 6);
        }

        // 2. display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        // 3. update the round if the rolled number was not a 1
        // if (dice === 6 && lastDice === 6) {
        //     // player loses scores
        //     scores[activePlayer] = 0;
        //     document.querySelector('#score-' + activePlayer).textContent = '0';
        //     nextPlayer();
        // } else if (dice !== 1) {
        //     // add score\
        //     roundScore += dice;
        //     document.querySelector('#current-' + activePlayer).textContent = roundScore;
        // } else {
        //     // next player
        //     nextPlayer();
        // }
        // lastDice = dice;
        if (dice1 !== 1 && dice2 !== 1) {
            // add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // next player
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (isGamePlay) {
        // add current score to global score
        scores[activePlayer] += roundScore;

        // update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        var input = document.querySelector('.final-score').value;
        var winningScore;

        //Check
        if (input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        // check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            isGamePlay = false;
        } else {
            nextPlayer();
        }

        // next player
        nextPlayer();
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores;
var roundScore;
var activePlayer;
var isGamePlay;

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    isGamePlay = true;

    document.querySelector('.dice').style.display = 'none';
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
    document.querySelector('.dice').style.display = 'none';
}

init();
// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// var x = document.querySelector('#score-0').textContent;

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (isGamePlay) {
        // 1. random() number
        let dice = 0;
        while (dice === 0) {
            dice = Math.floor(Math.random() * 6);
        }

        // 2. display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // 3. update the round if the rolled number was not a 1
        if (dice !== 1) {
            // add score\
            roundScore += dice;
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

        // check if player won the game
        if (scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice').style.display = 'none';
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

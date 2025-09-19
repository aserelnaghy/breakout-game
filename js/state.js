import { createBricks } from "./objects.js"; 

const topScoreEl = document.getElementById('topScore');
const scoreEl = document.getElementById('score');
//const livesEl = document.getElementById('lives');

const config = {
    pointsPerBrick: 10,
    startingLives: 3,
    localStorageKey: 'breakout-game'
};

const state = {
    score: 0,
    lives: config.startingLives,
    topScore: localStorage.getItem(config.localStorageKey)

}

// Draw remaining lives as hearts
// Preload heart image once
const heartImg = new Image();
heartImg.src = "https://img.icons8.com/fluency/24/pixel-heart.png";

// Draw remaining lives as hearts
export function drawLives(ctx, canvas) {
  const heartSize =36;     // width & height for each heart
  const padding = -1;        // space between hearts

  for (let i = 0; i < state.lives; i++) {
    // draw from right → left
    const x = canvas.width - (i + 1) * (heartSize + padding) - 50;
    const y = 10;
    ctx.drawImage(heartImg, x, y, heartSize, heartSize);
  }
}


function saveTopScore() {
    localStorage.setItem(config.localStorageKey, state.topScore);

}

function loadTopScore() {
    topScoreEl.textContent = localStorage.getItem(config.localStorageKey);
}

function resetState() {
    state.score = 0;
    state.lives = config.startingLives;
    state.topScore = localStorage.getItem(config.localStorageKey) || 0;
    updateState();
    createBricks(document.getElementById("myCanvas").getContext("2d"));
}

function updateState() {
    scoreEl.textContent = state.score;
    //livesEl.textContent = state.lives;
    // topScoreEl.textContent = localStorage.getItem(config.localStorageKey);


    if (state.score > state.topScore) {
        state.topScore = state.score;
        saveTopScore();
        topScoreEl.textContent = state.topScore;
    }
}
function loseLife() {
    state.lives-=1;
    updateState();

    if(state.lives <= 0) {
        alert("Game Over");
        resetState();
    }
}

function winGame() {
    alert("🎉 You Won!");
    resetState();
}
export { config, state, updateState, loadTopScore, saveTopScore, loseLife , winGame}
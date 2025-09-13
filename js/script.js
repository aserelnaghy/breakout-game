import { ball, paddle, bricks } from "./objects.js";
import { gameLoop } from "./motion.js";
import { drawLives } from "./state.js";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Use actual viewport size
canvas.width = window.innerWidth*0.60;
canvas.height = window.innerHeight*0.65;

// adjust the canvas size on window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Reposition paddle at bottom center
  paddle.y = canvas.height - 30;
});


// --- Draw Ball ---
export function drawBall(ctx, ball) {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = ball.color;
  ctx.fill();
  ctx.closePath();
}

// --- Draw Paddle ---
export function drawPaddle(ctx, paddle) {
  ctx.fillStyle = paddle.color;
  ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

// --- Draw Bricks ---
export function drawBricks(ctx, bricks) {
  bricks.forEach((brick) => {
    if (!brick.destroyed) {
      ctx.fillStyle = brick.color;
      ctx.fillRect(brick.x, brick.y, brick.width, brick.height);
    }
  });
}

// --- Draw Canvas (wrapper) ---
export function drawCanvas(ctx, canvas) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBall(ctx, ball);
  drawPaddle(ctx, paddle);
  drawBricks(ctx, bricks);
  // game state lives 
  drawLives(ctx, canvas);
}

// --- Start game loop ---
gameLoop(canvas, ctx, drawCanvas);

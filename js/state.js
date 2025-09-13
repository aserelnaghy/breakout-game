export let lives = 3;

// decement lives function 
export function decrementLives() {
  if (lives > 0) lives--;
}

// Draw remaining lives as hearts
export function drawLives(ctx, canvas) {
  ctx.font = "25px Arial";       
  ctx.fillStyle = "red";      
  ctx.textAlign = "right";
  ctx.textBaseline = "top";

// Draw hearts for lives
  let hearts = "";
  for (let i = 0; i < lives; i++) {
    hearts += "❤️";
  }

  ctx.fillText(hearts, canvas.width - 10, 10);
}



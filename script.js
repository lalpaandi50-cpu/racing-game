const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const game = document.querySelector(".game");

let playerLeft = 175;
let enemyTop = 0;
let enemySpeed = 5;

function moveEnemy() {
  enemyTop += enemySpeed;
  if (enemyTop > 600) {
    enemyTop = 0;
    enemy.style.left = Math.floor(Math.random() * 350) + "px";
  }
  enemy.style.top = enemyTop + "px";

  checkCollision();

  requestAnimationFrame(moveEnemy);
}

function checkCollision() {
  const playerRect = player.getBoundingClientRect();
  const enemyRect = enemy.getBoundingClientRect();

  if (
    playerRect.top < enemyRect.bottom &&
    playerRect.bottom > enemyRect.top &&
    playerRect.left < enemyRect.right &&
    playerRect.right > enemyRect.left
  ) {
    alert("Game Over!");
    location.reload();
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && playerLeft > 0) {
    playerLeft -= 10;
    player.style.left = playerLeft + "px";
  }
  if (e.key === "ArrowRight" && playerLeft < 350) {
    playerLeft += 10;
    player.style.left = playerLeft + "px";
  }
});

moveEnemy();

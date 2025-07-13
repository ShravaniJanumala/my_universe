function startPortal() {
  document.getElementById("welcomeScreen").classList.add("hidden");
  document.getElementById("mainContainer").classList.remove("hidden");
}

function revealMessage() {
  document.getElementById("message").classList.remove("hidden");
}

// Countdown
const targetDate = new Date("2025-12-31T00:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);
  document.getElementById("timer").textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Mouse trail effect
const canvas = document.getElementById("mouseCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles = [];

document.addEventListener("mousemove", e => {
  particles.push({ x: e.x, y: e.y, alpha: 1 });
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,105,180,${p.alpha})`;
    ctx.fill();
    p.alpha -= 0.02;
    if (p.alpha <= 0) particles.splice(i, 1);
  });
  requestAnimationFrame(animate);
}
animate();

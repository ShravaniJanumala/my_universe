// Mouse Trail
const trailCanvas = document.getElementById("trail");
const ctx = trailCanvas.getContext("2d");
let width = window.innerWidth;
let height = window.innerHeight;
trailCanvas.width = width;
trailCanvas.height = height;
let particles = [];

document.addEventListener("mousemove", e => {
  particles.push({x: e.clientX, y: e.clientY, alpha: 1});
});

function drawTrail() {
  ctx.clearRect(0, 0, width, height);
  particles.forEach((p, i) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,105,180,${p.alpha})`;
    ctx.fill();
    p.alpha -= 0.02;
    if (p.alpha <= 0) particles.splice(i, 1);
  });
  requestAnimationFrame(drawTrail);
}
drawTrail();

window.addEventListener('resize', () => {
  trailCanvas.width = window.innerWidth;
  trailCanvas.height = window.innerHeight;
});

// Start Portal
function startPortal() {
  document.getElementById('welcomeScreen').style.display = 'none';
  document.getElementById('mainPortal').classList.remove('hidden');
}

// Typing Love Letter
const message = `In Earth-94, I wake up every morning next to you.\nIn Earth-77, we run a quiet bookstore near a lake.\nIn Earth-13, we code silly projects and stay up all night laughing.\n\nBut in this one, I just call you “Love.”\nIf I were a man, I’d marry you in every timeline.\n\nYou are not just my favorite human—you are my whole universe.\n\nHappy birthday, Sai Sree.\nI’m lucky this version of me still gets to love you.`;

function revealMessage() {
  const letter = document.getElementById("typedLetter");
  const btn = event.target;
  btn.style.display = "none";
  let i = 0;
  const typeInterval = setInterval(() => {
    if (i < message.length) {
      letter.innerHTML += message.charAt(i) === '\n' ? '<br>' : message.charAt(i);
      i++;
    } else {
      clearInterval(typeInterval);
    }
  }, 50);
  document.getElementById("message").classList.remove("hidden");
}

// Countdown
function countdown() {
  const birthday = new Date("July 13, 2025 00:00:00");
  const now = new Date();
  const distance = birthday - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((distance / 1000 / 60) % 60);
  const secs = Math.floor((distance / 1000) % 60);

  document.getElementById("countdown").innerHTML =
    `${days}d ${hours}h ${mins}m ${secs}s`;

  setTimeout(countdown, 1000);
}
countdown();

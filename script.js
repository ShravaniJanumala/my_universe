function startPortal() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("main-content").classList.remove("hidden");
  startCountdown();
}

// Countdown Timer
function startCountdown() {
  const countdown = document.getElementById("countdown");
  const target = new Date("July 13, 2025 00:00:00").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const diff = target - now;

    if (diff < 0) {
      countdown.innerHTML = "🎉 It's Time, Happy Birthday Sai Sree!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s left to Birthday ✨`;
  }, 1000);
}

// Chat Function
function chat() {
  const input = document.getElementById("userInput").value;
  const reply = document.getElementById("botReply");

  if (input.toLowerCase().includes("love")) {
    reply.innerText = "Alt-You: I love you too, in every universe 💖";
  } else {
    reply.innerText = "Alt-You: You always make me smile.";
  }
}

// Decrypt
function revealMessage() {
  document.getElementById("message").classList.remove("hidden");
}

// Mouse Magic Trail
const canvas = document.getElementById("trail-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let trails = [];

document.addEventListener("mousemove", (e) => {
  trails.push({ x: e.clientX, y: e.clientY, alpha: 1 });
});

function drawTrail() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  trails = trails.filter(t => t.alpha > 0.01);
  trails.forEach(t => {
    ctx.beginPath();
    ctx.arc(t.x, t.y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(255, 105, 180, ${t.alpha})`;
    ctx.fill();
    t.alpha -= 0.02;
  });
  requestAnimationFrame(drawTrail);
}
drawTrail();

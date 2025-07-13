// JavaScript: my_universe_script.js

// Typewriter Effect
function revealMessage() {
  const text = `In Earth-94, I wake up every morning next to you.\nIn Earth-77, we run a quiet bookstore near a lake.\nIn Earth-13, we code silly projects and stay up all night laughing.\n\nBut in this one, I just call you \"Love.\"\nIf I were a man, I’d marry you in every timeline.\n\nYou are not just my favorite human—you are my whole universe.\n\nHappy birthday, Sai Sree.\nI’m lucky this version of me still gets to love you.`;

  const typedLetter = document.getElementById("typedLetter");
  document.getElementById("message").classList.remove("hidden");

  let i = 0;
  function type() {
    if (i < text.length) {
      typedLetter.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }
  type();
  confetti();
}

// Chatbot
function chat() {
  const input = document.getElementById("userInput").value.toLowerCase();
  const reply = document.getElementById("botReply");

  if (input.includes("hi") || input.includes("hello")) {
    reply.innerText = "Alt-You: Hey Love 💕 I’ve been waiting for you.";
  } else if (input.includes("love")) {
    reply.innerText = "Alt-You: I love you beyond all timelines.";
  } else {
    reply.innerText = "Alt-You: Always yours, even across universes.";
  }
  document.getElementById("userInput").value = "";
}

// Floating Hearts
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];
for (let i = 0; i < 100; i++) {
  hearts.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3 + 1,
    speed: Math.random() * 1 + 0.5
  });
}

function animateHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let h of hearts) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255, 105, 180, 0.6)";
    ctx.arc(h.x, h.y, h.size, 0, Math.PI * 2);
    ctx.fill();
    h.y -= h.speed;
    if (h.y < 0) h.y = canvas.height;
  }
  requestAnimationFrame(animateHearts);
}
animateHearts();

// Countdown Timer
const countdown = document.getElementById("countdown");
const targetDate = new Date("July 13, 2025 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  countdown.innerHTML = `⏳ Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);

// QR Code Generator (dummy image for example)
const qrFrame = document.getElementById("qrFrame");
qrFrame.innerHTML = '<img src="https://api.qrserver.com/v1/create-qr-code/?data=https://shravanijanumala.github.io/my_universe/&size=150x150" alt="QR Code">';

// Start Portal Button
const portalBtn = document.getElementById("startPortal");
const portalWindow = document.getElementById("portalWindow");
portalBtn.onclick = () => {
  portalWindow.classList.remove("hidden");
  portalBtn.style.display = "none";
};

// Reveal the message
function revealMessage() {
  const message = document.getElementById('message');
  message.classList.remove('hidden');

  // 🎉 Confetti burst
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
}

// Simple chatbot logic
function chat() {
  const input = document.getElementById("userInput").value.toLowerCase();
  const reply = document.getElementById("botReply");

  if (input.includes("hello")) {
    reply.textContent = "Alt-Me: Hello Love ❤️";
  } else if (input.includes("who are you")) {
    reply.textContent = "Alt-Me: I'm your future husband from Universe-94 😎";
  } else if (input.includes("joke")) {
    reply.textContent = "Alt-Me: Why did the coder fall in love? Because she had class. 😉";
  } else if (input.includes("love")) {
    reply.textContent = "Alt-Me: Love? You are the whole damn universe.";
  } else {
    reply.textContent = "Alt-Me: I'm still decoding that. But one thing's certain—you're perfect.";
  }
}

// Floating heart animation
const canvas = document.getElementById('hearts');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];
for (let i = 0; i < 30; i++) {
  hearts.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 6 + 2,
    speed: Math.random() * 1 + 0.5
  });
}

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#ff69b4';
  for (let i = 0; i < hearts.length; i++) {
    ctx.beginPath();
    ctx.arc(hearts[i].x, hearts[i].y, hearts[i].size, 0, Math.PI * 2);
    ctx.fill();
    hearts[i].y -= hearts[i].speed;
    if (hearts[i].y < 0) hearts[i].y = canvas.height;
  }
  requestAnimationFrame(drawHearts);
}

drawHearts();

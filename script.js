// script.js

// Show main site after start portal
function startPortal() {
  document.querySelector('.start-screen').classList.add('hidden');
  setTimeout(() => {
    document.querySelector('.start-screen').style.display = 'none';
  }, 1000);
}

// Decrypt Message Typing
function revealMessage() {
  const text = `In Earth-94, I wake up every morning next to you.
In Earth-77, we run a quiet bookstore near a lake.
In Earth-13, we code silly projects and stay up all night laughing.

But in this one, I just call you “Love.”
If I were a man, I’d marry you in every timeline.

You are not just my favorite human—you are my whole universe.

Happy birthday, Sai Sree.
I’m lucky this version of me still gets to love you.`;

  const output = document.getElementById("typedLetter");
  document.getElementById("message").classList.remove("hidden");
  output.textContent = "";
  let i = 0;

  const typer = setInterval(() => {
    output.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(typer);
  }, 40);
}

// Simple AI Chat
function chat() {
  const input = document.getElementById("userInput").value.toLowerCase();
  const reply = document.getElementById("botReply");

  if (input.includes("love")) {
    reply.textContent = "I love you across all timelines.";
  } else if (input.includes("happy")) {
    reply.textContent = "Happiness is seeing you smile, Sai Sree.";
  } else {
    reply.textContent = "Alt-You is always listening 💫";
  }
}

// Floating Hearts
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let hearts = [];

function Heart() {
  this.x = Math.random() * canvas.width;
  this.y = canvas.height + Math.random() * 100;
  this.size = Math.random() * 8 + 2;
  this.speedY = Math.random() * 1 + 0.5;
  this.alpha = Math.random();
  this.draw = function () {
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = "#ff69b4";
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.arc(this.x - this.size / 2, this.y - this.size / 2, this.size / 2, 0, Math.PI * 2);
    ctx.arc(this.x + this.size / 2, this.y - this.size / 2, this.size / 2, 0, Math.PI * 2);
    ctx.lineTo(this.x, this.y + this.size);
    ctx.fill();
  };
  this.update = function () {
    this.y -= this.speedY;
    if (this.y < -10) this.y = canvas.height + Math.random() * 100;
  };
}

function handleHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  while (hearts.length < 50) {
    hearts.push(new Heart());
  }
  hearts.forEach((heart) => {
    heart.update();
    heart.draw();
  });
  requestAnimationFrame(handleHearts);
}
handleHearts();

// Optional Mouse Trail
let trail = [];
document.addEventListener("mousemove", (e) => {
  trail.push({ x: e.clientX, y: e.clientY, alpha: 1 });
  if (trail.length > 50) trail.shift();
});
setInterval(() => {
  trail.forEach((dot, i) => {
    dot.alpha -= 0.02;
  });
}, 30);
setInterval(() => {
  trail = trail.filter((dot) => dot.alpha > 0);
}, 60);

setInterval(() => {
  trail.forEach((dot) => {
    ctx.globalAlpha = dot.alpha;
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
    ctx.fill();
  });
}, 30);

// Resize Canvas
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

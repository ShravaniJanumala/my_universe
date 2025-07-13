// ✨ Confetti & Decrypt Reveal
function revealMessage() {
  const letter = `
In Earth-94, I wake up every morning next to you.
In Earth-77, we run a quiet bookstore near a lake.
In Earth-13, we code silly projects and stay up all night laughing.

But in this one, I just call you “Love.”
If I were a man, I’d marry you in every timeline.

You are not just my favorite human—you are my whole universe.

Happy birthday, Sai Sree.
I’m lucky this version of me still gets to love you.`;

  document.getElementById("message").classList.remove("hidden");

  let index = 0;
  const typedLetter = document.getElementById("typedLetter");
  typedLetter.innerHTML = "";
  const interval = setInterval(() => {
    typedLetter.innerHTML += letter[index];
    index++;
    if (index >= letter.length) {
      clearInterval(interval);
    }
  }, 40);

  confetti();
}

// 🎈 Simple Confetti Burst
function confetti() {
  for (let i = 0; i < 3; i++) {
    confettiParticles();
  }
}

function confettiParticles() {
  const duration = 2 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    window.confetti(Object.assign({}, defaults, {
      particleCount,
      origin: {
        x: randomInRange(0.1, 0.9),
        y: Math.random() - 0.2
      }
    }));
  }, 250);
}

// 💬 Chat with Alt-You
function chat() {
  const input = document.getElementById("userInput").value;
  let reply = "💫 Alt-You says: You are loved in every universe!";
  if (input.toLowerCase().includes("love")) reply = "Alt-You: Love you more than stars love the night.";
  else if (input.toLowerCase().includes("happy")) reply = "Alt-You: Every timeline celebrates you!";
  else if (input.toLowerCase().includes("miss")) reply = "Alt-You: Even across dimensions, I feel your presence.";

  document.getElementById("botReply").innerText = reply;
  document.getElementById("userInput").value = "";
}

// 🐭 Mouse Sparkle Trail
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let hearts = [];

function Heart() {
  this.x = mouse.x;
  this.y = mouse.y;
  this.size = Math.random() * 6 + 2;
  this.speedY = Math.random() * 1 + 0.5;
  this.opacity = 1;
  this.color = `hsl(${Math.random() * 360}, 100%, 75%)`;
}

Heart.prototype.update = function () {
  this.y -= this.speedY;
  this.opacity -= 0.02;
};

Heart.prototype.draw = function () {
  ctx.globalAlpha = this.opacity;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.fillStyle = this.color;
  ctx.fill();
  ctx.globalAlpha = 1;
};

let mouse = { x: undefined, y: undefined };
window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  for (let i = 0; i < 2; i++) {
    hearts.push(new Heart());
  }
});

function animate() {
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < hearts.length; i++) {
    hearts[i].update();
    hearts[i].draw();
    if (hearts[i].opacity <= 0) {
      hearts.splice(i, 1);
      i--;
    }
  }
  requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

// 🔊 Auto-Play YouTube Hack (for mobile too!)
window.addEventListener("load", () => {
  const iframe = document.querySelector("iframe");
  iframe.src += "&mute=1"; // helps autoplay on mobile
});

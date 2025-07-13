function startPortal() {
  document.getElementById("welcome-screen").classList.add("hidden");
  document.getElementById("main-content").classList.remove("hidden");
  confetti();
}

function revealMessage() {
  const message = `In Earth-94, I wake up every morning next to you.
In Earth-77, we run a quiet bookstore near a lake.
In Earth-13, we code silly projects and stay up all night laughing.

But in this one, I just call you “Love.”
If I were a man, I’d marry you in every timeline.

You are not just my favorite human—you are my whole universe.

Happy birthday, Sai Sree.
I’m lucky this version of me still gets to love you.`;

  let index = 0;
  const element = document.getElementById("typedLetter");
  element.innerHTML = "";
  document.getElementById("message").classList.remove("hidden");

  const interval = setInterval(() => {
    element.innerHTML += message[index++];
    if (index >= message.length) clearInterval(interval);
  }, 30);

  confetti();
}

// Simple chatbot
function chat() {
  const input = document.getElementById("userInput").value.toLowerCase();
  const reply = document.getElementById("botReply");

  if (input.includes("hi")) {
    reply.textContent = "Hi love! I'm always with you 💕";
  } else if (input.includes("miss")) {
    reply.textContent = "I miss you more than stars miss the moon 🌙";
  } else {
    reply.textContent = "I'm listening, always 💫";
  }
}

// Floating hearts
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];
for (let i = 0; i < 100; i++) {
  hearts.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 5 + 2,
    speed: Math.random() * 1 + 0.5
  });
}

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach(heart => {
    ctx.beginPath();
    ctx.arc(heart.x, heart.y, heart.size, 0, Math.PI * 2);
    ctx.fillStyle = "#ff69b4";
    ctx.fill();

    heart.y -= heart.speed;
    if (heart.y < 0) {
      heart.y = canvas.height;
      heart.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawHearts);
}

drawHearts();

// Mouse trail
document.addEventListener("mousemove", (e) => {
  const trail = document.createElement("div");
  trail.classList.add("trail-dot");
  trail.style.left = e.pageX + "px";
  trail.style.top = e.pageY + "px";
  document.body.appendChild(trail);
  setTimeout(() => trail.remove(), 100);
});

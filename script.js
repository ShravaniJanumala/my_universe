// Reveal the message
function revealMessage() {
  const message = document.getElementById('message');
  message.classList.remove('hidden');
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });

  const letter = `
    In Earth-94, I wake up every morning next to you.
    In Earth-77, we run a quiet bookstore near a lake.
    In Earth-13, we code silly projects and stay up all night laughing.

    But in this one, I just call you “Love.”
    If I were a man, I’d marry you in every timeline.

    You are not just my favorite human—you are my whole universe.

    Happy birthday, Sai Sree.
    I’m lucky this version of me still gets to love you.`;

  typeWriter(letter.trim(), 0);
}

function typeWriter(text, i) {
  if (i < text.length) {
    document.getElementById('typedLetter').innerHTML += text.charAt(i);
    setTimeout(() => typeWriter(text, i + 1), 30); // faster typing
  }
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




document.addEventListener('mousemove', function(e) {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = `${e.pageX}px`;
  sparkle.style.top = `${e.pageY}px`;
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 1000);
});
// Mouse glow trail
document.addEventListener('mousemove', (e) => {
  const star = document.createElement('div');
  star.className = 'mouse-star';
  star.style.left = `${e.pageX}px`;
  star.style.top = `${e.pageY}px`;
  document.body.appendChild(star);
  setTimeout(() => star.remove(), 500);
});



// Show portal first, then reveal site
window.onload = () => {
  setTimeout(() => {
    document.querySelector('.container').classList.remove('hidden');
  }, 3000);
};

// Reveal message + typing effect
function revealMessage() {
  const message = document.getElementById('message');
  const letter = `In Earth-94, I wake up every morning next to you.\n
In Earth-77, we run a quiet bookstore near a lake.\n
In Earth-13, we code silly projects and stay up all night laughing.\n\n
But in this one, I just call you “Love.”\n
If I were a man, I’d marry you in every timeline.\n\n
You are not just my favorite human—you are my whole universe.\n\n
Happy birthday, Sai Sree.\n
I’m lucky this version of me still gets to love you.`;
  
  message.classList.remove('hidden');

  let i = 0;
  const speed = 40;
  const typed = document.getElementById('typedLetter');
  function typeWriter() {
    if (i < letter.length) {
      typed.innerHTML += letter.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();

  confetti({ particleCount: 200, spread: 70, origin: { y: 0.6 } });
}

// Chatbot
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
    reply.textContent = "Alt-Me: I'm still decoding that. But you're perfect.";
  }
}

// Floating hearts
const canvas = document.getElementById('hearts');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let hearts = [];
for (let i = 0; i < 30; i++) {
  hearts.push({ x: Math.random()*canvas.width, y: Math.random()*canvas.height, size: Math.random()*6+2, speed: Math.random()+0.5 });
}
function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#ff69b4';
  for (let h of hearts) {
    ctx.beginPath();
    ctx.arc(h.x, h.y, h.size, 0, Math.PI * 2);
    ctx.fill();
    h.y -= h.speed;
    if (h.y < 0) h.y = canvas.height;
  }
  requestAnimationFrame(drawHearts);
}
drawHearts();

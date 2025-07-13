// script.js

// Decrypt Message with Typewriter Effect
function revealMessage() {
  const letter = `In Earth-94, I wake up every morning next to you.\nIn Earth-77, we run a quiet bookstore near a lake.\nIn Earth-13, we code silly projects and stay up all night laughing.\n\nBut in this one, I just call you “Love.”\nIf I were a man, I’d marry you in every timeline.\n\nYou are not just my favorite human—you are my whole universe.\n\nHappy birthday, Sai Sree.\nI’m lucky this version of me still gets to love you.`;

  let i = 0;
  const speed = 40;
  const target = document.getElementById("typedLetter");
  target.innerHTML = "";
  document.getElementById("message").classList.remove("hidden");

  function typeWriter() {
    if (i < letter.length) {
      target.innerHTML += letter.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
}

// Chatbot Reply
function chat() {
  const userInput = document.getElementById("userInput").value;
  const botReply = document.getElementById("botReply");
  if (userInput.toLowerCase().includes("love")) {
    botReply.innerText = "Alt-You: You always were my favorite across the multiverse ❤️";
  } else {
    botReply.innerText = "Alt-You: Message received, starshine.";
  }
}

// Countdown to a date (optional)
const countdown = () => {
  const targetDate = new Date("July 13, 2025 00:00:00").getTime();
  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(interval);
      document.getElementById("countdown").innerText = "🎉 It's your day!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
};

// Mouse Trail Effect
let mouseTrail = [];
document.addEventListener("mousemove", (e) => {
  const dot = document.createElement("div");
  dot.className = "trail-dot";
  dot.style.left = `${e.pageX}px`;
  dot.style.top = `${e.pageY}px`;
  document.body.appendChild(dot);
  mouseTrail.push(dot);

  if (mouseTrail.length > 20) {
    const oldDot = mouseTrail.shift();
    document.body.removeChild(oldDot);
  }
});

// On Load
window.onload = () => {
  countdown();
};

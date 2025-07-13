function startPortal() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('mainContent').classList.remove('hidden');
}

function revealMessage() {
  const text = `In Earth-94, I wake up every morning next to you.\n
  In Earth-77, we run a quiet bookstore near a lake.\n
  In Earth-13, we code silly projects and stay up all night laughing.\n\n
  But in this one, I just call you “Love.”\n
  If I were a man, I’d marry you in every timeline.\n\n
  You are not just my favorite human—you are my whole universe.\n\n
  Happy birthday, Sai Sree.\n
  I’m lucky this version of me still gets to love you.`;

  let i = 0;
  const speed = 30;
  const output = document.getElementById("typedLetter");
  const reveal = document.getElementById("message");
  reveal.classList.remove("hidden");

  function typeWriter() {
    if (i < text.length) {
      output.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
}

function chat() {
  const userText = document.getElementById("userInput").value;
  const reply = document.getElementById("botReply");
  reply.innerText = "Alt-You says: I heard you. 😌";
}

const countDownDate = new Date("July 14, 2025 00:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "🎉 It's your birthday!";
    return;
  }
  const d = Math.floor(distance / (1000 * 60 * 60 * 24));
  const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("countdown").innerHTML =
    `⏳ ${d}d ${h}h ${m}m ${s}s`;
}, 1000);

// Mouse trail
document.addEventListener("mousemove", function(e) {
  const dot = document.createElement("div");
  dot.className = "trail";
  dot.style.left = `${e.pageX}px`;
  dot.style.top = `${e.pageY}px`;
  document.body.appendChild(dot);
  setTimeout(() => dot.remove(), 1000);
});

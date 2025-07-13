function startPortal() {
  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('main-portal').style.display = 'block';
}

function revealMessage() {
  const text = `In Earth-94, I wake up every morning next to you.\nIn Earth-77, we run a quiet bookstore near a lake.\nIn Earth-13, we code silly projects and stay up all night laughing.\n\nBut in this one, I just call you “Love.”\nIf I were a man, I’d marry you in every timeline.\n\nYou are not just my favorite human—you are my whole universe.\n\nHappy birthday, Sai Sree.\nI’m lucky this version of me still gets to love you.`;

  const typedLetter = document.getElementById('typedLetter');
  document.getElementById('message').style.display = 'block';
  typedLetter.textContent = '';

  let index = 0;
  const interval = setInterval(() => {
    typedLetter.textContent += text[index];
    index++;
    if (index >= text.length) clearInterval(interval);
  }, 50);

  confetti();
}

// 🎉 Confetti
function confetti() {
  confettiLib({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });
}

// 🎂 Countdown Timer
const countdownTarget = new Date("July 13, 2025 00:00:00").getTime();
const countdownElement = document.getElementById('countdown');

setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownTarget - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${days}d ${hrs}h ${mins}m ${secs}s`;
}, 1000);

// 💫 Mouse Trail (optional)
document.addEventListener('mousemove', function(e) {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = e.pageX + 'px';
  sparkle.style.top = e.pageY + 'px';
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 500);
});

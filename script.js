function revealMessage() {
  const message = document.getElementById('message');
  message.classList.remove('hidden');
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

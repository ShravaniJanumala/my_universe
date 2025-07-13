/* Base Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body Styling */
body {
  background: linear-gradient(to bottom right, #0f2027, #203a43, #2c5364);
  color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow-x: hidden;
  position: relative;
}

/* Start Screen */
.start-screen {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 1s ease-in-out;
}
.start-screen h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}
.start-screen button {
  padding: 12px 24px;
  font-size: 1.2rem;
  background-color: #ff69b4;
  border: none;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
}
.start-screen.hidden {
  opacity: 0;
  pointer-events: none;
}

/* Container */
.container {
  padding: 40px 20px;
  text-align: center;
  max-width: 900px;
  margin: auto;
}

/* Heading Glitch & Typewriter */
.glitch {
  font-size: 2rem;
  color: #ff69b4;
  animation: glitch 2s infinite;
}
@keyframes glitch {
  0% { text-shadow: 2px 2px #00ffea, -2px -2px #ff00aa; }
  50% { text-shadow: -2px 2px #ff00aa, 2px -2px #00ffea; }
  100% { text-shadow: 2px 2px #00ffea, -2px -2px #ff00aa; }
}
.typewriter {
  overflow: hidden;
  border-right: 2px solid #fff;
  white-space: nowrap;
  animation: typing 4s steps(40, end), blink 0.8s infinite;
}
@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}
@keyframes blink {
  50% { border-color: transparent; }
}

/* Decrypt Message */
#message {
  margin-top: 30px;
  font-size: 1.2rem;
  line-height: 1.6;
}
.hidden {
  display: none;
}

/* Buttons */
button {
  margin-top: 15px;
  padding: 10px 18px;
  font-size: 1rem;
  background-color: #1f8ef1;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
button:hover {
  background-color: #0d6efd;
}

/* Gallery */
.her-photo {
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin: 10px;
  border-radius: 12px;
  border: 2px solid #fff;
  transition: transform 0.3s ease;
}
.her-photo:hover {
  transform: scale(1.1);
}

/* Cube */
.cube-wrapper {
  perspective: 1000px;
  margin-top: 40px;
}
.cube {
  width: 150px;
  height: 150px;
  position: relative;
  transform-style: preserve-3d;
  animation: rotate 10s infinite linear;
  margin: auto;
}
.face {
  position: absolute;
  width: 150px;
  height: 150px;
  border: 2px solid #fff;
  border-radius: 10px;
  object-fit: cover;
}
.front  { transform: rotateY(0deg) translateZ(75px); }
.back   { transform: rotateY(180deg) translateZ(75px); }
.right  { transform: rotateY(90deg) translateZ(75px); }
.left   { transform: rotateY(-90deg) translateZ(75px); }
.top    { transform: rotateX(90deg) translateZ(75px); }
.bottom { transform: rotateX(-90deg) translateZ(75px); }
@keyframes rotate {
  0% { transform: rotateX(0) rotateY(0); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}

/* Chat Input */
input#userInput {
  padding: 10px;
  width: 60%;
  border-radius: 6px;
  border: none;
  margin-top: 20px;
}

/* Music Note (YouTube Player hidden) */
iframe {
  display: none;
}

/* Floating Hearts Canvas */
#hearts {
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 1;
}

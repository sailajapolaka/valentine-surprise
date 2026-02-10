const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

const batterySection = document.getElementById("batterySection");
const batteryLevel = document.getElementById("batteryLevel");
const finalMessage = document.getElementById("finalMessage");
const question = document.getElementById("question");

// NO button runs away
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 150 - 75;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// YES click flow
yesBtn.addEventListener("click", () => {
  // Hide buttons
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  question.innerText = "Yayyy 🥰";

  // Teddy hug
  left.style.transform = "translateX(80px)";
  right.style.transform = "translateX(-80px)";

  // Show battery
  setTimeout(() => {
    batterySection.classList.remove("hidden");
    fillBattery();
  }, 1500);
});

function fillBattery() {
  let level = 0;
  const interval = setInterval(() => {
    level += 10;
    batteryLevel.style.width = level + "%";

    if (level >= 100) {
      clearInterval(interval);
      showFinal();
    }
  }, 300);
}

function showFinal() {
  setTimeout(() => {
    batterySection.classList.add("hidden");
    finalMessage.classList.remove("hidden");
  }, 500);
}



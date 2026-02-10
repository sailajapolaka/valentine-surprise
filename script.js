// PAGE 1 BUTTONS
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  noBtn.style.top = Math.random() * 80 + "%";
  noBtn.style.left = Math.random() * 80 + "%";
});

yesBtn.addEventListener("click", () => {
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");
  startBattery();
});

// BATTERY LOGIC
function startBattery() {
  let level = 0;
  const battery = document.getElementById("battery-level");

  const interval = setInterval(() => {
    level += 5;
    battery.style.width = level + "%";

    if (level >= 100) {
      clearInterval(interval);
      document.getElementById("page2").classList.add("hidden");
      document.getElementById("page3").classList.remove("hidden");
    }
  }, 150);
}

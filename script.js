const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const batteryLevel = document.getElementById("battery-level");

/* SAFETY HIDE */
page2.classList.add("hidden");
page3.classList.add("hidden");

/* NO BUTTON RUNS */
noBtn.addEventListener("mouseover", () => {
  noBtn.style.left = Math.random() * 70 + "%";
  noBtn.style.top = Math.random() * 70 + "%";
});

/* YES CLICK */
yesBtn.addEventListener("click", () => {
  page1.classList.add("hidden");
  page2.classList.remove("hidden");

  let level = 0;
  const interval = setInterval(() => {
    level += 5;
    batteryLevel.style.width = level + "%";

    if (level >= 100) {
      clearInterval(interval);
      page2.classList.add("hidden");
      page3.classList.remove("hidden");
    }
  }, 150);
});

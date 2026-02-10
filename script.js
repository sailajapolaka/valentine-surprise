const btn = document.getElementById("hugBtn");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

btn.addEventListener("click", () => {
  left.style.transform = "translateX(80px)";
  right.style.transform = "translateX(-80px)";
});

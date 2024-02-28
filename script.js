// 1. click on cat makes op.png show up, then disappear after click
// 2. on click, pop sound plays
// 3. pop count increases every click
const popSound = new Audio("./pop2.mp3");
const fullWidth = window.innerWidth;
const fullHeight = window.innerHeight;
const popTextColor = ["#F6A5F2", "#A8DAFF", "#FFCFB5", "#CCC8FF"];
const popTextWeight = ["200", "400", "600", "800"];

const popCat1 = document.getElementById("pop1");
const popCat2 = document.getElementById("pop2");
const counterContainer = document.querySelector(".counter-container");
let popCounter = document.getElementById("popcount");
let count = 0;

function popCatClick() {
  console.log("Meow");
  // show cat
  popCat2.style.display = "block";
  setTimeout(function () {
    popCat2.style.display = "none";
  }, 100);
  // counter
  count++;
  popCounter.innerText = count;
  // sound
  popSound.currentTime = 0;
  popSound.play();
  // animate counter box
  counterContainer.classList.remove("gelatine");
  setTimeout(() => {
    counterContainer.classList.add("gelatine");
  }, 200);
  // background pops
  const popText = document.createElement("span");
  popText.textContent = "pop";
  popText.classList.add("poptext");
  popText.style.color =
    popTextColor[Math.floor(Math.random() * popTextColor.length)];
  popText.style.fontWeight =
    popTextWeight[Math.floor(Math.random() * popTextWeight.length)];
  popText.style.position = "absolute";
  popText.style.left = Math.round(Math.random() * fullWidth) + "px";
  popText.style.top = Math.round(Math.random() * fullHeight) + "px";
  popText.style.fontSize = Math.round(Math.random() * 100) + "px";
  document.body.appendChild(popText);

  setTimeout(function () {
    popText.classList.add("fadeout");
  }, 500);
}

popCat1.addEventListener("click", popCatClick);

const spinButton = document.getElementById("spinButton");
const hintElement = document.getElementById("hint");
const slots = [
  document.getElementById("slot1"),
  document.getElementById("slot2"),
  document.getElementById("slot3"),
];

const tClasses = ["T1", "T2", "T3", "T4", "T5"];

const hints = [
  'From Winston-Salem North Carolina',
  'Graduated top of her class in college',
  'Known for her aesthetic of bright pinks and greens',
  '“Scratch off like lotto”',
];
let hintIndex = 0;

spinButton.addEventListener("click", () => {
  let matchingTs = false;
  let spinResults = [];

  slots.forEach((slot) => {
    const randomIndex = Math.floor(Math.random() * tClasses.length);
    const tClass = tClasses[randomIndex];
    spinResults.push(tClass);
    slot.firstElementChild.className = "letter " + tClass;
  });

  if (spinResults.every((result) => result === spinResults[0])) {
    matchingTs = true;
  }

  if (matchingTs) {
    hintElement.textContent = "Hint: " + hints[hintIndex];
    hintIndex = (hintIndex + 1) % hints.length;
  } else {
    hintElement.textContent = "";
  }
});

const spinButton = document.getElementById("spinButton");
const hintElement = document.getElementById("hint");
const slots = [
  document.getElementById("slot1"),
  document.getElementById("slot2"),
  document.getElementById("slot3"),
];

const tClasses = ["T1", "T2", "T3", "T4", "T5"];

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
    hintElement.textContent = "Hint: T is known for her unique style and energetic performances.";
  } else {
    hintElement.textContent = "";
  }
});

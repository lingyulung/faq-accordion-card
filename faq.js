const allArrows = document.querySelectorAll(".arrow");
const allQuestions = document.querySelectorAll(".questionTab");

function reset() {
  for (const question of allQuestions) question.classList.remove("qActive");

  for (const inactiveA of allArrows) inactiveA.classList.remove("aActive");
}

for (const arrow of allArrows) {
  arrow.addEventListener("click", function () {
    if (arrow.classList.contains("aActive")) {
      reset();
    } else {
      reset();

      document.getElementById(arrow.dataset.question).classList.add("qActive");

      arrow.classList.add("aActive");
    }
  });
}

document.querySelector(".container").addEventListener("click", function (e) {
  if (
    !e.target.classList.contains("allQuestions") &&
    !e.target.classList.contains("questionTab") &&
    !e.target.classList.contains("questionAndArrow") &&
    !e.target.classList.contains("question") &&
    !e.target.classList.contains("arrow") &&
    !e.target.classList.contains("answer") &&
    !e.target.classList.contains("line")
  ) {
    reset();
  }
});

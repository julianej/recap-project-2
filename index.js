 //phew… not a lot going on here. Please add some code!
// CHECK IF THE SCRIPT IS LINKED
console.log("JS is running");
const bookmarkBtn = document.querySelector('[data-js="bookmark-btn"]')
const answerBtn = document.querySelector('[data-js="answer-btn"]')
const answer = document.querySelector('[data-js="answer"]');

// CHECK IF THE ELEMENTS ARE FOUND
console.log(answerBtn);
console.log(answer);

// FIRST SOLUTION WITH a new CLASS .hidden
// function showAnswers() {
// answer.classList.toggle("hidden");
// }

// SECOND SOLUTION WITH a new CLASS BIM .card__answer--active
function showAnswers() {
  answer.classList.toggle("card__answer--active");
  console.log("card__answer--active");
}

// CLICK EVENT
// führe die Funktion showAnswers aus, wenn BTN is clicked:
answerBtn.addEventListener("click", showAnswers);

function bookmarkQuestion() {
  // Function body
}
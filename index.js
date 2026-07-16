 //phew… not a lot going on here. Please add some code!
// CHECK IF THE SCRIPT IS LINKED
console.log("JS is running");
const bookmarkBtn = document.querySelector('[data-js="bookmark-btn"]')
const answerBtn = document.querySelector('[data-js="answer-btn"]')
const answer = document.querySelector('[data-js="answer"]');
const btnText = document.querySelector("button");

// CHECK IF THE ELEMENTS ARE FOUND
console.log(answerBtn);
console.log(answer);

// FIRST TASK/SOLUTION > WITH a new CLASS .hidden
// // function showAnswers() {
//    answer.classList.toggle("hidden");
// }

// FIRST TASK/SECOND > SOLUTION WITH a new CLASS BIM .card__answer--active
// // function showAnswers() {
//     answer.classList.toggle("card__answer--active");
//     console.log("card__answer--active");

//     // THIRD SOLUTION show 'hide answer'
//     btnText.innerHTML = "hide answer";
//     console.log(btnText.innerHTML);
// }

// THIRD TASK WITH if ..else
function showAnswers() {
  answer.classList.toggle("card__answer--active");
  console.log("card__answer--active");

  if (answer.classList.contains("card__answer--active")) {
    btnText.textContent = "Hide Answer";
    console.log(btnText.textContent);
  } else {
    btnText.textContent = "Show Answer";
     console.log(btnText.textContent);
  }
}

// // CLICK EVENT
// // führe die Funktion showAnswers aus, wenn BTN is clicked:
answerBtn.addEventListener("click", showAnswers);

// 
// function bookmarkQuestion() {
//   // Function body
// }

// SECOND TASK > FUNCTION CHANGE COLOUR 
function changeColour() {
   bookmarkBtn.classList.toggle("bookmark--active");
}

// CLICK EVENT 
  bookmarkBtn.addEventListener("click", changeColour);


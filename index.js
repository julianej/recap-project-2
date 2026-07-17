 //phew… not a lot going on here. Please add some code!
// CHECK IF THE SCRIPT IS LINKED
console.log("JS is running");
const bookmarkBtn = document.querySelector('[data-js="bookmark-btn"]')
const answerBtn = document.querySelector('[data-js="answer-btn"]')
const answer = document.querySelector('[data-js="answer"]');
const btnText = document.querySelector("button");

// 01. CHECK IF THE ELEMENTS ARE FOUND
console.log(answerBtn);
console.log(answer);

// 01 .FIRST TASK/SOLUTION > WITH a new CLASS .hidden
// // function showAnswers() {
//    answer.classList.toggle("hidden");
// }

// 01. FIRST TASK/SECOND > SOLUTION WITH a new CLASS BIM .card__answer--active
// // function showAnswers() {
//     answer.classList.toggle("card__answer--active");
//     console.log("card__answer--active");

//     // THIRD SOLUTION show 'hide answer'
//     btnText.innerHTML = "hide answer";
//     console.log(btnText.innerHTML);
// }

// 03. TASK WITH if ..else
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

// // CLICK EVENT SHOW ANSWER
// // führe die Funktion showAnswers aus, wenn BTN is clicked:
answerBtn.addEventListener("click", showAnswers);

// 02.TASK > FUNCTION CHANGE COLOUR 
// function bookmarkQuestion() 
function changeColour() {
bookmarkBtn.classList.toggle("bookmark--active");
}
// 02.CLICK EVENT CHANGE COLOUR CALLBACK
// CALL CLICK EVENT object.addEventListener("click", myScript);
 bookmarkBtn.addEventListener("click", changeColour);

// STANDARD ADD EVENT LISTENER
//  bookmarkBtn.addEventListener("click",() => {
//     bookmarkBtn.classList.toggle("bookmark--active");
//  })
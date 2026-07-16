// 04.TASK > FORM ELEMENTS
const form = document.querySelector('[data-js="form"]');
const questionInput = document.querySelector('[data-js="question-input"]');
const answerInput = document.querySelector('[data-js="answer-input"]');
const tag = document.querySelector('[data-js="tag-input"]');
const submit = document.querySelector('[data-js="btn-submit"]');

const questionCounter = document.querySelector('[data-js="question-counter"]');
const answerCounter = document.querySelector('[data-js="answer-counter"]');

console.log(questionCounter);
console.log(answerCounter);

// 04.TASK > FORM TEXT COUNTER
questionInput.addEventListener("input", () => {
  questionCounter.textContent = 76 - questionInput.value.length;
});

answerInput.addEventListener("input", () => {
  answerCounter.textContent = 150 - answerInput.value.length;
});

// 04.TASK > CREATE ELEMENTS

// FIRST I DID IT WRONG
// createElement() creates real HTML elements, not CSS class names.
// WRONG const article = document.createElement("article");
// WRONG const ul= document.createElement("card-list");
// WRONG const li = document.createElement("card-list__item");

// THANN I CREATE SEMANTIC HTML ELEMENTS
// const ul = document.createElement("ul");
// const li = document.createElement("li");

// THANN I add classList
// ul.classList.add("card-list");
// li.classList.add("card-list__item");

// THAN I wanna log card, but didnt even created one
// console.log(card);

// THAN I CALL the function
function createCard(question, answer, tag) {
    const article = document.createElement("article");
    console.log(article);
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");

    ul.classList.add("card-list");
    li.classList.add("card-list__item");

    h2.textContent = questionInput;
    p.textContent = answerInput;

// // WRONG
// article.append(ul, li, tag)
    article.append(ul);
    ul.append(li);
    li.append(h2, p);

}

// object.addEventListener("click", myScript);
submit.addEventListener("click", createCard);

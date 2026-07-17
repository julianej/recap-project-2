// 04.TASK > FORM ELEMENTS
const form = document.querySelector('[data-js="form"]');
const questionInput = document.querySelector('[data-js="question-input"]');
const answerInput = document.querySelector('[data-js="answer-input"]');
const tagInput = document.querySelector('[data-js="tag-input"]');
const submit = document.querySelector('[data-js="btn-submit"]');

const cardContainer = document.querySelector('[data-js="card-container"]');
// console.log(cardContainer);

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


//---- CREATE FUNCTION -----//
function createCard() {
  const article = document.createElement("article");
  console.log(article);
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const bookmarkButton = document.createElement("button");
  const answerButton = document.createElement("button");
  const tagList = document.createElement("ul");
  const tagItem = document.createElement("li");

  // ADD CLASS LIST
  ul.classList.add("card-list");
  li.classList.add("card-list__item");

  article.classList.add("card");
  h2.classList.add("card__question");
  p.classList.add("card__answer");
  tagList.classList.add("card__tag-list");
  tagItem.classList.add("card__tag-list-item");
  bookmarkButton.classList.add("card__button-bookmark");
  answerButton.classList.add("card__button-answer");

  // STORE INPUT VALUES or TEXT
  h2.textContent = questionInput.value;
  p.textContent = answerInput.value;
  bookmarkButton.textContent = "🔖";
  answerButton.textContent = "Show Answer";
  tagItem.textContent = tagInput.value;

  bookmarkButton.type = "button";
  answerButton.type = "button";

  bookmarkButton.setAttribute(
    "aria-label",
    "Bookmark this question"
  );

  ul.append(li);
  li.append(article);
  article.append(h2, bookmarkButton, p, answerButton, tagList);
  tagList.append(tagItem);

  cardContainer.append(ul);
}

//---- SUBMIT BUTTON -----//
form.addEventListener("submit", (event) => {
// TypeError: Cannot read properties of null (reading 'addEventListener')
// data-js="form" was not in HTML  
  console.log(form);
  event.preventDefault();

  const formData = new formData(event.target);
  const data = Object.fromEntries (formData);

  createCard();
  form.reset();
  questionCounter.textContent = 76;
  answerCounter.textContent = 150;
});






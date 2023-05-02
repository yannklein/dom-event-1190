console.log("Hi Batch #1190!!!!");

// ////////
// Select DOM elements
// ////////

// with its ID (Ameesha)
const ameesha = document.querySelector("#ameesha");
console.log(ameesha);

// with its tag type (h2)
const h2 = document.querySelector("h2");
console.log(h2);

// with its class (group)
const group = document.querySelector(".group");
console.log(group);

// by nest selection (ul of the group)
// const ul = group.querySelector("ul");
// console.log(ul);

// select multiple elements (all the card)
// cards is a NodeList, looks like an array
const cards = document.querySelectorAll(".card");
console.log(cards);

// ////////
// Modify the DOM
// ////////

// add an HTML element (Juventus de Radiant 🇮🇹)
const ul = group.querySelector("ul");
console.log(ul);
ul.insertAdjacentHTML("beforeend", "<li>Juventus de Radiant 🇮🇹</li>");

// same but more complex (add Stefano!!!)
const teamUl = document.querySelector("#languad ul");
teamUl.insertAdjacentHTML(
  "afterbegin",
  `<li>
    <img id="stefano" src="https://avatars.githubusercontent.com/u/127198253?v=4" alt="">
    <p>Stefano Zerega</p>
  </li>`
);

// change the element style (group background to green)
// Careful! background-color => backgroundColor
// group.style.color = "red";
group.style.backgroundColor = "green";

// add a class to the element (add text-white to group)
// Careful! no DOT for classList
group.classList.add("text-white");

// remove it
group.classList.remove("text-white");

// Read/Write for inputs (change the value in the email input)
const email = document.querySelector("#email");
console.log(email.value);
email.value = "yann@lewagon.org";

// Read/Write the (inner) text and HTML content (QuizMate FC ⚽️ title)
const title = document.querySelector("#quizmate h3");
console.log(title.innerText); // --> QuizMate FC ⚽️
console.log(title.innerHTML); // -->  QuizMate <em>FC</em> ⚽️
// console.log(document.body.innerHTML);
console.log(title.value); // --> undefined because h3 is not an input

title.innerHTML = "Hello <em>#1190</em>";

// ////////
// Add event listeners
// ////////

// // 1. Select elements (elements the user interacts with, elements than are going to change): picture of Ameesha
// const picture = document.querySelector("#ameesha");
// // 2. Listen to an event (a click on Ameesha's picture)
// picture.addEventListener("click", () => {
//   // 3. Change the DOM (add a class .selected to Ameesha's pic)
//   picture.classList.toggle("selected");
// });

const pictures = document.querySelectorAll(".card img");
console.log(pictures);

pictures.forEach((picture) => {

  picture.addEventListener("click", (event) => {
    console.log(event);
    const clickedElement = event.currentTarget; // --> refers to picture
    clickedElement.classList.toggle("selected");
  });
});

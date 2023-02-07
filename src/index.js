console.log("Hi Batch #1105!!!!");

// ////////
// Select DOM elements
// ////////

// with its ID (Tan)
const tan = document.querySelector("#tan");
console.log(tan);

// with its tag type (h2)
const h2 = document.querySelector("h2");
console.log(h2);
// with its class (group)
const group = document.querySelector(".group");
console.log(group);

// by nest selection (ul of the group)
const ul = group.querySelector("ul");
console.log(ul);
// select multiple elements (all the card)
const cards = document.querySelectorAll(".card");
console.log(cards);

// ////////
// Modify the DOM
// ////////

// add an HTML element (Bookcard Club 👟)
const ulList = document.querySelector(".group ul");
console.log(ulList);
ulList.insertAdjacentHTML("beforeend", "<li>Bookcard <em>Club</em> 👟</li>");

// same but more complex (add Taka!!!)
const shiftBetterTeam = document.querySelector("#shift-better ul");
console.log(shiftBetterTeam);
shiftBetterTeam.insertAdjacentHTML(
  "afterbegin",
  `<li>
    <img
      id="taka"
      src="https://avatars.githubusercontent.com/u/117798839?v=4"
      alt=""
    />
    <p>Takaaki Nakagami</p>
  </li>`
);
// change the element style (group background to green)
// Careful! background-color => backgroundColor
// group.style.color = "red";
group.style.backgroundColor = "darkgreen";

// add a class to the element (add text-white to group)
// Careful! no DOT for classList
group.classList.add("text-white");

// remove it
group.classList.remove("text-white");

// setInterval(() => {
//   group.classList.toggle("text-white");
// }, 1000);

// Read/Write for inputs (change the value in the email input)
const email = document.querySelector("#email");
console.log(email.value);
email.value = "yann@lewagon.org";

// Read/Write the (inner) text and HTML content (SubsMan United 👹 title)
const h3 = document.querySelector("#shift-better h3");
console.log(h3);
console.log(h3.innerText);
console.log(h3.innerHTML);

h3.innerHTML = "Hello <em>everyone!</em>";

// console.log(group.innerHTML);
// group.innerHTML = "";


// ////////
// Add event listeners
// ////////

// // 1. Select elements (that we click, that we change:  Taka img)
// const taka = document.querySelector("#taka");
// console.log(taka);
// // 2. Listen to an event (click on Taka img)
// taka.addEventListener("click", (event) => {
//   // 3. Change the DOM (add a class .selected to Taka img)
//   console.log(event);
//   const clickedElmt = event.currentTarget;
//   clickedElmt.classList.toggle("selected");
// });

const allImgs = document.querySelectorAll(".card img");

allImgs.forEach((imgElmt) => {
  // 2. Listen to an event (click on img)
  imgElmt.addEventListener("click", (event) => {
    // 3. Change the DOM (add a class .selected to img)
    console.log(event);
    const clickedElmt = event.currentTarget;
    clickedElmt.classList.toggle("selected");
  });
});

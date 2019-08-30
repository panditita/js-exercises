/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

const backgroundButton = document.querySelector("#bgrChangeBtn");

changeBackground = () => {
  document.body.style.backgroundColor = "turquoise";
};
backgroundButton.addEventListener("click", changeBackground);
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const alertBtn = document.querySelector("#alertBtn");

alertBtn.addEventListener("click", () => {
  alert("Thanks for visiting Bikes for Refugees!");
});

/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
const addTextBtn = document.querySelector("#addTextBtn");

addTextBtn.addEventListener("click", () => {
  const textPlacement = document.querySelector("#learnMore");
  const addPara = document.createElement("p");
  textPlacement.appendChild(addPara);
});

/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
var largerLinksBtn = document.querySelector("#largerLinksBtn");
var getLinks = document.querySelectorAll("a");

eachLink = () =>
  getLinks.forEach(getLink => {
    getLink.style.fontSize = "36px";
  });

largerLinksBtn.addEventListener("click", eachLink);

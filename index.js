// Write your code here!
// Remove the <main> element with id 'main'
document.querySelector("main#main").remove();

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Assign it an id of 'victory'
newHeader.id = "victory";

// Set the inner text with your name
newHeader.textContent = "Your-Name is the champion"; // Replace "Your-Name" with your actual name

// Append newHeader to the body
document.body.appendChild(newHeader);

// Set counter for chances
let chances = 3;

// Generate random number
const min = 1;
const max = 10;
const randNumber = Math.floor(Math.random() * (max - min + 1) + min);

console.log(randNumber);

// Get UI Elements
const p = document.querySelector("p");
const span = document.querySelector("span");
const input = document.querySelector("input");
const btn = document.querySelector(".btn");
const message = document.querySelector(".msg");

// Append min and max value to UI
p.innerHTML = `Choose a number between ${min} and ${max}`;
// Append chances value to UI
span.innerHTML = chances;


// Add Event Listener
btn.addEventListener("mousedown", playGame);


// Play Game
function playGame() {
    // Check if value isn't empty
    if(input.value !== "") {
        // Check if submitted value is valid
        if(input.value == randNumber) {
            // Game won
            gameOver("btn-success", "Congratulations! You won!", "text-success");
            // Disable input
            input.setAttribute("disabled", "true");
        } else {
            losingGame(`${input.value} is wrong! Try again!`, "text-danger");
        }
    } else {
        console.log("Please enter a value");
    }
}


// Game Finished
function gameOver(btnClass, msg, color) {
    // Update button color
    btn.classList.add(btnClass,"again");
    // Update button text
    btn.textContent = "Play Again";
    // Update msg 
    message.textContent = msg;
    // Msg color
    message.className = color; 
    // Get button
    const replay = document.querySelector(".again");
    // Add Event Listener
    replay.addEventListener("mousedown", replayGame);
}


// Losing Game
function losingGame(msg, color) {
    // Update msg
    message.textContent = msg;
    // Update color
    message.className = color;
    // Clear message
    setTimeout(() => message.textContent = "", 1500);
    // Clear value
    input.value = "";
    // Decrement chances
    chances > 0 ? chances-- : chances = 0;
    // Update UI
    span.innerHTML = chances;
    // Check if chances are 0
    if(chances === 0) {
        gameOver("btn-danger", "Sorry! You lost!", "text-danger");
        // Disable input
        input.setAttribute("disabled", "true");
    }
}


// Replay Game
function replayGame(e) {
    if(e.target.classList.contains("again")) {
        // Reload page
        window.location.reload();
    }   
}
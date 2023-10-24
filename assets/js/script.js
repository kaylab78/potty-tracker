// When the user chooses a potty option and submits it, a new card shows up with the current date, the time of submission and the choice. If there is already a card for the day, the submitted choice shows up with the correct time. The cards are sorted by date newest to oldest.

// Variables
const currentTimeEl = document.querySelector("#current-time");
const pottyInputEl = document.querySelector("#potty-input");
const trackBtnEl = document.querySelector("#track-btn");
const pottyOutputEl = document.querySelector("#potty-output");
const copyrightYear = document.querySelector("#copyright-year");

// The copyright year changes based on the current year.
function renderCopyright() {
    const today = new Date();
    const year = today.getFullYear();
    copyrightYear.innerHTML = "<p>&copy; " + year + " Kayla Backus • <a href='https://github.com/kaylab78/potty-tracker' target='_blank'>Potty Tracker GitHub Repository</a></p>";
};

// When the window loads, the copyright information loads in the footer.
window.onload = renderCopyright();

// Current date
function displayCurrentTime() {
    currentTimeEl.textContent = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"});
};

window.onload = displayCurrentTime();

trackBtnEl.addEventListener("click", displayPottyType);

function displayPottyType(event) {
    event.preventDefault();
    let newPottyDiv = document.createElement("div");
    let pottyInput = pottyInputEl.value.trim();

    pottyOutputEl.appendChild(newPottyDiv);
    newPottyDiv.textContent = pottyInput;
    console.log(pottyInput);
};

// When the page is fully loaded, load the previous potty entries


// The user enters the description of the potty type

// The user clicks submit or presses enter

// The new potty entry appears with the date and time
// function displayInput() {
//     pottyOutput.appendChild()
// }


// If there's no card for the day

    // Then create a new card

    // Add the correct date

    // Add the time of submission
    
    // Add the potty choice

// Else add the time of submission and the potty choice to the current card

// If the user clicks the edit button

    // The potty options and times become editable.

    // It's possible to delete an option.

    // A save button appears

// If the user clicks the delete button

    // The whole line is deleted

// If the user clicks the save button

    // The card is no longer editable
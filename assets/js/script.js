// When the user chooses a potty option and submits it, a new card shows up with the current date, the time of submission and the choice. If there is already a card for the day, the submitted choice shows up with the correct time. The cards are sorted by date newest to oldest.

// Variables
const currentDateEl = document.querySelector("#current-date");
const pottyInputEl = document.querySelector("#potty-input");
const trackBtnEl = document.querySelector("#track-btn");
const pottyOutputEl = document.querySelector("#potty-output");
const copyrightYear = document.querySelector("#copyright-year");
const timeEl = new Date().toLocaleString('en-us', {hour:"numeric", minute:"numeric"});
const dateEl = new Date().toLocaleDateString('en-us', {weekday:"long", year:"numeric", month:"long", day:"numeric"});

// When the window loads, the copyright information loads in the footer and current date displays in the header.
$(document).ready(function() {
    renderCopyright();
    displayCurrentDate();
});

// The copyright year changes based on the current year.
function renderCopyright() {
    const today = new Date();
    const year = today.getFullYear();
    copyrightYear.innerHTML = "<p>&copy; " + year + " Kayla Backus • <a href='https://github.com/kaylab78/potty-tracker' target='_blank'>Potty Tracker GitHub Repository</a></p>";
};

// Current date
function displayCurrentDate() {
    currentDateEl.textContent = dateEl;
};

// When the Track Potty button is clicked, the potty type is entered.
trackBtnEl.addEventListener("click", displayPottyType);

function displayPottyType(event) {
    event.preventDefault();
    let newPottyDiv = document.createElement("div");
    let newPottyH3 = document.createElement("h3");
    let newPottyUl = document.createElement("ul");
    let newPottyLi = document.createElement("li");
    let pottyInput = pottyInputEl.value.trim();

    pottyOutputEl.appendChild(newPottyDiv);
    newPottyDiv.appendChild(newPottyH3);
    newPottyH3.innerText = dateEl;
    newPottyDiv.appendChild(newPottyUl);
    newPottyUl.appendChild(newPottyLi);
    newPottyUl.innerHTML = `<li>${timeEl} - ${pottyInput}</li>`
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
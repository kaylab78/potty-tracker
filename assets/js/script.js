// When the user chooses a potty option and submits it, a new card shows up with the current date, the time of submission and the choice. If there is already a card for the day, the submitted choice shows up with the correct time. The cards are sorted by date newest to oldest.

// Variables

const copyrightYear = document.querySelector("#copyright-year");

function renderCopyright() {
    const today = new Date();
    const year = today.getFullYear();
    copyrightYear.innerHTML = "<p>&copy; " + year + " Kayla Backus • <a href='https://github.com/kaylab78/potty-tracker' target='_blank'>Potty Tracker GitHub Repository</a></p>";
};

window.onload = renderCopyright();

// When the page is fully loaded, load the previous potty entries

// The user enters the description of the potty type

// The user clicks submit or presses enter

// The new potty entry appears with the date and time



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
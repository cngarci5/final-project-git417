
"use strict";

// Light and Dark mode
const toggleButton = document.getElementById("l-d-toggle");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleButton.textContent = "☼";
    } else {
         toggleButton.textContent = "☾";
    }
});

// Product Display


// Game


//Romance Randomizer
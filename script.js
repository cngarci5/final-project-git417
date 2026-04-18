
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
const selectors = document.querySelectorAll(".selector");
const platformLogo = document.getElementById("platform-logo");

const platformImages = {
    ea : "images/ea-svgrepo-com.svg",
    playstation: "images/playstation-svgrepo-com.svg",
    xbox: "images/xbox-svgrepo-com.svg",
    steam: "images/steam-svgrepo-com.svg"

};

selectors.forEach(button => {
    button.addEventListener("click", () => {

        selectors.forEach(button => button.classList.remove("active"));

        button.classList.add("active");

        const platform = button.dataset.platform;
        platformLogo.src = platformImages[platform];
});
});

// Game


//Romance Randomizer

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
document.addEventListener("DOMContentLoaded", () => {
const selectors = document.querySelectorAll(".selector");
const platformLogo = document.getElementById("platform-logo");
const platformPrice = document.getElementById("platform-price");
const platformDescription = document.getElementById("platform-description");

const platformImages = {
    ea : "images/ea-svgrepo-com.svg",
    playstation: "images/playstation-svgrepo-com.svg",
    xbox: "images/xbox-svgrepo-com.svg",
    steam: "images/steam-svgrepo-com.svg"

};

const platformInfo = {
ea: {
    price: "$39.99",
    description: "Get access to exclusive in-game content with EA Play."
},
playstation: {
    price: "$39.99",
    description: "Playstation provides exclusive skins and outfits to customize your characters."
},
xbox: {
    price: "$39.99",
    description: "Unlock achievements exclusively on Xbox."
},
steam: {
    price: "$39.99",
    description: "Steam offers mod support for the ultimate customized game experience."
}
};

selectors.forEach(button => {
    button.addEventListener("click", () => {
        console.log("Button clicked: ", button);

        selectors.forEach(button => button.classList.remove("active"));
        button.classList.add("active");

        const platform = button.dataset.platform;
        console.log("Platform selected: ", platform);

        platformLogo.src = platformImages[platform];
        platformPrice.textContent = platformInfo[platform].price;
        platformDescription.textContent = platformInfo[platform].description;
    });
});

    const defaultPlatform = "ea";
    platformPrice.textContent = platformInfo[defaultPlatform].price;
    platformDescription.textContent = platformInfo[defaultPlatform].description;


// Game


const guessForm = document.getElementById("guess-form");
const guessInput = document.getElementById("guess-input");
const guessResult = document.getElementById("guess-result");

guessForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userGuess = parseInt(guessInput.value);
    const randomNumber = Math.floor(Math.random() * 10) +1;

    if (userGuess === randomNumber) {
        guessResult.textContent = `You guessed ${userGuess}, The number was ${randomNumber}, You win!`;
    } else {
        guessResult.textContent = `You guessed ${userGuess}, The number was ${randomNumber}, Try again!`;
    }
    guessInput.value = "";
});



//Romance Randomizer

const rollButton = document.getElementById("romance-roll");
const result = document.getElementById("romance-result");
const romanceOptions = ["Solas", "Cullen", "Blackwall", "Dorian", "IronBull", "Sera", "Cassandra", "Josephine"];

rollButton.addEventListener("click", () => {
    const choice = romanceOptions[Math.floor(Math.random() * romanceOptions.length)];
    result.textContent = `Your romance option is: ${choice}!`;
    
});
});
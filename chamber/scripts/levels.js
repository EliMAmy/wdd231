const url = 'data/membership.json';
const cards = document.querySelector('#cards');

async function getLevel() {
    const response = await fetch(url); // request
    const data = await response.json(); // parse the JSON data
    console.log(data); // temp output test of data response
    displayLevels(data.levels);
}

getLevel();

const displayLevels = (levels) => {
    levels.forEach((level) => {
        // card build code goes here
        let card = document.createElement("section");
        let fullName = document.createElement("h3");
        let button = document.createElement("button");
        button.addEventListener("click", () => {
            displayMoreDetails(level);
        });
        fullName.textContent = level.title;
        button.textContent = "Learn More";
        button.setAttribute("class", "mybutton");
        card.setAttribute("class", "mycard");
        // Append the section(card) with the created elements
        card.appendChild(fullName); //fill in the blank
        card.appendChild(button);
        cards.appendChild(card);
    });
}
function displayMoreDetails(level) {
    const moreInfo = document.querySelector("#more");
    moreInfo.innerHTML = '';
    moreInfo.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${level.title} </h2>
    <p><strong>Benefits:</strong></p>
    <p>${level.benefits}</p>
  `;
    moreInfo.showModal();

    closeModal.addEventListener("click", () => {
        moreInfo.close();
    });
}
window.onload =function timestamp() {
    const timestamp = document.querySelector("#timestamp");
    const now = new Date();
    // Format the date and time (YYYY-MM-DD HH:mm:ss)
    const formattedDateTime = now.getFullYear() + '-'
        + String(now.getMonth() + 1).padStart(2, '0') + '-'
        + String(now.getDate()).padStart(2, '0') + ' '
        + String(now.getHours()).padStart(2, '0') + ':'
        + String(now.getMinutes()).padStart(2, '0') + ':'
        + String(now.getSeconds()).padStart(2, '0');

    // Set the value of the input field
    timestamp.value = formattedDateTime;
}

// Function to validate the form input
function validateInput(input) {
    // Regular expression: allows letters (uppercase and lowercase), hyphens, spaces, and ensures at least 7 characters
    const regex = /^[A-Za-z\s-]{7,}$/;

    if (regex.test(input)) {
        console.log('Valid input');
        return true;
    } else {
        console.log('Invalid input: Must be at least 7 characters long, and only contain letters, hyphens, and spaces.');
        return false;
    }
}

// Example usage with an input field
const form = document.querySelector('form');
const inputField = document.querySelector('input[name="organizationalTitle"]');
const inputs = document.querySelectorAll("input");

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission
    const input = inputField.value.trim();

    if (validateInput(input)) {
        // Proceed with form submission
        inputField.classList.remove("invalid");
        form.submit();
    } else {
        inputField.classList.add("invalid");
        errorMessage.textContent = 'Invalid input: Must be at least 7 characters long and only contain letters, hyphens, and spaces.';
    }
});

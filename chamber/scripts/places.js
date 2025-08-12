
import { places} from "../data/places.mjs";

const cards = document.querySelector('#cards');


const displayPlaces = (places) => {
    places.forEach((place) => {
        // card build code goes here
        let card = document.createElement("div");
        let sub = document.createElement("div");
        let subone = document.createElement("div");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        let address = document.createElement("address");
        let description = document.createElement("p");
        let button = document.createElement("button");
        button.addEventListener("click", () => {
            displayMoreDetails(place);
        });


        fullName.textContent = place.name;
        address.textContent = place.address;
        description.textContent = place.description;
        button.textContent = "Learn More";
        button.setAttribute("class", "mybutton");
        portrait.setAttribute("src", place.image);
        portrait.setAttribute("alt", `${place.image}`);
        portrait.setAttribute("loading", "lazy");
        card.setAttribute("class", "card");
        fullName.setAttribute("class", "title");
        sub.setAttribute("class", "sub");
        subone.setAttribute("class", "subone");


        // Append the section(card) with the created elements
        card.appendChild(fullName);
        sub.appendChild(portrait);
        sub.appendChild(description);
        subone.appendChild(address);
        subone.appendChild(button);
        card.appendChild(sub);
        card.appendChild(subone);
        cards.appendChild(card);
    });
}
displayPlaces(places);

function displayMoreDetails(place) {
    const moreInfo = document.querySelector("#more");
    moreInfo.innerHTML = '';
    moreInfo.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${place.name} </h2>
    <p>${place.other_info}</p>
  `;
    moreInfo.showModal();

    closeModal.addEventListener("click", () => {
        moreInfo.close();
    });
}


const messageEl = document.getElementById("visitMessage");
const lastVisit = localStorage.getItem("lastVisit"); // get stored last visit
const now = Date.now(); // current time in milliseconds
const oneDay = 1000 * 60 * 60 * 24; // ms in a day

if (!lastVisit) {
    // First visit
    messageEl.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const timeDiff = now - parseInt(lastVisit, 10);
    const daysDiff = Math.floor(timeDiff / oneDay);

    if (timeDiff < oneDay) {
        // Less than 1 day since last visit
        messageEl.textContent = "Back so soon! Awesome!";
    } else if (daysDiff === 1) {
        messageEl.textContent = `You last visited ${daysDiff} day ago.`;
    } else {
        messageEl.textContent = `You last visited ${daysDiff} days ago.`;
    }
}

// Store current visit date
localStorage.setItem("lastVisit", now.toString());
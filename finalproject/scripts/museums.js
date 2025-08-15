
const url = "data/museums.json"
const cards = document.querySelector('#cards');


async function getMuseumData() {
    try {
        const response = await fetch(url); // request
        const data = await response.json(); // parse the JSON data
        console.log(data); // 
        displayMuseums(data.museums);
    } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors
    }
}
getMuseumData();


const displayMuseums = (museums) => {
    museums.forEach((museum) => {
        // card build code goes here
        let card = document.createElement("section");
        let division = document.createElement("div")
        let divisioni = document.createElement("div");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        let location = document.createElement("p");
        let description = document.createElement("p");
        let button = document.createElement("button");
        button.addEventListener("click", () => {
            displayMoreDetails(museum);
        });
        fullName.textContent = museum.name;
        description.textContent = museum.description;
        location.textContent = museum.location;
        portrait.setAttribute("src", museum.image);
        portrait.setAttribute("alt", `${museum.image}`);
        portrait.setAttribute("loading", "lazy");
        card.setAttribute("class", "card");
        division.setAttribute("class", "onecard");
        fullName.setAttribute("class", "title");
        location.setAttribute("class", "location");
        button.setAttribute("class", "button");
        button.textContent = "Learn More";
 
        // Append the section(card) with the created elements
        card.appendChild(fullName);
        card.appendChild(location);
        division.appendChild(portrait);
        divisioni.appendChild(description);
        divisioni.appendChild(button);
        card.appendChild(division);
        card.appendChild(divisioni);
        cards.appendChild(card);
    });
}

function displayMoreDetails(museum) {
    const moreInfo = document.querySelector("#more");
    moreInfo.innerHTML = '';
    moreInfo.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${museum.name} </h2>
    <p>Rating: ${museum.rating}</p>
    <p>Business Day:${museum.business}</p>
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
const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url); // request
    const data = await response.json(); // parse the JSON data
    console.log(data); // temp output test of data response
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // card build code goes here
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        fullName.textContent = prophet.name + prophet.lastname;
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `${prophet.name+prophet.lastname}`)
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width","340");
        portrait.setAttribute("height","440");
        // Append the section(card) with the created elements
        card.appendChild(fullName); //fill in the blank
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}

const url = 'data/typesTour.json';
const cards = document.querySelector('#cards');

async function getType() {
    const response = await fetch(url); // request
    const data = await response.json(); // parse the JSON data
    console.log(data); // temp output test of data response
    displayTypes(data.types);
}

getType();

const displayTypes = (types) => {
    types.forEach((type) => {
        // card build code goes here
        let card = document.createElement("section");
        let fullName = document.createElement("h3");
        let info = document.createElement("p");
        let button = document.createElement("button");
        button.addEventListener("click", () => {
            displayMoreDetails(type);
        });
        fullName.textContent = type.title;
        info.textContent = type.information;
        button.textContent = "Learn More";
        button.setAttribute("class", "mybutton");
        card.setAttribute("class", "mycard");
        // Append the section(card) with the created elements
        card.appendChild(fullName); //fill in the blank
        card.appendChild(info);
        card.appendChild(button);
        cards.appendChild(card);
    });
}
function displayMoreDetails(type) {
    const moreInfo = document.querySelector("#more");
    moreInfo.innerHTML = '';
    moreInfo.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${type.title} </h2>
    <p><strong>Benefits:</strong></p>
    <p>${type.benefits}</p>
  `;
    moreInfo.showModal();

    closeModal.addEventListener("click", () => {
        moreInfo.close();
    });
}




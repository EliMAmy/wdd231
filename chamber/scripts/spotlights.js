
const urlSpot = "data/members.json"
const cards = document.querySelector('#spotlights');




async function getTheCompanyData() {
    const response = await fetch(urlSpot); // request
    const data = await response.json(); // parse the JSON data
    console.log(data); // temp output test of data response
    let index = [];
    let three = [];

    while (index.length < 3) {
        const ramdomIndex = Math.floor(Math.random() * data.companies.length);
        if (!index.includes(ramdomIndex)) {
            index.push(ramdomIndex)
            const randomElement = data.companies[ramdomIndex];
            three.push(randomElement);
        }
        console.log(three);
    }
    displayThreeCompanies(three);
    
}
getTheCompanyData();



const displayThreeCompanies = (companies) => {
    companies.forEach((company) => {
        // card build code goes here
        let card = document.createElement("section");
        let division = document.createElement("div")
        let divisioni = document.createElement("div");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        let phone = document.createElement("p");
        let address = document.createElement("p");
        let web = document.createElement("p");
        let membershipp = document.createElement("p");


        fullName.textContent = company.name;
        address.innerHTML = `<span class="label">ADDRESS:</span> ${company.address}`;
        phone.innerHTML = `<span class="label">PHONE:</span> ${company.phone}`;
        web.innerHTML = `<span class="label">URL:</span> ${company.url}`;
        membershipp.innerHTML = `<span class="label">Membership-Level:</span> ${company.membership}`;
        portrait.setAttribute("src", company.imageurl);
        portrait.setAttribute("alt", `${company.imageurl}`);
        portrait.setAttribute("loading", "lazy");
        card.setAttribute("class", "card");
        division.setAttribute("class", "onecard");
        fullName.setAttribute("class", "title");
        web.setAttribute("class", "url");

        // Append the section(card) with the created elements
        card.appendChild(fullName);
        division.appendChild(portrait);
        divisioni.appendChild(address);
        divisioni.appendChild(phone);
        card.appendChild(web);
        divisioni.appendChild(membershipp);
        division.appendChild(divisioni);
        card.appendChild(division);
        cards.appendChild(card);
    });
}

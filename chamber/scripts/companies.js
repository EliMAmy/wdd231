
const url = "data/members.json"
const cards = document.querySelector('#cards');
const table = document.querySelector("#table");
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");



async function getCompanyData() {
    const response = await fetch(url); // request
    const data = await response.json(); // parse the JSON data
    console.log(data); // temp output test of data response
    displayCompanies(data.companies);
}
getCompanyData();
async function getCompanyDataTable() {
    const response = await fetch(url); // request
    const data = await response.json(); // parse the JSON data
    console.log(data); // temp output test of data response
    displaytheCompanies(data.companies);
}
getCompanyDataTable();


const displayCompanies = (companies) => {
    companies.forEach((company) => {
        // card build code goes here
        let card = document.createElement("section");
        let division = document.createElement("div")
        let divisioni = document.createElement("div");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        let tag = document.createElement("p");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let email = document.createElement("p");


        fullName.textContent = company.name;
        tag.textContent = company.tag;
        address.innerHTML = `<span class="label">ADDRESS:</span> ${company.address}`;
        phone.innerHTML = `<span class="label">PHONE:</span> ${company.phone}`;
        email.innerHTML = `<span class="label">EMAIL:</span> ${company.email}`;
        portrait.setAttribute("src", company.imageurl);
        portrait.setAttribute("alt", `${company.imageurl}`);
        portrait.setAttribute("loading", "lazy");
        card.setAttribute("class", "card");
        division.setAttribute("class", "onecard");
        fullName.setAttribute("class", "title");
        tag.setAttribute("class", "tag");
 
        // Append the section(card) with the created elements
        card.appendChild(fullName);
        card.appendChild(tag);
        division.appendChild(portrait);
        divisioni.appendChild(address);
        divisioni.appendChild(phone);
        divisioni.appendChild(email);
        division.appendChild(divisioni);
        card.appendChild(division);
        cards.appendChild(card);
    });
}





const displaytheCompanies = (companies) => {
    companies.forEach((company) => {
        //  build code goes here
        let body = document.createElement("tbody");
        let division = document.createElement("tr")
        let fullName = document.createElement("th");
        let portrait = document.createElement("td");
        let address = document.createElement("td");
        let phone = document.createElement("td");


        fullName.textContent = company.name;
        address.innerHTML = `<span class="label">Address:</span> ${company.address}`;
        phone.innerHTML = `<span class="label">Phone:</span> ${company.phone}`;
        portrait.setAttribute("src", company.imageurl);
        portrait.setAttribute("alt", `${company.imageurl}`);
        portrait.setAttribute("loading", "lazy");
        body.setAttribute("class", "table-design");

        // Append the section(table) with the created elements
        division.appendChild(fullName);
        division.appendChild(portrait);
        division.appendChild(phone);
        division.appendChild(address);
        body.appendChild(division);
        table.appendChild(body);
    });
}

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
    // example using arrow function
    table.classList.add("hide");
    cards.classList.remove("hide")
});

listbutton.addEventListener("click", () => {
    // example using arrow function
    cards.classList.add("hide");
    table.classList.remove("hide")
});
// FOOTER :select the DOM elements for output

const year = document.querySelector("#currentyear");


// use the date object
const today = new Date();



year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

let oLastModif = new Date(document.lastModified);

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `<span class="highlight">${oLastModif}</span>`;


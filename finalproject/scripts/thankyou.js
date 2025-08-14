const getstring = window.location.search;
console.log(getstring);
const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

console.log(myInfo.get("firstName"));
console.log(myInfo.get("lastName"));
console.log(myInfo.get("state"));
console.log(myInfo.get("phoneNumber"));
console.log(myInfo.get("email"));
console.log(myInfo.get("reservationTour"));
console.log(myInfo.get("reservation"));
console.log(myInfo.get("typeTour"));


document.querySelector("#results").innerHTML = `
    <p> ${myInfo.get('firstName')} ${myInfo.get('lastName')},from ${myInfo.get("state") }</p>
    <p>Your Phone: ${myInfo.get("phoneNumber")}</p>
    <p>Your Email is ${myInfo.get("email")}</p>
    <p>Your  type of reservation is ${myInfo.get("reservationTour")}</p>
    <p>Date: ${myInfo.get("reservation")} for a typeof tour ${myInfo.get("typeTour") }</p>
  `
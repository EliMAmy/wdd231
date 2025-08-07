const getstring = window.location.search;
console.log(getstring);
const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

console.log(myInfo.get("firstName"));
console.log(myInfo.get("lastName"));
console.log(myInfo.get("organizationalTitle"));
console.log(myInfo.get("phoneNumber"));
console.log(myInfo.get("email"));
console.log(myInfo.get("organization"));
console.log(myInfo.get("membershipLevel"));
console.log(myInfo.get("description"));
console.log(myInfo.get("timestamp"));


document.querySelector("#results").innerHTML = `
    <p> ${myInfo.get('firstName')} ${myInfo.get('lastName')},</p>
    <p>Your Phone: ${myInfo.get("phoneNumber")}</p>
    <p>Your Email is ${myInfo.get("email")}</p>
    <p>Your  business/organization's name is ${myInfo.get("organization")}</p>
    <p>Timestamp: ${myInfo.get("timestamp")}</p>
  `
const baseURL = "https://aj-kazza.github.io/wdd230/chamber/";
//const linksURL = "https://aj-kazza.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector('article')
const linksURL = "data/members.json"

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data.members);
    displayMembers(data.members);
}

getLinks();

const displayMembers = (members) => {
    members.forEach((member) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2'); // fill in the blank
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let url = document.createElement('a');
        let level = document.createElement('h4');


        // Build the h2 content out to show the member's full name
        fullName.textContent = `${member.name}`; // fill in the blank
        // Build the image logo by setting all the relevant attributes
        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `Logo of ${member.name}`); // fill in the blank
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '340');
        logo.setAttribute('height', '440');
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        url.textContent = `${member.website}`;
        url.setAttribute('src', member.website)
        level.textContent = `${member.level}`

        // Append the section(card) with the created elements
        
        card.appendChild(fullName); //fill in the blank
        card.appendChild(logo);
        card.appendChild(address)
        card.appendChild(phone)
        card.appendChild(url)
        card.appendChild(level)

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}
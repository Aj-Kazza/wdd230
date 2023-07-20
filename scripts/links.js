const baseURL = "https://aj-kazza.github.io/wdd230/";
//const linksURL = "https://aj-kazza.github.io/wdd230/data/links.json";
const cards = document.querySelector('#topics')
const linksURL = "data/links.json"

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.weeks)
}

getLinks();

const displayLinks = (weeks) => {
    weeks.forEach((week) => {

        console.log(week)
        console.log(week.week)



    });
}

const displayAppend = (links) => {
    links.forEach((link) => {
        console.log(link)
    })
}
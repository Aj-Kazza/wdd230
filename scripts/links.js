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
    weeks.forEach((wek) => {
        let weekname = document.createElement('li')
        
        console.log(wek.week)
        weekname.textContent = wek.week
        displayTopics(wek.links)

        cards.appendChild(weekname)
    });
}
const displayTopics = (lists) => {
    lists.forEach((list) => {
        let a = document.createElement('a')
        console.log(list.title)
        a.setAttribute('href', list.url)
        a.textContent = list.title
    })
}
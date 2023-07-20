const baseURL = "https://aj-kazza.github.io/wdd230/";
//const linksURL = "https://aj-kazza.github.io/wdd230/data/links.json";
const cards = document.querySelector('#topics')
const linksURL = "data/links.json"

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.weeks);
}

getLinks();

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        let weekname = document.createElement('li');
        
        console.log(week.week);
        weekname.textContent = `${week.week} - `;
        displayTopics(week.links, weekname);
        cards.appendChild(weekname);
    });
};
const displayTopics = (lists, weekname) => {
    let i = 1
    lists.forEach((list) => {
        let space = document.createElement('span');
        let a = document.createElement('a');
        let len = lists.length;
        console.log(`i is ${i}`)
        console.log(`the length is ${len}`)
        space.textContent = " | ";
        a.setAttribute('href', list.url);
        a.textContent = `${list.title}`;
        if (i == len) {
            weekname.appendChild(a);
        }
        else {
            weekname.appendChild(a);
            weekname.appendChild(space);
            i = i + 1
        }
        
    });
};
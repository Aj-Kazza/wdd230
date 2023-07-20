const baseURL = "https://aj-kazza.github.io/wdd230/chamber/";
const linksURL = "https://aj-kazza.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector('article')


async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
}
const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const main = document.querySelector("main");
let sections = document.querySelectorAll("section");
let h3 = document.querySelectorAll('h3');

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🌙")) {
		body.style.background = "#000";
		main.style.color = "#FFD100";
		for (const section of sections) {
			section.style.background = '#000'
		}
		modeButton.textContent = "☀️";
		for (const i of h3) {
			i.style.color = 'black'
		}
	} else {
		body.style.background = "white";
		main.style.color = "#000";
		modeButton.textContent = "🌙";
		for (const section of sections) {
			section.style.background = '#E0E0E0'
		}
	}
});
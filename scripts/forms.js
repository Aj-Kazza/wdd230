const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

const kp1 = document.querySelector("#pwd1");
const kp2 = document.querySelector("#pwd2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "❗Password Does Not Match!";
		message.style.visibility = "show";
		kp2.style.backgroundColor = "#fff0f3";
		kp2.style.borderLeft = "red solid 10px";
		message.style.display = 'block';
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
		kp2.style.borderLeft = "green solid 10px";
	}
}

const userName = document.getElementById("user-name");
const userSurname = document.getElementById("user-surname");
const userAge = document.getElementById("user-age");
const userkm = document.getElementById("user-km");
const sendButton = document.getElementById("generate-tiket");
const ticketMessage = document.getElementById("final-message");

const nameElement = document.getElementById("name-element");
const surnameElement = document.getElementById("surnaname-element");

sendButton.addEventListener("click", function () {
	const nameValue = userName.value;
	const surnameValue = userSurname.value;
	const ageValue = userAge.value;
	const kmValue = userkm.value;

	const ticketCost = 0.21;
	let ticketPrice = ticketCost * kmValue;

	if (ageValue < 18) {
		ticketPrice *= 0.8;
	} else if (ageValue > 65) {
		ticketPrice *= 0.6;
	}

	const tiketName = nameValue + " " + surnameValue;

	nameElement.innerHTML = tiketName;
	ticketMessage.innerHTML = "€ " + ticketPrice.toFixed(2);
});

// # considerando che 1km =0.21 euro
// # definire l'età del passeggiero
// # definire il numero di km da percorrere
// # definire il prezzo del biglietto
// # applicare uno sconto del 20% su i minorenni
// # applicare uno sconto del 40% per over 65
// # stampare il tutto su html

const userName = document.getElementById("user-name");
const userSurname = document.getElementById("user-surname");
const userAge = document.getElementById("user-age");
const userkm = document.getElementById("user-km");
const sendButton = document.getElementById("generate-tiket");
const ticketMessage = document.getElementById("final-message");

const nameElement = document.getElementById("name-element");
const surnameElement = document.getElementById("surnaname-element");
const ageElement = document.getElementById("age-element");
const kmElement = document.getElementById("km-element");

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

	// const userText = userAge.value;
	// textParagrp.innerHTML += userText;

	// userAge.value = "";
	// let eurokm = 0.21;
	// const tiketprice = userkm * eurokm;
	// let userdiscount = 0;

	// if (userAge < 18) {
	// 	userdiscount = tiketprice * 0.2;
	// } else if (userAge > 65) {
	// 	userdiscount = tiketprice * 0.4;
	// }

	// const ticketfinalprice = tiketprice - userdiscount;

	// const finalmessage = ticketfinalprice;
});

// # considerando che 1km =0.21 euro
// # definire l'età del passeggiero
// # definire il numero di km da percorrere
// # definire il prezzo del biglietto
// # applicare uno sconto del 20% su i minorenni
// # applicare uno sconto del 40% per over 65
// # stampare il tutto su html

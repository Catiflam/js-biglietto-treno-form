const userAge = document.getElementById("user-age");
const sendButton = document.getElementById("send-text");
const textParagrp = document.getElementById("test");
const textParagrp2 = document.getElementById("test-2");
const userkm = document.getElementById("user-km");

// # chiedere l'età del passeggero
sendButton.addEventListener("click", function () {
	console.log(userAge.value);
	const userText = userAge.value;
	textParagrp.innerHTML = userText;
});

// # chiedere numero di km da percorrere
sendButton.addEventListener("click", function () {
	console.log(userAge.value);
	const userText = userkm.value;
	textParagrp2.innerHTML = userText;
});
// # considerando che 1km =0.21 euro
// # definire l'età del passeggiero
// # definire il numero di km da percorrere
// # definire il prezzo del biglietto
// # applicare uno sconto del 20% su i minorenni
// # applicare uno sconto del 40% per over 65
// # stampare il tutto su html

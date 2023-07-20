const userAge = document.getElementById("user-age");
const sendButton = document.getElementById("send-text");
const sendButton2 = document.getElementById("send-text2");
const textParagrp = document.getElementById("test");
const textParagrp2 = document.getElementById("test-2");
const userkm = document.getElementById("user-km");
const finalbutton = document.getElementById("finalprice");

// # chiedere l'età del passeggero
sendButton.addEventListener("click", function () {
	console.log("userAge");
	const userText = userAge.value;
	textParagrp.innerHTML = userText;
});

// # chiedere numero di km da percorrere
sendButton2.addEventListener("click", function () {
	const userText = userkm.value;
	textParagrp2.innerHTML = userText;
});

finalbutton.addEventListener("click", function () {
	const finaltext = finalmessage.value;
	finalparag.innerHTML = finaltext;
});

let eurokm = 0.21;
const tiketprice = userkm * eurokm;
let userdiscount = 0;

if (userAge < 18) {
	userdiscount = tiketprice * 0.2;
} else if (userAge > 65) {
	userdiscount = tiketprice * 0.4;
}

const ticketfinalprice = tiketprice - userdiscount;

const finalmessage = ticketfinalprice;
// il prezzo finale del tuo biglietto è €

// ${ticketfinalprice}`;

const finalparag = document.getElementById("Tiketprice");

// # considerando che 1km =0.21 euro
// # definire l'età del passeggiero
// # definire il numero di km da percorrere
// # definire il prezzo del biglietto
// # applicare uno sconto del 20% su i minorenni
// # applicare uno sconto del 40% per over 65
// # stampare il tutto su html

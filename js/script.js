var message = null;

var d = new Date();
var today = d.getDate();


if ( today == 15 || today == 30) {

	message = "Yay! It's Payday!";
	
}

else {
	message = "Boo. Today is not payday :(";
}

var payDay = document.getElementById("PayDay");

payDay.innerText = message;
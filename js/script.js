var message = null;
var d = new Date();
var today = d.getDate();
var payDay = document.getElementById("PayDay");

// Is today's date the 15 or the 30th? If yes...

if ( today == 15 || today == 30) {
	message = "Yay! It's Payday!";	
}

// If not...

else {
	message = "Boo. Today is not payday :(";
}

// Display message

payDay.innerText = message;
var message = null;
var d = new Date();
var today = d.getDate(); // return the day of the month as a number 0-30
var month = d.getMonth(); // return month as a number 0-11
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var payDay = document.getElementById("PayDay");

// Is today's date the 15 or the 30th? If yes...

if ( today == 15 || today == 30) {
	message = "Yay! It's Payday!";	
}

// If not...

else {
	message = "Boo. Today is not payday :(";
}

// Defining the proper ordinalIndicator for today's date

var ordinalIndicator = null;

if ( today == 1 || today == 21 || today == 31) {
	ordinalIndicator = "st";
} else if ( today == 2 || today == 22) {
	ordinalIndicator = "nd";
} else {
	ordinalIndicator = "th";
}

var datemessage = ("Today is the " + today + ordinalIndicator + " of " + months[month] + ". "); // months[month] displays today's date

// Display message

payDay.innerText = datemessage + message;
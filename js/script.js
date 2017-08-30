/* is it pay day yet

store what day it is

input day of the month

if day of the month = 15 OR 31
then say is it payday

else if
then say, no it's not pay day :(

*/

// condiditional for when payday falls on a weekend or holiday?
// conditioanls for if the month has < 31 days
// display the date
// display when the next payday is
// define pay dates

// figure out if it's payday or not

var message = "Sorry, I can't find today's date";

var d = new Date();
var today = d.getDate();


if ( today == 15 || today == 30) {

	message = "Yay! It's Payday!";
	
	// console.log("It's Payday!");
}

else {
	message = "Boo. Today is not payday :(";
	//  console.log("Boo. It's not payday :(");
}

// display message on page


var payDay = document.getElementById("PayDay");

payDay.innerText = message;
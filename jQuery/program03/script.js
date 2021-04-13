

// Press enter to submit
// Learned that script needs to be at the bottom of HTML

// var input = document.getElementById("temp");
// input.addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         document.getElementById("myBtn").click();
//     }
// });


// Check Temperature - R1

function checkTemp() {
	var x = document.getElementById('temp').value;

	try { 
    	if(x == "")  throw "is empty";
    	if(isNaN(x)) throw "is not a number";
    	x = Number(x);
    	if(x > 140)   throw alert("Error: Entry is too high"), "error";
    	if(x < -60)  throw alert("Error: Entry is too low"), "error";
    	if(x <= 139 & x >= 80) throw "is hot."
    	if(x <= 79 & x >= 60) throw "is warm."
    	if(x <= 59 & x >= 30) throw "is cold."
    	if(x <= 29 & x >= -50) throw "is below freezing."
  }
  catch(err) {
    document.getElementById('result').innerHTML = "Temperature " + err;
  }
  
}

//Check month - R2

function checkMonth() {
	var y = document.getElementById('month_input').value;

	try {
		y = Number(y);
		if (y > 12) throw "is too high. (1 - 12)";
		if (y < 1) throw "is too low. (1 - 12)"

	}
	catch(err) {
		document.getElementById('month').innerHTML = "Number " + err;
	}

	switch (y) {
	  
	  case 3:
	   y = document.getElementById("month").innerHTML = "The month is March";
	    break;
	  case 4:
	   	y = document.getElementById("month").innerHTML = "The month is April";
	    break;
	  case 5:
	    y = document.getElementById("month").innerHTML = "The month is May";
	    break;
	  case 6:
	    y = document.getElementById("month").innerHTML = "The month is June";
	    break;
	  case 7:
	    y = document.getElementById("month").innerHTML = "The month is July";
	    break;
	  case 8:
	    y = document.getElementById("month").innerHTML = "The month is August";
	    break;
	  case 9:
	    y = document.getElementById("month").innerHTML = "The month is September";
	    break;
	  case 10:
	   y = document.getElementById("month").innerHTML = "The month is October";
	    break;
	  case 11:
	   	y = document.getElementById("month").innerHTML = "The month is November";
	    break;
	  case 12:
	    y = document.getElementById("month").innerHTML = "The month is December";
	    break;
	  case 1:
	    y = document.getElementById("month").innerHTML = "The month is January";
	    break;
	  case 2:
	    y = document.getElementById("month").innerHTML = "The month is February";
	    break;
	}

}
//R3

function getSeason() {
	var x = document.getElementById('month_input').value;

	x = Number(x);
	
	try {
		
		if (x > 12) throw "is too high. (1 - 12)";
		if (x < 1) throw "is too low. (1 - 12)"

	}
	catch(err) {
		document.getElementById('season').innerHTML = "Number " + err;
	}

	switch (x) {
      case 3:
      case 4:
      case 5:
		x = document.getElementById('season').innerHTML = "The season is Spring";
	  break;
	  case 6:
	  case 7:
	  case 8:
	   x = document.getElementById('season').innerHTML = "The season is Summer";
	  break;
	  case 9:
	  case 10:
	  case 11:
	   x = document.getElementById('season').innerHTML = "The season is Fall";
	  break;
	  case 12:
	  case 1:
	  case 2:
	   x = document.getElementById('season').innerHTML = "The season is Winter";
	  break;
	}

}


//For loop: names and months; - R4
function displayBirthMonth() {
	var output = "";
	var birthMonth = {

		January: "Julia",
		Febuary: "Fred",
		March: "Maybry",
		April: "Annabeth",
		May: "Moody",
		June: "Jaren",
		July: "Joseph",
		August: "Alibine",
		September: "Sopia",
		October: "Octavio", 
		November: "Nostradomus", 
		December: "Duke"
					};
var x;

for (x in birthMonth) {
	
	output += x + " : " + birthMonth[x] + "</br>";

}
	document.getElementById('names').innerHTML = output;

}

//R5


function displaySelectMonths() {

	var selectMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
	var i = 0; 
	while(i < selectMonth.length) {
		
		document.getElementById('select').innerHTML = selectMonth[0] + "</br>" +
		 selectMonth[2] + "</br>" + selectMonth[3] + "</br>" + selectMonth[4] +
		  "</br>" + selectMonth[11]
		i++;
		
	}
}
//R6

function changejQueryMessage() {

	var str = document.getElementById('javaCry').value

	x = str.replace('cry', 'smile 😂😂😂😂😂😂')

	document.getElementById('javaBold').style.fontSize = "1.5em"
	document.getElementById('javaBold').style.color = "blue"
	document.getElementById('javaBold').innerHTML = x


}
//R7
function strict() {
	"use strict";
	document.getElementById('error').innerHTML = "-Open inspector to see error-</br><br>Strict mode helps by showing developers an error message when they encounter unexpected occurences in their code."
	x = "This is a string" 
	
}

//R8
function displaySkiResorts() {
	var output = ""
	var skiResorts = '{"Alta ": "Utah", "High Rise ": "Colorado", "Downslope ": "New Mexico"}';
	var obj = JSON.parse(skiResorts)
	var x; 
	for (x in obj) {
	
	output += x + " : " + obj[x] + "</br>";

}
	document.getElementById('resort').innerHTML = output;

}
//R9-10-11
 
function player(firstName,lastName,height,yearsInLeague) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.height = height;
	this.yearsInLeague = yearsInLeague;
	this.updateYears = function (years) {
		this.yearsInLeague = years;
	}
}
function initializePlayer() {
	var yearUpdate = new player("River", "Camacho", 72, 10);

	document.getElementById('player').innerHTML = "First Name: " + yearUpdate.firstName + "<br>" + "Last Name: " + yearUpdate.lastName + 
	"<br>" + "Height: " + yearUpdate.height + "in" + "<br>" + "Tenureship: " + yearUpdate.yearsInLeague + " " + "years";
}

function changeYears() {

	var yearUpdate = new player("River", "Camacho", 72, 10);
	
	yearUpdate.updateYears(document.getElementById('update').value);

	document.getElementById('year').innerHTML = "First Name: " + yearUpdate.firstName + "<br>" + "Last Name: " + yearUpdate.lastName + 
	"<br>" + "Height: " + yearUpdate.height + "in" + "<br>" + "Tenureship: " + yearUpdate.yearsInLeague + " " + "years";
}

function protoTeam() {
	
	var teamUpdate = new player("River", "Camacho", 72, 10);
	


	player.prototype.team = document.getElementById('enterTeam').value;


	document.getElementById('team').innerHTML = "First Name: " + teamUpdate.firstName + "<br>" + "Last Name: " + teamUpdate.lastName + 
	"<br>" + "Height: " + teamUpdate.height + "in" + "<br>" + "Tenureship: " + teamUpdate.yearsInLeague + " " + "years" + "<br>" + "Team: " + teamUpdate.team;


}



//Dropdown button - Extra
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }






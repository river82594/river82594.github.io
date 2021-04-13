

//R1

function average() {
  var length = arguments.length;
  var sum = 0;
  
  for(var i=0; i<length; i++) {
    sum = sum + arguments[i];
  }
  
  return sum/length;
}
function getAverage() {

x = document.getElementById('num1').value;
y = document.getElementById('num2').value;
z = document.getElementById('num3').value;

document.getElementById('result').innerHTML = average(x++, y++, z++).toFixed(2);

}
	

//R2

var x = myFunction("#2 Hello", "from selfInvoke.");

document.getElementById("self").innerHTML = x;

function myFunction(a, b) {
  return a + " " + b;
}


//R3


var names = ' ';

function closureExample(){
	var y = document.getElementById('close');
	var name = document.getElementById('name').value;
	names += (name + " ")
	y.innerHTML = names;

}


//R4


function colorChange(changeMyColor) {

	elements = document.getElementsByClassName("changeMyColor");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor="blue";
        elements[i].style.color = "white";
    }
}

//R5

function fontSizeChange() {
	
		var titles = document.getElementById("alter");
		titles.getElementsByTagName("h3")[0].style.fontSize = "xx-large";
		titles.getElementsByTagName("p")[0].style.fontSize = "x-large"


}

//R6 

function mouseDown() {
	document.getElementById("changeColorText").style.color = "white";
	document.getElementById("changeColorText").style.backgroundColor = "black";

}
function mouseUp() {
	document.getElementById("changeColorText").style.color = "black";
	document.getElementById("changeColorText").style.backgroundColor = "#f2f4f7"
}

//R7

//R8
document.getElementById("myB").addEventListener("click", handleDivClick);

function handleDivClick() {
	alert("The event listener produced the alert!")
}

//R9
function domContent() {
	var markup = document.documentElement.innerHTML;
	alert(markup);
}

//R10
function changeContent() {
	cont = document.getElementById('pcon').firstChild;
	var txt = " ";
	txt += cont.nodeValue;
	document.getElementById('content').innerHTML = txt;
}
//R11
function createNode() {
	var par = document.createElement("P");
  	par.innerHTML = "This is a paragraph element.";
  	document.getElementById("div").appendChild(par);
}

//R12
function removeNode() {
	var rem = document.getElementById('div');
	rem.remove();
}


//R13
function changeNodeList() {
	var myList = document.querySelectorAll("ul");
	var i;
     for (i = 0; i < myList.length; i++) {
    myList[i].style.backgroundColor = "yellow";
}
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






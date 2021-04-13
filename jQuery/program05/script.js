
//R9 & R10
var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById("digit_clock_time").innerHTML = t;
}

document.getElementById('start_btn').addEventListener("click", stopClock);


function stopClock() {
    clearInterval(myVar);
    document.getElementById('start_btn').value = "Start";
    document.getElementById('start_btn').style.background = "green";
    document.getElementById('start_btn').removeEventListener("click", stopClock);
    document.getElementById('start_btn').addEventListener("click", start);
}

function start() {
    myVar = setInterval(myTimer, 1000);
    document.getElementById('start_btn').value = "Stop";
    document.getElementById('start_btn').style.background = "red";
    document.getElementById('start_btn').removeEventListener("click", start);
    document.getElementById('start_btn').addEventListener("click", stopClock);
    }

//R4 & R5

function goBack() {
        window.history.back();   
    }
    
function goForward() {
        window.history.back();
    }


//R11
function fadeIn(el, b, c) {
    el.style.opacity = 0;
    b.style.opacity = 0;
    c.style.opacity = 0;
    var tick = function () {
        el.style.opacity = +el.style.opacity + 0.01;
        b.style.opacity = +b.style.opacity + 0.01;
        c.style.opacity = +c.style.opacity + 0.01;
        if (+el.style.opacity && +b.style.opacity && +c.style.opacity  < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        }
    };
    tick();
}
function myFunction() {
    var el = document.getElementById("dog");
    var b = document.getElementById("dog1");
    var c = document.getElementById('dog2');
    fadeIn(el, b, c);
}


    
g = 5
var interval = setInterval(function time(){
    if (g == 0) {
        clearInterval(interval);
        myFunction();
    } else {
        g -= 1;
    }
}, 1000);


function getSize() {
    x = window.innerHeight
    y = window.innerWidth
    document.getElementById('data').innerHTML ="Your window is" + " " + ++x + "p" + " " + "x" + " " + ++y + "p"; 
}

function displayLocation() {
    x = window.location.href;
    
    document.getElementById('locate').innerHTML = "Your URL Location is " + " " + "*" + x + "*" ;
}

function changeURL() {
    location.replace("https://www.w3schools.com")
}

function browserInfo(){
    var x = navigator.appName;
    var y = navigator.appCodeName;
    var z = navigator.product;
    document.getElementById('appNam').innerHTML = "App Name: " + x;
    document.getElementById('appCode').innerHTML = "App Codename: " + y;
    document.getElementById('prod').innerHTML = "Product: " + z;
}

function xtraInfo() {
    var txt;
    var r = confirm("Want to see the App Version, User agent, and platform of your browser?");
    if (r == true) {
        var x = navigator.appVersion;
        var y = navigator.userAgent;
        var z = navigator.platform;
        document.getElementById('appVers').innerHTML = "App Version: " + x;
        document.getElementById('appAge').innerHTML = "User Agent: " + y;
        document.getElementById('plat').innerHTML = "Platform: " + z;
    
    } else {
        txt = "You didn't to see all that bologna";
    }   
    document.getElementById('showUser').innerHTML = txt;
    
    
}
function favBrowse() {
  var txt;
  var person = prompt("Please enter your favorite browser:", "Chrome");
  if (person == null || person == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "Your favorite browser is" + " " + person;
  }
  document.getElementById("prom").innerHTML = txt;
}

function setCookie1()
{
    var x = document.getElementById("name").value;
    document.cookie="name=" + x;  
     cookie1 =  document.cookie;
     alert(document.cookie);
}
function setCookie2()
{
    var y = document.getElementById("hobby").value;
    document.cookie="hobby =" + y;  
     cookie2 =  document.cookie;
     alert(document.cookie);
}
function setCookie3()
{
    var z = document.getElementById("school").value;
    document.cookie="school =" + z;  
     cookie3 =  document.cookie;
     alert(document.cookie);
} 
function clearCookie1(){
    document.cookie=cookie1+";max-age=0";  
    cookie1=document.cookie;  
    alert("Cookie1 is deleted");  
}
function clearCookie2(){
    document.cookie=cookie2+";max-age=0";  
    cookie2=document.cookie;  
    alert("Cookie2 is deleted");  
}
function clearCookie3(){
    document.cookie=cookie3+";max-age=0";  
    cookie3=document.cookie;  
    alert("Cookie3 is deleted");  
}
function getCookies(){
    alert(document.cookie);
}


function displayCookie()  
{  
    if(document.cookie.length!=0)  
    {  
    alert(document.cookie);  
    }  
    else  
    {  
        alert("hey give me your cookies at the end.");  
    }  
}  


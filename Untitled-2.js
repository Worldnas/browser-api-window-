// window
//alert(window.innerWidth)

document.getElementById("result").innerHTML+= "width is" + window.innerWidth+"<br>";
document.getElementById("result").innerHTML+= "height is " + window.innerHeight+"<br>";
document.getElementById("result").innerHTML+= "outer width is " + window.outerWidth+"<br>";
document.getElementById("result").innerHTML+= "outer height is " + window.outerHeight+"<br>";
document.getElementById("result").innerHTML+= "screenx is " + window.screenX+"<br>";
document.getElementById("result").innerHTML+= "screeny is" + window.screenY+"<br>";
window.scrollTo(30,30);
document.getElementById("result").innerHTML+= "offsetx is" + window.pageXOffset+"<br>";
document.getElementById("result").innerHTML+= "offsety is" + window.pageYOffset+"<br>";
/*var temp= window.prompt("who are you?");
alert("welcome dear"+temp)*/
//window.print();
var win = window.open("award.html","newwin","width=250","Height=250","toolbar=0","menubar=0","resizable=0","screenx=20","screeny=20",);
//win.document.body.innerHTML="welcome";
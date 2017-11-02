var A = "65";
var D = "68";
var W = "87";
var S = "83";
var Q = "81";
var E = "69";
var R = "82";
var T = "84";
var G = "71";
var Y = "89";
var H = "72";
var U = "85";
var J = "74";
var I = "73";
var K = "75";

window.onload = function (){
	window.addEventListener("keydown", checkKeyPress, false);
  window.addEventListener("keyup", checkKeyUp, false);
  function checkKeyUp(key){
		if (key.keyCode == "65"||key.keyCode == "87"||key.keyCode == "83"||key.keyCode == "68") {
			stop();
		}
	}
  function checkKeyPress(key){
		if (key.keyCode == A) {
			left();
		} else if (key.keyCode == W) {
			forward();
		} else if (key.keyCode == S) {
     		 reverse();
    	} else if (key.keyCode == D) {
      		right();
    	} else if (key.keyCode == E) {
      		cameraRight();
    	}
	}
  var xmlhttp;
	xmlhttp=new XMLHttpRequest();
	function cameraRight()
	{
		xmlhttp.open("GET","cgi-bin/servoMotors/scripts/camera-right.py",true);
		xmlhttp.send();
		alert('done');
	}
	function forward()
	{
		xmlhttp.open("GET","cgi-bin/forward.cgi",true);
		xmlhttp.send();
	}
	function left()
	{
		xmlhttp.open("GET","cgi-bin/left.cgi",true);
		xmlhttp.send();
	}
	function right()
	{
		xmlhttp.open("GET","cgi-bin/right.cgi",true);
		xmlhttp.send();
	}
	function reverse()
	{
		xmlhttp.open("GET","cgi-bin/reverse.cgi",true);
		xmlhttp.send();
	}
	function stop(event)
	{
		xmlhttp.open("GET","cgi-bin/stop.cgi",true);
		xmlhttp.send();
	}
	function lighton()
	{
		xmlhttp.open("GET","cgi-bin/lighton.cgi",true);
		xmlhttp.send();
	}
	function lightoff()
	{
		xmlhttp.open("GET","cgi-bin/lightoff.cgi",true);
		xmlhttp.send();
	}
	function a145()
	{
		xmlhttp.open("GET","cgi-bin/145.cgi",true);
		xmlhttp.send();
	}
	function a115()
	{
		xmlhttp.open("GET","cgi-bin/115.cgi",true);
		xmlhttp.send();
	}
	function a85()
	{
		xmlhttp.open("GET","cgi-bin/85.cgi",true);
		xmlhttp.send();
	}
	function a60()
	{
		xmlhttp.open("GET","cgi-bin/60.cgi",true);
		xmlhttp.send();
	}
	function a50()
	{
		xmlhttp.open("GET","cgi-bin/50.cgi",true);
		xmlhttp.send();
	}
	function leftpan()
	{
		xmlhttp.open("GET","cgi-bin/leftpan.cgi",true);
		xmlhttp.send();
	}
	function centerpan()
	{
		xmlhttp.open("GET","cgi-bin/centerpan.cgi",true);
		xmlhttp.send();
	}
	function rightpan()
	{
		xmlhttp.open("GET","cgi-bin/rightpan.cgi",true);
		xmlhttp.send();
	}
}

window.onload = function (){
	window.addEventListener("keydown", checkKeyPress, false);
	function checkKeyPress(key){
		if (key.keyCode == "65") {
			left();

		}
	}
}

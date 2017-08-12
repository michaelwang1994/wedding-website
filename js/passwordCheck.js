function toggleScroll() {
	disableScroll();
}


function checkPassword() {
	var password = document.getElementById('password-field');
	if (password.value == "wangtwobecomeone") {
		window.scrollTo(0, 0);
		document.getElementById('splashscreen').style.opacity = 0;
		setTimeout(function() {
			document.getElementById("splashscreen").remove();
			enableScroll();
		}, 
		1000);
	}
	
	else {
		alert("Invalid Password.");
	}
};

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;

}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}
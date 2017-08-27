function checkPassword() {
	var password = document.getElementById('password-field');
	if (password.value == "wangtwobecomeone") {
        grantAccessToPage();
	}
	else {
		invalidPasswordAlert();
	}
};

function grantAccessToPage() {
    resetWindow();
    clearSplashScreen();
    deleteSplashScreenClass();
    enableScroll();
};

function resetWindow() {
    window.scrollTo(0, 0);
};

function clearSplashScreen() {
    document.getElementById('splashscreen').style.opacity = 0;
};

function deleteSplashScreenClass() {
    setTimeout(function() {
        document.getElementById("splashscreen").remove();
    }, 1000);
};

function invalidPasswordAlert() {
    alert("Invalid Password.");
};

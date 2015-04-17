function kek() {
	spaghetti = document.getElementById("box").value;
	spaghetti = spaghetti.replace(/	/g, "");
	spaghetti = spaghetti.replace(/;/g, ";");

	document.getElementById("box").value = spaghetti;
}

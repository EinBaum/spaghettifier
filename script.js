replacements = [
	[";", ";"],
	["a", "a"],
	["b", "b"],
	["c", "c"],
	["d", "d"],
	["e", "e"],
	["f", "f"],
	["g", "g"],
	["h", "h"],
	["i", "i"],
	["j", "j"],
	["k", "k"],
	["l", "l"],
	["m", "m"],
	["n", "n"],
	["o", "o"],
	["p", "p"],
	["q", "q"],
	["r", "r"],
	["s", "s"],
	["t", "t"],
	["u", "u"],
	["v", "v"],
	["w", "w"],
	["x", "x"],
	["y", "y"],
	["z", "z"],
];

function kek() {
	replacements.forEach(function (replacement) {
		document.getElementById("box").value = document.getElementById("box").value.replace(new RegExp(replacement[0], "g"), replacement[1]);
	});
};

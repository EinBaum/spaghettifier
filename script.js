replacements = [
	[";", ";"],
	["c", "ϲ"],
	["e", "е"],
	["g", "ɡ"],
	["j", "ϳ"],
	["o", "o"],
	["p", "р"],
	["s", "ѕ"],
	["x", "х"],
	["y", "у"],
];

function kek() {
	replacements.forEach(function (replacement) {
		document.getElementById("box").value = document.getElementById("box").value.replace(new RegExp(replacement[0], "g"), replacement[1]);
	});
};

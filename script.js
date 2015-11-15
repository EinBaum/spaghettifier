replacements = [
	[";", ";"],
	["|", "ǀ"],

	["a", "а"], ["A", "А"],
	            ["B", "В"],
	["c", "ϲ"], ["C", "С"],
	["e", "е"], ["E", "Е"],
	["g", "ɡ"],
	            ["H", "Н"],
	["i", "і"], ["I", "Ι"],
	["j", "ϳ"],
	            ["K", "К"],
	            ["M", "М"],
	            ["N", "Ν"],
	["o", "o"], ["O", "О"],
	["p", "р"], ["P", "Р"],
	["s", "ѕ"],
	            ["T", "Т"],
	["x", "х"], ["X", "Х"],
	["y", "у"], ["Y", "Υ"],
	            ["Z", "Ζ"],

	["ë", "ё"], ["Ë", "Ё"],
	["ï", "ї"], ["Ï", "Ї"]
	["ö", "ӧ"], ["Ö", "Ӧ"],
];

function kek () {
	replacements.forEach(function (replacement) {
		document.getElementById("box").value = document.getElementById("box").value.replace(new RegExp(replacement[0], "g"), replacement[1]);
	});
};

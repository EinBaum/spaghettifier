replacements = [
	[";", ";"],
	["\\|", "ǀ"],

	["a", "а"], ["A", "А"],
	            ["B", "В"],
	["c", "ϲ"], ["C", "С"],
	["d", "ԁ"],
	["e", "е"], ["E", "Е"],
	["g", "ɡ"],
	            ["H", "Н"],
	["i", "і"], ["I", "Ι"],
	["j", "ϳ"],
	            ["K", "К"],
	            ["M", "М"],
	            ["N", "Ν"],
	["o", "о"], ["O", "О"],
	["p", "р"], ["P", "Р"],
	["s", "ѕ"], ["S", "Ѕ"],
	            ["T", "Т"],
	["x", "х"], ["X", "Х"],
	["y", "у"], ["Y", "Υ"],
	            ["Z", "Ζ"],

	["ë", "ё"], ["Ë", "Ё"],
	["ï", "ї"], ["Ï", "Ї"],
	["ö", "ӧ"], ["Ö", "Ӧ"],
];

function kek () {
	var inp = document.getElementById("box_in");
	var out = document.getElementById("box_out");
	out.value = inp.value;
	replacements.forEach(function (replacement) {
		out.value = out.value.replace(new RegExp(replacement[0], "g"), replacement[1]);
	});
};

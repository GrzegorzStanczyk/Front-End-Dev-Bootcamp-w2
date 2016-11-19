if (typeof String.prototype.repeatt !== "function") {

	String.prototype.repeatt = function(count) {

		var temp = ""

		for (var i = 0; i <= count; i++) {
			temp += this
		}

		return temp

	}

}

console.log("Polifill String.prototype.repeatt " + "hej".repeatt(3))
console.log("String.prototype.repeat " + "hej".repeat(3))
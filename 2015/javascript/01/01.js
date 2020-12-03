//---load puzzle
fs = require('fs');
var input = fs.readFileSync('inputAlFe.txt', 'utf8');
//---end load puzzle

var solveA = 0;
var solveB = 1;
var floor = 0;

var inputArray = input.split('');

for (i in inputArray) {
	var char = inputArray[i];
	if (char == '(') {
		solveA++;
	} else {
		solveA--;
	}
}

for (i in inputArray) {
	var char = inputArray[i];
		if (char == '(') {
		floor++;
	} else if (char ==')') {
		floor--;
	}
	if (floor == -1) {
		break;
	} else {
		solveB++
	}
}

console.log(solveA)
console.log(solveB)
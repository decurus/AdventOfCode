//---load puzzle
fs = require('fs');
var input = fs.readFileSync('inputAlFe.txt', 'utf8');
//---end load puzzle

var inputArray = input.split('\r');

var solveA = 0;
var solveB = 0;

var i1 = 0;
var i2 = 0;

var godown = 1;
var goright = 3;
var LineLength = inputArray[1].length;

for ( i1 ; i1 < inputArray.length ; i1 = i1 + godown ) {
	var activeLine = inputArray[i1];
	var checkChar = activeLine[i2];
	
	if (checkChar == "#") {
		solveA++;
	}
	
	i2 = i2 + goright;
	if ( i2 > LineLength) {
		var i2 = i2 - LineLength;
	}
}

console.log(solveA);
console.log(solveB);
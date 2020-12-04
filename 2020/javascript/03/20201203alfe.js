//---load puzzle
fs = require('fs');
var input = fs.readFileSync('inputAlFe.txt', 'utf8');
//---end load puzzle

var inputArray = input.split('\r');
var inputArrayLength = inputArray.length

var solveA = 0;
var solveB = 0;

// part 1

var i1 = 0;
var i2 = 0;

var godown = 1;
var goright = 3;

var LineLength = inputArray[1].length;

for ( i1 ; i1 < inputArrayLength ; i1 = i1 + godown ) {
	var activeLine = inputArray[i1];
	var checkChar = activeLine[i2];
	
	if (checkChar == "#") {
		solveA++;
	}
	
	i2 = i2 + goright;
	if ( i2 >= LineLength) {
		var i2 = i2 - LineLength;
	}
}

// part 2

var f1 = 0;
var f2 = solveA;
var f3 = 0;
var f4 = 0;
var f5 = 0;

// f1

var i1 = 0;
var i2 = 0;

var godown = 1;
var goright = 1;

var LineLength = inputArray[1].length;

for ( i1 ; i1 < inputArrayLength ; i1 = i1 + godown ) {
	var activeLine = inputArray[i1];
	var checkChar = activeLine[i2];
	
	if (checkChar == "#") {
		f1++;
	}
	
	i2 = i2 + goright;
	if ( i2 >= LineLength) {
		var i2 = i2 - LineLength;
	}
}


// f3

var i1 = 0;
var i2 = 0;

var godown = 1;
var goright = 5;

var LineLength = inputArray[1].length;

for ( i1 ; i1 < inputArrayLength ; i1 = i1 + godown ) {
	var activeLine = inputArray[i1];
	var checkChar = activeLine[i2];
	
	if (checkChar == "#") {
		f3++;
	}
	
	i2 = i2 + goright;
	if ( i2 >= LineLength) {
		var i2 = i2 - LineLength;
	}
}

// f4

var i1 = 0;
var i2 = 0;

var godown = 1;
var goright = 7;

var LineLength = inputArray[1].length;

for ( i1 ; i1 < inputArrayLength ; i1 = i1 + godown ) {
	var activeLine = inputArray[i1];
	var checkChar = activeLine[i2];
	
	if (checkChar == "#") {
		f4++;
	}
	
	i2 = i2 + goright;
	if ( i2 >= LineLength) {
		var i2 = i2 - LineLength;
	}
}

// f5

var i1 = 0;
var i2 = 0;

var godown = 2;
var goright = 1;

var LineLength = inputArray[1].length;

for ( i1 ; i1 < inputArrayLength ; i1 = i1 + godown ) {
	var activeLine = inputArray[i1];
	var checkChar = activeLine[i2];
	
	if (checkChar == "#") {
		f5++;
	}
	
	i2 = i2 + goright;
	if ( i2 >= LineLength) {
		var i2 = i2 - LineLength;
	}
}

solveB = f1 * f2 * f3 * f4 * f5;

console.log(solveA);
console.log(solveB);

//---load puzzle
fs = require('fs');
var input = fs.readFileSync('inputAlFe.txt', 'utf8');
//---end load puzzle
var solveA = 0;
var solveB = 0;

var PassportList = input.split('\n\n');

for (i1 in PassportList) {
	var activePassport = PassportList[i1];
	activePassport = activePassport.replace(/ /g, '\n');
	var valid0 = activePassport.match( /hcl|ecl|byr|iyr|eyr|hgt|pid/gi )
	if (valid0.length == 7) {
		solveA++
	}
}



console.log(solveA);
console.log(solveB);
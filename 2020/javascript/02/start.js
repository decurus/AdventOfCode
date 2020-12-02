//---load puzzle
fs = require('fs');
var input = fs.readFileSync('inputAlFe.txt', 'utf8');
var inputArray = input.split('\n');
//---end load puzzle

var solveA = 0;
var solveB= 0;

for (i in inputArray) {
//	//store password
	var activLine = inputArray[i];
//	var activLine = inputArray[1];

	//split the password and the rule 
	var splitLine = activLine.split(':');
	var rule = splitLine[0]; 
	var password = splitLine[1]; 
	
	// prepare vars for policy 1
	var splitRule = rule.split(' ');
	var policyLetter = splitRule[1];
	var policyRule = splitRule[0];
	
	var SplitChar = policyRule.split("-");
	var min = SplitChar[0];
	var max = SplitChar[1];
	
	//check policy 1
	var occurances = 0
	for (var letter in password) {
		if (password[letter] == policyLetter) {
			occurances++;
		}
	}
	if (occurances >= min) {
		if (occurances <= max) {
			solveA++;
		}
	}
	
	//prepare vars for policy 2
	var firstCar = password[min];
	var secondChar = password[max];
	
	if (firstCar == secondChar){
		
	} else {
			if (firstCar == policyLetter) solveB++
			if (secondChar == policyLetter) solveB++
		}

	
}


console.log(solveA);
console.log(solveB);
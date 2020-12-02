//---load puzzle
fs = require('fs');
var input = fs.readFileSync('inputAlFe.txt', 'utf8');
var inputArray = input.split('\n');
//---end load puzzle

var solveA = 0

for (i in inputArray) {
//	//store password
	var activLine = inputArray[i];
//	var activLine = inputArray[1];

	//split the password and the rule 
	var splitLine = activLine.split(':');
	var rule = splitLine[0]; 
	var password = splitLine[1]; 
	
	// split the rule in vars
	var splitRule = rule.split(' ');
	var policyLetter = splitRule[1];
	var policyRule = splitRule[0];
	
	var SplitChar = policyRule.split("-");
	var min = SplitChar[0];
	var max = SplitChar[1];
	
	//check policy
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
}


console.log(solveA);
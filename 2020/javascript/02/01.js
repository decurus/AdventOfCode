//----Load file content
fs = require('fs');
var input = fs.readFileSync('input', 'utf8');
var inputArray = input.split('\n');
//---end load

var example = inputArray[0];

var splitLine = inputArray[0].split(':');

var password = splitLine[1];

var policyRules = splitLine[0];

var policyLetter = policyRules.split(' ')[1];

var occurances = 0;

for (var letter in password){
	
	if ( password[letter] == policyLetter ){
		occurances++;
	}
}

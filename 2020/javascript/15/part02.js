var start = Date.now();
//---load puzzle
fs = require('fs');
var input = fs.readFileSync('inputAlFe.txt', 'utf8');

var end = 30000000; //for 2020 result must be 1015
var occurance = {};
var turns = input.split(',');
var i = 0;
var newSpokenNumber;

for ( i ; i < turns.length -1 ; i++) {
	var spokenNumber = turns[i];
	//occurance.push([Number(spokenNumber) , i+1 ]); //because i starts with 0
	occurance[spokenNumber] = i+1 ; //store occ in JSON objects
}
spokenNumber = turns[i];
i++;
for (i ; i < end ; i++) {
	var lastOccurance = occurance[spokenNumber];
	if (lastOccurance == undefined) {
		newSpokenNumber = 0;
	} else {
		newSpokenNumber = i - lastOccurance;
	}
	//turns.push(newSpokenNumber);
	occurance[spokenNumber] = i ;
	spokenNumber = newSpokenNumber;
}
var timeEnd = Date.now();
var runtime = timeEnd -start;

console.log(runtime)
console.log(spokenNumber)

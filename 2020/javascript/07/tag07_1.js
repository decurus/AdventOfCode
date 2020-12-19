//---load puzzle
fs = require('fs');
var input = fs.readFileSync('inputAlFe.txt', 'utf8');
//---end load puzzle


input = input.replace(/(bags*\.*)|(\d)|( )|(no other)/g, '');
input = input.replace(/contain/g, ',');

input = input.split('\n') // regEx ist langsamer sagt der Lehrer

var allFoundBags = []

function searchInBags(searchColor, inputList) {
//	var searchColor = 'shinygold';
	var foundBags = [];
	
	for (var i in input) {
		var listBags = input[i].split(',');
		for (var bag = 1 ; bag < listBags.length ; bag++ ) {
			var currentBag = listBags[bag];
			if (currentBag == searchColor) {
				foundBags.push(listBags[0]);
			}
		}
	}
	for (var foundBag in foundBags) {
		var foundNext = searchInBags(foundBags[foundBag]);
		for (found in foundNext) {
			foundBags.push(foundNext[found]) //damit das Array als Einzelwerte angehängt wird
		}
	}
		return foundBags
}

var allFoundBags = (searchInBags('shinygold'));

var filterBags = []

for (var i in allFoundBags ) {
	var color = allFoundBags[i];
	if ( filterBags.includes(color) == false ) {
		filterBags.push(color);
	}
}

console.log(filterBags.length)
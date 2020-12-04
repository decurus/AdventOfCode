//---load puzzle
fs = require('fs');
var input = fs.readFileSync('inputAlFe.txt', 'utf8');
//---end load puzzle
var solveA = 0;
var solveB = 0;
var valid
var value

var PassportList = input.split('\n\n');

for (i1 in PassportList) {
	var activePassport = PassportList[i1];
	activePassport = activePassport.replace(/ /g, '\n');
	var valid0 = activePassport.match( /hcl|ecl|byr|iyr|eyr|hgt|pid/gi );
	if (valid0.length == 7) {
		solveA++;
		valid = true
		
		//if valid, then check for part 2
		
		activePassport = activePassport.split('\n')
		for (i2 in activePassport) {
			var checkLine = activePassport[i2];
			var checkArray = checkLine.split(':');
			var checkPosition = checkArray[0];
			var checkValue = checkArray[1];
			if (checkPosition == 'byr') {
				if (checkValue >= 1920 && checkValue <= 2002) {
					valid = true;
				} else {
					valid = false;
				}
			} else if (checkPosition == 'iyr') {
				if (checkValue >= 2010 && checkValue <= 2020) {
					valid = true;
				} else {
					valid = false;
				}
			} else if (checkPosition == 'eyr') {
				if (checkValue >= 2020 && checkValue <= 2030) {
					valid = true;
				}else {
					valid = false;
				}
			} else if (checkPosition == 'hgt') {
				var unit = checkValue.match( /cm$|in$/ );
				if (unit[0] == 'cm') {
					value = checkValue.replace(/\D/g, '')
					if (value >= 150 && value <=193) {
						valid = true;
					}else {
						valid = false;
					}
				} else if (unit == 'in') {
					value = checkValue.replace(/\D/g, '')
					if (value >= 59 && value <=76) {
						valid = true;
					}else {
						valid = false;
					}
				}
			} else if (checkPosition == 'hcl') {
				value = checkValue.match(/#[0-9a-f]{6}/g)
				if (value == null) {
					valid = false;
				} else {
					valid = true;
				}
			} else if (checkPosition == 'ecl') {
				value = checkValue.match(/amb|blu|brn|gry|grn|hzl|oth/g)
				if (value == null) {
					valid = false;
				} else {
					valid = true;
				}
			} else if (checkPosition == 'pid') {
				value = checkValue.match(/[0-9]{9}/g)
				if (value == null) {
					valid = false;
				} else {
					valid = true;
				}

			}
			console.log(valid)
			console.log('###########################')
		}
		
		
	}else {
		valid = false
	}
}



console.log(solveA);
console.log(solveB);
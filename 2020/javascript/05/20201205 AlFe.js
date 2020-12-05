//---load puzzle
fs = require('fs');
var input = fs.readFileSync('inputAlFe.txt', 'utf8');
//---end load puzzle
var solveA = 0;
var solveB = 0;
var valid = '';
var value = '';
var seatList = [];

var inputArray = input.split('\n');

for (i1 in inputArray) {
	var activeLine = inputArray[i1];
	var activeLineRow = activeLine.slice(0 , 7);
	activeLineRow = activeLineRow.replace(/F/g, '0');
	activeLineRow = activeLineRow.replace(/B/g, '1');
	var row = parseInt( activeLineRow , 2 ) ;
	
	var activeLineSeat = activeLine.slice(7 , 10);
	activeLineSeat = activeLineSeat.replace(/L/g, '0');
	activeLineSeat = activeLineSeat.replace(/R/g, '1');
	var seat = parseInt( activeLineSeat , 2 ) ;
	
	var seatNumber = row * 8 + seat;
	
	if (seatNumber > solveA) {
		solveA = seatNumber;
	}
	
	//store in list
	seatList.push(seatNumber)
}

//found missing seat
seatList.sort(function(a, b){return a-b});;
var seatNr = 0
var seats = seatList.length
for ( var seatNr=0; seatNr < seatList.length; seatNr++ ) {
	var currentSeat = seatList[seatNr];
	var nextSeat = seatList[seatNr + 1]
	if (currentSeat + 1 < nextSeat) {
		solveB = currentSeat + 1
	}
}


console.log(seatList)



console.log(solveA);
console.log(solveB);
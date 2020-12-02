fs = require('fs');

//diese zeile ist unnötig

var input = "";
var product = 0;

var array = [];


function readAndPrint(fn){
	input = fs.readFileSync(fn, 'utf8');
}

readAndPrint('input');

//console.log(input);


var inputArray = input.split('\n');


for( var i1=0; i1 < inputArray.length; i1++ ){
	console.log(i1);
	for(var i2 = i1; i2<inputArray.length; i2++){
		for(var i3 = i2; i3<inputArray.length; i3++){
			var zahl1 = Number(inputArray[i1]);
			var zahl2 = Number(inputArray[i2]);
			var zahl3 = Number(inputArray[i3]);
			//if(zahl1 == zahl2) continue;
			var summe = zahl1 + zahl2 + zahl3;
			if(summe == 2020){
				array.push(zahl1);
				array.push(zahl2);
				array.push(zahl3);
				product = zahl1 * zahl2*zahl3;
			}
		}
	}
}

console.log(array);
console.log(product);
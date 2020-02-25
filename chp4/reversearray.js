// Will start this exercise on 24/02/20
/*
For the reverseArray function, we want to make a 
new array that contains the array's elements but 
in reverse
*/
function reverseArray(array){
	let arrayReversed = [];
	for (let i = 0; i < array.length; i++){
		arrayReversed.unshift(array[i]);
	}
	return arrayReversed;
}

console.log(reverseArray(["A", "B", "C"]))

/*
The reverseArrayInPlace just modifies the array
such that it becomes reversed, 
Note: Use swap whilst looping through 
half the array, use Math.floor when rounding.
Search swap in js. 
*/
let arrayValue = ["ME", "ITS", "HI"];
reverseArrayInPlace(arrayValue);
function reverseArrayInPlace(array){
	// Create a local temp binding 
	let temp = 0;
	for (let i = 0; i <= Math.floor(array.length/2); i++){
		temp = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = temp;
	}
	return array;
}
console.log(arrayValue);


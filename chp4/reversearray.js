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
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
function reverseArrayInPlace(array){
	let j = array.length;
	for (let i = 0; i <= array.length; i++){
		array[i] == array[j];
		j--;
	}
	return array;
}
console.log(arrayValue);


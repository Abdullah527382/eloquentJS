/*
Created by Abdullah Ahmed 22/02/2020

Includes a range function which takes 3 arguments;
Start, end, step. Returns array containing all numbers
from start upto (including) end. The step argument, that
changes the incremental behaviour, otherwise if no 
step argument is given, increment by 1.

Includes a sum function which takes an array and returns 
the sum of the number. 

Negative steps will usually always be placed when 
start > end, thus just take the absolute value. 

There is another way to wrute the function with let and of 
but I will stick to my current method. For the time being

*/


function range(start, end, step){
	let array = [];
	if (step == undefined) step = 1;
	if (end >= start){
		for (let i = start; i <= end; i+=Math.abs(step)){
			array.push(i);
		}
	} else {
		for (let i = end; i <= start; i+=Math.abs(step)){
			array.unshift(i);
		}
	}
	return array;
}
console.log(range(10,2,2));

function sum (array){
	let sum = 0, i = 0;
	for (let num of array){
		sum += array[i]; 
		i++;
	}
	return sum;
} 
console.log(sum(range(10,2,2)));

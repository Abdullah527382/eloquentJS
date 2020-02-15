/* 
Defining a function:
This is a regular binding where the value 
of the binding is a function, look at eg.1
*/
// eg.1
 const square = function(x){
 	return x * x;
 };
 console.log(square(12)); // -> 144

 /*
 Function is created with keyword: function
 and its sets of parameters, in this case: x
 and body (wrapped in braces).
 Function parameters can be none to multiple
 eg.2 down below 
 */
// eg.2 
// No parameters
const makeNoise = function(){
	console.log("ROAR");
}
makeNoise(); // -> ROAR
// Multiple parameters 
const power = function(base, exponent){
	let result = 1;
	for (let count = 0; count < exponent; count++){
		result *= base;
	}
	return result;
}
console.log(power(2,10));


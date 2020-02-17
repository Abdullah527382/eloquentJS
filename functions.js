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

/*
Bindings and scopes:
Scope : part of program where binding is visible
Eg. bindings outside of any function/block is 
a global (scope = whole program)
Bindings in function parameters can only be 
referenced in that function (local bindings), 
bindings (let, const) are local to their block
--> See eg.3 below 
 */

// eg.3 
let x = 10;
if(true){
	let y = 1;
	var z = 2;
	console.log(x + y + z); //--> 60
} // y not visible here 
console.log(x + z); //--> 40

/*
When multiple bindings have the same name 
code can only see the innermost one 
 */

/* 
Function declarations: 
-Preceding code will work even though a 
 function may be defined below it 
*/
 function square (x) {
 	return x*x;
 }

 /*
Arrow functions: 
Used instead of function keyword, it uses an arrow
=> (not to be confused with >=), this comes after 
the list of parameters 
-When there is a single parameter name, you can omit 
brackets around the parameter list. 
-When there is no parameters, use empty set of brackets 
// yeh
  */

// eg.(s)
const square1 = x => x*x; //This works fine

const horn = () => {
	console.log("TOOT");
};

const power = (base, exponent) => {
 	let result = 1;
 	for (let count = 0; count < exponent; count++){
 		result *= base;
 	}
 	return result;
 };


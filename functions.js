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
 function square1 (x) {
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
  */

// eg.(s)
const square2 = x => x*x; //This works fine

const horn = () => {
	console.log("TOOT");
};

const power1 = (base, exponent) => {
 	let result = 1;
 	for (let count = 0; count < exponent; count++){
 		result *= base;
 	}
 	return result;
 };

/* 
The call stack:
-A function has to jump back to the place which called 
it when it returns (computer remembers the context)
-The place of this context is called the call stack, 
current context is stored on top of stack everytime 
a function is called.
-When a function returns, it removes top context 
and used it for execution. 
*/

/* 
Note: JS is extremely broad-minded such that if 
you pass too many arguments in a function, it will 
ignore the extra arguments, as such when it doesnt 
enough functions, it places them undefined. 
*/

/* eg. this version of power makes 2nd argument 
optional, otherwise defaulting to 2
*/

function power2(base, exponent){
	let result = 1;
	for (let count = 0; count < exponent; count++){
		result *= base;
	}
	return result;
}

console.log(power(4)); //  16
console.log(power(2,6)); // 64

/* 
Closure:
Note: Local bindings are re-created every time a 
function is called, but what happens when the 
function call (that created them) is no longer active? 
*/

//eg.
function wrapValue(n){
	let local = n;
	return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1()); // 1
console.log(wrap2()); // 2
/* 
Notes: 
This works and both instances of bindings are still
accessible, this feature is called "closure" (a function 
references bindings from local scopes around it)
*/

//eg. 
function multiplier(factor){
	return number => number*factor;
}

let twice = multiplier(2);
console.log(twice(5));
// 10

/* 
In this example, multiplier is called and creates 
an environment in which factor parameter = 2, the
function value it returns, stored in twice, remembers
the environment. So when it is called, it multiplies 
the argument by 2. 
*/

/* 
Recursion: 
A function that calls itself = recursive
Puzzle - write a function starting at 1, by 
repeatedly adding 5 or multiplying 3, finds 
sequence of these operations. i.e 13 = 
((1*3) + 5 + 5): 
*/

function findSol(target){
	function find(current, history){
		if (current == target){
			return history;
		} else if (current > target) {
			return null;
		} else {
			return find(current + 5, 
				 `(${history} + 5)` ) || 
				     find(current * 3, 
				 `(${history} * 3)`);

		}
	}
	return find(1, "1");
}

console.log(findSol(13));

/*
Growing functions: 
Write a program that prints 2 numbers, no. of
cows and chickens on a farm with the words:
cows and chickens after them and 0's padded
before both numbers i.e.
007 Cows
011 Chickens
*/

function printFarm(cows, chickens){
	let cowString = String(cows);
	while (cowString.length < 3){
		cowString = "0" + cowString;
	}
	console.log(`${cowString} Cows`);
	//repeat for chickens
	let chickString = String (chickens);
	while (chickString.length < 3){
		chickString = "0" + chickString;
	}
	console.log(`${chickString} Chickens`);
}
printFarm(7,11);

// We can print our 0 padding seperately:

function zeroPad(number, width){
	let string = String(number);
	while (string.length < width){
		string = "0" + string;
	}
	return string;
}

function printFarmInventory(cows, chickens){
	console.log(`${zeroPad(cows, 3)} Cows`);
	console.log(`${zeroPad(chickens, 3)} Chickens`);
}
printFarmInventory(7,16);

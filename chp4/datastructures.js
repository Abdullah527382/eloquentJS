/*
Data sets:
To work with digital data, consider a collection of 
numbers: 2,3,5,7,11, JS provides a specific data type:
Called an array (shown below)
*/

let listOfNumbers = [2,3,5,7,11];
console.log(listOfNumbers[2]); // -> 5
console.log(listOfNumbers[0]); // -> 2
console.log(listOfNumbers[2-1]); // -> 3

/*
Properties:
Almost all JS values have properties, exceptions are:
null and undefined.
2 main ways to access properties: value.x and value[x].
- value.x fetches property of value named 'x'
- value[x] evaluates expression x and uses result 
Notes:
Property names are strings, eg. if you want to access 
a property named 2 or john, use square brackets:
value[2] or value["john"]
*/

/*
Methods:
Both string and array values contain numerous properties 
holding function values, i.e. every string contains 
a "toUpperCase" property (returns a copy of strings
in which all letters converted to upper case)
*/

let wor = "SsomEbody once told me"
console.log(typeof wor.toUpperCase);
// function 
console.log(wor.toUpperCase());
// output

/*
Properties that contain functions are called methods
of the value thye belong to, i.e toUpperCase is a 
method of a string
- The below example demostrates 2 ways you can use to
manipulate arrays:
*/

let sequence = [1,2,3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// -> [1,2,3,4,5]
console.log(sequence.pop()); // 5
console.log(sequence); // 1,2,3,4

/*
- push method adds values to end of array
- pop returns last value after removing it 
- Both these silly names are traditional terms 
 for a stack (data structure allows you to push 
 values and pop them out again) --> thing that 
 was last added is removed first. 
*/

/*
Objects:
Values of type object are arbitrary collections
of properties, uses braces:
Everything inside is seperated by commas, each
property has a name followed by a colon
Think of objects like an octopus with any number 
of tentacles, each tetacle has a name tattooed on it

*/
let day1 = {
	squirrel: false,
	events: ["work", "ate food", "pizzatime", "ran"]
};
console.log(day1.squirrel); //false 
console.log(day1.wolf); //undefined
day1.wolf = false;
console.log(day1.wolf); // false
/*
Delete operator cuts off a tentacle
*/
let anObject = {left:1, right:2};
console.log(anObject.left); // 1
delete anObject.left;
console.log(anObject.left); // undefined

/* The binary 'in' operator, when applied 
to a string, tells you whether that object 
has a property with that name, returns true 
or false 
*/
console.log("left" in anObject); // false 
/*
Object.keys returns an array of strings-
the object's property names:
*/
console.log(Object.keys({x:0, y:0, z:2}));
// -> ["x", "y", "z"]

/*
Object.assign function copies all properties 
from 1 object to another:
*/

let objectA = {a:1,b:2};
Object.assign(objectA, {b:3, c:4});
console.log(objectA); // a:1,b:3,c:4

/*
Hence, think of arrays as long, flat octopuses, 
with all tentacles in neat row, labeled numbers
*/

let journal = [
	{events: ["work", "touch tree", "pizzatime", 
		"running", "crying"] 
	squirrel: false}, 
	{events: ["weekend", "cycling", "break", \
		"pepsi"]
	squirrel: true}, 
	/* and so on ...*/
];
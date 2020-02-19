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
	{events: ["weekend", "cycling", "peanuts", \
		"pepsi"]
	squirrel: true}, 
	/* and so on ...*/
];

/*
Mutability: Object values can be modified, types of 
values: numbers, strings, booleans are immutable. 
i.e. if you have string "cat", other code cant change 
the string to spell "rat". 
Objects works differently, you can change their
properties 

*/

let obj1 = {value:10};
let obj2 = obj1;
let obj3 = {value:10};

console.log(obj1 == obj2); // true 
console.log(obj1 == obj3); // false

obj1.value = 15;
console.log(obj2.value); // 15

/*
Note: const binding to object itself 
cannot be changed
*/
const score = {visitors:0,home:0};
score.visitors = 1; //works 
score ={visitors:1, home:1}; //not allowed 


/*
The lycanthrope’s log
Jack starts his JS interpreter and sets up an
environment: 
*/

let journal = [];
function addEntry(events, squirrel){
	journal.push({events, squirrel});
}

/*
Note: Obect added in journal is a tad weird
It just gives a property name instead of:
declaring properties -> events: events
This is shorthand, If a property name in brace 
notation isnt followed by a value, its value is 
taken from the binding with same name
*/

/*
Every evening at 10pm, he records the day,  ater 
we want to see the correlation between pizza and
squirrelification, we essentially make a 2x2 table
with outcomes as: 00, 01, 10, 11
*/

addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);

/*
Computing correlation: a 2x2 table in JS can be 
simply represented by with a 4 element array:
([76, 9, 4, 1]), we interpret these as 2 bit 
numbers, i.e. 10 represents evenys jack turning 
into squirrel (1) and not eating pizza (0), 
this happened 4 times thus we store this at 
index 2 of the array 
*/

/*
Here is a function computing phi coefficient
from the array:
*/

function phi(table){
	return (table[3]*table[0] - table[2])*table[1]/
		Math.sqrt((table[2] + table[3]) *
				  (table[0] + table[1]) *
				  (table[1] + table[3]) *
				  (table[0] + table[2]))
}

console.log(phi([76, 9, 4, 1])); // --> 0.068599434

/*
Jack kept his journal for 3 months, we have to analyse 
the data set. To extract a 2x2 table for a specific 
event, we should loop over all entries and keep 
a tally of frequency of squirrelifications.
*/

function tableFor(event, journal){
	let table = [0,0,0,0];
	for (let i = 0; i < journal.length; i++){
		let entry = journal[i], index = 0;
		if (entry.events.includes(event)){
			index += 1;
		}
		if (entry.squirrel) index += 2;
		table[index] += 1;
	}
	return table; 
}

console.log(tableFor("pizza", JOURNAL)); //→[76, 9, 4, 1]

/*
Arrays have an 'includes' method that check whether a 
given value exists in an array
The function uses that to check whether the certain
event is part of event list for the day.
The body of loop: 
- Figures out which box in the table each journal entry
  falls into (by checking entry if it contains specific
  event and if it occurs with squirrelification), the 
  loop then adds 1 to correct box. 

*/ 

/*
We need find a correlation for every type of event,
not just individual correlations as shown above. 
Array Loops:
In the tableFor function, there's a loop like this:
It runs a counter over length.array 
*/

for (let i = 0; i < JOURNAL.length; i++){
	let entry = JOURNAL[i];
	// Do something with entry
}

// This is written simpler below:
for (let entry of JOURNAL){
	console.log(`${entry.events.length} events.`)
}

/*
The word 'of' after a variable definition, will
make it loop over the elements of value given after 
'of' i.e JOURNAL, this also works for strings and
some other data structures
*/

/*
Final analysis: 
- We now need to compute correlation for every 
type of event that occurs in a data set, hence 
we need to find every type of event:
*/

function journalEvents(journal){
	let events = [];
	for (let entry of journal){
		for (let event of entry.events){
			if (!events.includes(event)){
				events.push(event);
			}
		}
	}
	return events;
}
console.log(journalEvents(JOURNAL));
// → ["carrot", "exercise", "weekend", "bread", …]

/*
Now this function collects every type of event, we can 
now see the correlations
*/

for (let event of journalEvents(JOURNAL)){
	console.log(event + ":", phi(tableFor(event, 
		JOURNAL)));
}
// → carrot:   0.0140970969
// → exercise: 0.0685994341
// → weekend:  0.1371988681
// → bread:   -0.0757554019
// → pudding: -0.0648203724
// and so on...
/*
All of there are very close to 0, hence useless
let's filter results for 0.1 < x < -0.1

*/

for (let event of journalEvents(JOURNAL)){
	let correlation = phi(tableFor(event, JOURNAL));
	if (correlation > 0.1 || correlation < -0.1){
		console.log(event + ":", correlation);
	}
}

// → weekend:        0.1371988681
// → brushed teeth: -0.3805211953
// → candy:          0.1296407447
// → work:          -0.1371988681
// → spaghetti:      0.2425356250
// → reading:        0.1106828054
// → peanuts:        0.5902679812

/*
We see positive correlation with peanuts and less
with brushig teeth, so lets try this:
*/

for (let entry of JOURNAL){
	if(entry.events.includes("peanuts") &&
	  !entry.events.includes("brushed teeth")){
		entry.events.push("peanut teeth");
	}
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));
/*
The phenomenon occurs precisely when Jacques eats 
peanuts and fails to brush his teeth
*/

/*
Further arrays: 
 - unshift and shift add/remove things at start of array
   as opposed to push/pop (end of an array)
 - 
*/
let todolist = [];
function remember(task){
	todolist.push(task);
}
function getTask(){
	return todolist.shift();
}
function rememberUrgent(task){
	todolist.unshift(task);
}

/*
We call getTask() to get and remove task front item, 
similarly rememberUrgent() adds task to the front 
*/

/*
Note: 
- to SEARCH for a specific value, use indexOf()
- this is specific to arrays
- returns index at which the requested value was 
  found, otherwise -1 if wasnt found 
- to search from end instead of start: do 
  lastIndexOf()
*/

console.log([1,2,3,2,1].indexOf(2)); // 1
console.log([1,2,3,2,1].lastIndexOf(2)); // 3

/*
Note:
- consider an array method: slice which takes 2 
  arguments: start,end and returns the array between 
  them
- start index = inclusive, end index = exclusive
- if start index not given, returns all elements 
  after start index
*/

console.log([0,1,3,4,5].slice(2,4)); // [2,3]
console.log([0,1,2,3,4,5].slice(2))l // [2,3,4,5]

/*
concat method: 
- glues arrays together similar to + operator for 
  strings, lets apply glue and concat together
*/

function remove(array,index){
	return array.slice(0, index)
		.concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"]),2);
// → ["a", "b", "d", "e"] 

/*
strings and their properties:
- both indexOf and slice are quit useful methods
- a string's indexOf can search for a string 
  containing more than 1 letter eg. below 
- the trim method removes whitespaces(spaces, \n, etc.)
- padStart: takes the desired length and padding 
  character as arguments (last chp)
- split: splits string (every occurence of another string
, join: joins string
*/
console.log("one two three".indexOf("ee")); //11
console.log(String(6).padStart(3,"0")); // 006
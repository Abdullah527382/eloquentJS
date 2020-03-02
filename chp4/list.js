/*
Program created by Abdullah Ahmed 
Started on: 25/02/2020

Write a function arrayToList that builds up a list 
structure like the one shown when given [1, 2, 3] as
argument. Also write a listToArray function that 
produces an array from a list. Then add a helper 
function prepend, which takes an element and a list and 
creates a new list that adds the element to the front 
of the input list, and nth, which takes a list and a 
number and returns the element at the given position 
in the list (with zero referring to the first element) 
or undefined when there is no such element.
*/
let list = {
	value: 0,
	rest: null
} 
// Builds a list from a given array
function arrayToList(array){

	for (let i = array.length; i >= 0; i--){
		X = array[i];
		list = {value: X, rest: list}
		}
	return list;
}
console.log(arrayToList([10,20,30,40,50,60]))
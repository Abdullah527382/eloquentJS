
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
console.log(range(5,2,-1));

function sum (array){
	let sum = 0, i = 0;
	for (let num of array){
		sum += array[i]; 
		i++;
	}
	return sum;
} 
console.log(sum(range(5,2,-1)));

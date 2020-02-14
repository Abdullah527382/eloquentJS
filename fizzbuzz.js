// Print numbers from 1 - 100
// If they are divisible by 3, print Fizz 
// If they are divisible by 5 and not 3, print Buzz
// If Diviisble by both, print fizzbuzz 

// 14/2/2020, created by Abdullah Ahmed 

let i = 0;
while (i <= 100){
	if (i % 3 == 0){
		if (i % 5 == 0){
			console.log("FizzBuzz");
		} else {
			console.log("Fizz");
		}	} 
	else if (i % 5 == 0){
		if (i % 3 == 0){
		console.log("FizzBuzz");
		} else {
			console.log("Buzz");
		}
	} else {
		console.log(i);
	}
	i++;
}
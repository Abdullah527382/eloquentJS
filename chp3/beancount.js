function countBs(string){
	let i = 0, count = 0;
	while (i <= string.length - 1){
		if (string[i] == "B"){
			count ++;
		}
		i++;
	}
	return count;
}

function countChar(string, char){
	let i = 0, count = 0;
	while (i <= string.length - 1){
		if (string[i] == char){
			count ++;
		}
		i++;
	}
	return count;
}
console.log(countBs("BOBIB"));
console.log(countChar("kakkarlak", "k"));
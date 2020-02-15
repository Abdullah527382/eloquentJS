// Prints a chessboard of variable size defined by user
// 14/02/2020, created by Abdullah Ahmed 

let y = 0, x = 0, even = " #", odd = "# ";
var size = 10;
while (y < size){
	// Every even row 
	if (y % 2 == 0){
		console.log(even.repeat(size/2));
	// Every odd row 
	} else {
		console.log(odd.repeat(size/2));
	// Every odd column 	
	}
	y++;
}

//SHSNDKDNKD
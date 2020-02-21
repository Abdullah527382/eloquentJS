function isEven(int){
	if (int < 0){
		int = (-1)*int;
	}
	while (int >= 0) {
		if (int == 0){
		return "true";
		break; 
		} 
		else if (int == 1){
		return "false";
		break;	
		}
		int = int - 2;
	} 
	 
}
console.log(isEven(2));
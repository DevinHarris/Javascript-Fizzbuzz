for(var i = 0; i <= 100; i++) {
	if (i % 3 === 0) {
		console.log("Fizz");
	} if (i % 5 === 0) {
		console.log("Buzz");
	} if (i % 15 === 0) {
		console.log("Fizzbuzz");
	}
}

/* function Fizzbuzz(toNum) {
	var result = '';
	for (var num = 0; num <= toNum; num++) {
		if (num % 3 === 0 ) {
			result += "Fizz";
		} if (num % 5 === 0) {
			result += "Buzz";
		}

		console.log(result || num);
	}
} */


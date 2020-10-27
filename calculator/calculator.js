function add (a, b) {
	let result = a + b;
	return result;
}

function subtract (a, b) {
	let result = a - b;
	return result;
}

function sum (arr) {
	let result = 0;
	if(arr.length !== 0) {
	return result =	arr.reduce((acc, curr) => acc += curr, 0);
	}
	return result;
	
}

function multiply (arr) {
	
	if(arr.length !== 0) {
	let result = arr.reduce((acc, curr) => acc *= curr, 1);
	return result;
	} else {
		return 0;
	}
}

function power(a, b) {
	let result = 1;
	for (let i = 1; i <= b; i++) {
		result *= a;
	}
  return result;
}

function factorial(n) { 
	let result
	if (n <= 1) {
		return 1;
	} else {
	return n * factorial(n-1);
    }
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
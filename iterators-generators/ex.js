var numbers = {
	*[Symbol.iterator]() {
		for (let i = 0; i <= 0; i++ ) {
			yield i;
		}
	}
};

// should print 0..100 by 1s
for (let num of numbers) {
	console.log(num);
}

// // should print 6..30 by 4s
// console.log("My lucky numbers are: ____");

// // Hint:
//     [...numbers[Symbol.iterator]( ?? )]

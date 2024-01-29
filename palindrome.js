//Palindrome Number
//An integer is said to be a palindrome number
//when it is same read forward and backward

// Eg: Input : x= 76567 ------ Output: true
// Eg: Input : x= 25637 ------ Output: false

const isPalindrome = function (x) {
	if (x < 0) return false;
	else
		return (
			x ===
			+x.toString().split("").reverse().join("")
		);
};

const result = isPalindrome(25637);
console.log(result);

function nextPalindrome(num) {
  //your JS code heree
  let i = num+1;
	while(!checkPalindrom(i)){
	    i++;
	}
	return i;
}

function checkPalindrom(num) {
	let newStr = String(num).split("").reverse().join("");
	if(num==newStr){
		return true;
	}
	return false;
}

const input = prompt("Enter a palindrome number");
alert(nextPalindrome(input));

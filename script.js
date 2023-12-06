// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// click generate -> prompts for criteria
// at least 8 characters, no more than 128

// confirm include lowercase?
let lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
console.log(lowercase.length)

// confirm include uppercase
let uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
console.log(uppercase.length)

// confirm include numbers
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
console.log(numbers.length)

// confirm include special characters
let specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
console.log(specialChar.length)


// store ^
// input should be validated and at least one character type should be selected

// prompts are answered -> password generated to match criteria
// password displayed in alert or written to page



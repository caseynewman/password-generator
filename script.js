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





const generatePassword = () => {
  let password = ('');

let hasSpecial = confirm("Would you like to include special characters?");
let hasNumber = confirm("Would you like to include numbers?");
let hasUppercase = confirm("Would you like to include uppercase letters?");
let hasLowercase = confirm("Would you like to include lowercase letters?");
let numOfCharacters = prompt("How many characters would you like your password to be? It must be between 8 and 128.");

if (numOfCharacters < 8 || numOfCharacters > 128) {
  alert("Your password must be between 8 and 128 characters in length.");
} else if (hasSpecial === false && hasNumber === false && hasUppercase === false && hasLowercase === false) {
  alert("Your password must include at least one special character, number, uppercase letter, or lowercase letter.")
} else {
  alert("Thank you! Your password will appear on the browser!");
}

let lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
let pwLength = [''];


for (let i = 0; i < numOfCharacters; i++) {
  
}


  //hasSpecial
  //hasNumber
  //hasUppercase
  //hasLowercase

  //prompt user for special
  //if yes hasSpecial = true



  //generate password

}

// click generate -> prompts for criteria
// at least 8 characters, no more than 128


// let password = ['lowercase', 'uppercase', 'numbers', 'special'];

let min = 8;
let max = 128;

let password = Math.floor(Math.random) * (max - min)



// store ^
// input should be validated and at least one character type should be selected

// prompts are answered -> password generated to match criteria
// password displayed in alert or written to page
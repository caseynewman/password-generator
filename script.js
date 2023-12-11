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
  let finalPassword = '';


let hasSpecial = confirm("Click OK if you would like to include special characters.");
let hasNumber = confirm("Click OK if you would like to include numbers.");
let hasUpper = confirm("Click OK if you would like to include uppercase letters.");
let hasLower = confirm("Click OK if you would like to include lowercase letters.");
let pwLength = prompt("How many characters would you like your password to be? It must be between 8 and 128.") * 1;


const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const special = "!@#$%^&*()+-./:;<=>?[]_`{|}~')";


if (pwLength < 8 || pwLength > 128) {
  alert("Your password must be between 8 and 128 characters in length.");
  return finalPassword;
} else if (hasSpecial === false && hasNumber === false && hasUpper === false && hasLower === false) {
  alert("Your password must include at least one special character, number, uppercase letter, or lowercase letter.");
  return finalPassword;
} else {
  alert("Thank you! Your password is generating!");
}


let charPool = '';

if(hasSpecial) {
  charPool = special + charPool;
}

if(hasNumber) {
  charPool = numbers + charPool;
}

if(hasUpper) {
  charPool = uppercase + charPool;
}

if(hasLower) {
  charPool = lowercase + charPool;
}

for (let i = 0; i < pwLength; i++) {
  finalPassword += charPool.charAt(Math.floor(Math.random() * charPool.length))
}

return finalPassword

}
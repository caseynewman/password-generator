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
} else if (hasSpecial === false && hasNumber === false && hasUpper === false && hasLower === false) {
  alert("Your password must include at least one special character, number, uppercase letter, or lowercase letter.")
} else {
  alert("Thank you! Your password is generating!");
}


if (hasSpecial && hasNumber && hasUpper && hasLower) {
  let charPool = (special + numbers + uppercase + lowercase);

  for (let i = 0; i < pwLength; i++) {
    finalPassword += charPool.charAt(Math.floor(Math.random() * charPool.length))
  }

return finalPassword

}

if(hasSpecial && hasNumber && hasUpper && !hasLower) {
  return (special + numbers + uppercase);

}

// if(hasSpecial && hasNumber && !hasUpper && hasLower) {

// }

// if(hasSpecial && !hasNumber && hasUpper && hasLower) {

// }

// if(!hasSpecial && hasNumber && hasUpper && hasLower) {

// }

// if(hasSpecial && hasNumber && !hasUpper && !hasLower) {

// }

// if(hasSpecial && !hasNumber && !hasUpper && !hasLower) {

// }

// if(!hasSpecial && !hasNumber && !hasUpper && hasLower) {

// }

// if(hasSpecial && !hasNumber && !hasUpper && hasLower) {

// }

// if(!hasSpecial && !hasNumber && hasUpper && hasLower) {

// }

// if(!hasSpecial && hasNumber && !hasUpper && hasLower) {

// }

// if(!hasSpecial && hasNumber && hasUpper && !hasLower)




// for (let i = 0; i < pwLength; i++) {

// }


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


//'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
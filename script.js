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
}

if(hasSpecial && hasNumber && hasUpper && !hasLower) {
  let charPool = (special + numbers + uppercase);
  for (let i = 0; i < pwLength; i++) {
    finalPassword += charPool.charAt(Math.floor(Math.random() * charPool.length))
  }
}

if(hasSpecial && hasNumber && !hasUpper && hasLower) {
  let charPool = (special + numbers + lowercase);
  for (let i = 0; i < pwLength; i++) {
    finalPassword += charPool.charAt(Math.floor(Math.random() * charPool.length))
  }
}

if(hasSpecial && !hasNumber && hasUpper && hasLower) {
  let charPool = (special + uppercase + lowercase);
  for (let i = 0; i < pwLength; i++) {
    finalPassword += charPool.charAt(Math.floor(Math.random() * charPool.length))
  }
}

if(!hasSpecial && hasNumber && hasUpper && hasLower) {
  let charPool = (numbers + uppercase + lowercase);
  for (let i = 0; i < pwLength; i++) {
    finalPassword += charPool.charAt(Math.floor(Math.random() * charPool.length))
  }
}

if(hasSpecial && hasNumber && !hasUpper && !hasLower) {
  let charPool = (special + numbers);
  for (let i = 0; i < pwLength; i++) {
    finalPassword += charPool.charAt(Math.floor(Math.random() * charPool.length))
  }
}

if(hasSpecial && !hasNumber && hasUpper && !hasLower) {
  let charPool = (special + uppercase);
  for (let i = 0; i < pwLength; i++) {
    finalPassword += charPool.charAt(Math.floor(Math.random() * charPool.length))
  }
}

if(hasSpecial && !hasNumber && !hasUpper && hasLower) {
  let charPool = (special + lowercase);
  for (let i = 0; i < pwLength; i++) {
    finalPassword += charPool.charAt(Math.floor(Math.random() * charPool.length))
  }
}

if(!hasSpecial && hasNumber && hasUpper && !hasLower) {
  let charPool = (numbers + uppercase);
  for (let i = 0; i < pwLength; i++) {
    finalPassword += charPool.charAt(Math.floor(Math.random() * charPool.length))
  }
}

if(!hasSpecial && hasNumber && !hasUpper && hasLower) {
  let charPool = (numbers + lowercase);
  for (let i = 0; i < pwLength; i++) {
    finalPassword += charPool.charAt(Math.floor(Math.random() * charPool.length))
  }
}

if(!hasSpecial && !hasNumber && hasUpper && hasLower) {
  let charPool = (uppercase + lowercase);
  for (let i = 0; i < pwLength; i++) {
    finalPassword += charPool.charAt(Math.floor(Math.random() * charPool.length))
  }
}

if(hasSpecial && !hasNumber && !hasUpper && !hasLower) {
  let charPool = (special);
  for (let i = 0; i < pwLength; i++) {
    finalPassword += charPool.charAt(Math.floor(Math.random() * charPool.length))
  }
}

if(!hasSpecial && hasNumber && !hasUpper && !hasLower) {
  let charPool = (numbers);
  for (let i = 0; i < pwLength; i++) {
    finalPassword += charPool.charAt(Math.floor(Math.random() * charPool.length))
  }
}

if(!hasSpecial && !hasNumber && hasUpper && !hasLower) {
  let charPool = (uppercase);
  for (let i = 0; i < pwLength; i++) {
    finalPassword += charPool.charAt(Math.floor(Math.random() * charPool.length))
  }
}

if(!hasSpecial && !hasNumber && !hasUpper && hasLower) {
  let charPool = (lowercase);
  for (let i = 0; i < pwLength; i++) {
    finalPassword += charPool.charAt(Math.floor(Math.random() * charPool.length))
  }
}


return finalPassword

}
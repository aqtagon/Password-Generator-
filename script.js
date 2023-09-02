// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = prompt("Enter password length (between 8 and 128 characters);");

  if (!passwordLength || isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid paswword length between 8 and 128 characters.");
    return "";
  }
}

var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChars = "0123456789";
var specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");


// TODO: Generate a generatePassword function and the logic associated
function generatePassword() {
  // this is the function scope (or where the logic lives in this function)
  var newPassword = "";
  var lowercaseStr = 'abcdefghijk...';

  // we prompt the USER for data
  var passwordLength = prompt("How long would you like your password to be?")
  console.log("User Input: ", passwordLength)
  console.log("Input data type: ", typeof passwordLength)

  //  var inputNumber = parseInt(passwordLength);
//  console.log("Convert to Number: ", inputNumber)
//  console.log("Input data type: ", typeof inputNumber)

  // Let's VALIDATE the user input
  if(passwordLength < 8) {
    alert("The password length needs to be at least 8 characters")
  } else if(passwordLength > 128) {
    alert("The password length needs to be 128 or less characters")
  }

  // ask the user for valid dataset to use for password (confirm)
  var lowercaseConfirm = confirm("Do you want lowercase characters in your password?")
  console.log("User entered: ", lowercaseConfirm);
// BASED on the USER INPUT what do we want to do?

  if(lowercaseConfirm == 'true') {
    console.log("lowercase");
  } else {
    console.log("not lowercase")
  }

  // we run logic on that data



  // we add new characters to our newPasswrod varaiable

  // we RETURN the VALUE (of the new Password)
  return newPassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordtext = document.querySelector("#password");

// TODO: Generate a generatePassword function and the logic associated
function generatePassword() {
  // this is the function scope (or where the logic lives in this function)
  var lowercaseStr = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric      = "1234567890"
  var specialcharacters = "!@#$%^&*()+?"

  

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

  var uppercaseConfirm = confirm("Do you want uppercase characters in your password?")
  console.log("User entered: ", uppercaseConfirm);

  if(uppercaseConfirm == 'true') {
    console.log("uppercase");
  } else {
    console.log("not uppercase")
  }

  var numericConfirm = confirm("Do you want numeric characters in your password?")
  console.log("User entered: ", numericConfirm);

  if(numericConfirm == 'true') {
    console.log("numeric");
  } else {
    console.log("not numeric")
  }

  var specialcharactersConfirm = confirm("Do you want special characters in your password?")
  console.log("User entered: ", specialcharactersConfirm);

  if(specialcharactersConfirm == 'true') {
    console.log("special");
  } else {
    console.log("not special")
  }
 

var password = ""

if (lowercaseConfirm || uppercaseConfirm || numericConfirm || specialcharactersConfirm) {

    i= 0  ;       
while (i < passwordLength){
    if (i < passwordLength && lowercaseConfirm){var getRandomLowerCase = Math.floor(Math.random() * lowercaseStr.length);
        password = password + lowercaseStr[getRandomLowerCase]; i++ ;} 
    
    if (i < passwordLength && uppercaseConfirm){var getRandomupperCase = Math.floor(Math.random() * uppercaseStr.length);
        password = password + uppercaseStr[getRandomupperCase]; i++ ;} 
        
    if (i < passwordLength && numericConfirm){var getRandomnumeric = Math.floor(Math.random() * numeric.length);
            password = password + numeric[getRandomnumeric]; i++ ;} 
              
    if (i < passwordLength && specialcharactersConfirm){var getRandomspecial = Math.floor(Math.random() * specialcharacters.length);
        password = password + specialcharacters[getRandomspecial]; i++ ;} 
 }

}
else {
  alert("You must select one character type")
}



  
  // we RETURN the VALUE (of the new Password)
  return password
}


// Write password to the #password input
function writePassword(password) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

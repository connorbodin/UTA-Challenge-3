// // Assignment Code
// var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('password');

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

  // }
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
  var num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  var max_count = 5;
  var confirmChar = '';
  var confirmUpper = '';
  var confirmLower = '';
  var confirmSpecial = '';
  var confirmNum = '';
  //  Add event listener to generate button
  // generateBtn.addEventListener("click", writePassword);

  function generatePassword() {
    //    must return a string value that is the password
    //    prompt user to choose num btwn 8 -128
    var confirmChar = prompt('Please select a numerical value between 8 and 128');

    while (confirmChar <= 7 || confirmChar >= 129 || null === true || '' === true) {
      alert('Password length must be between 8 and 128, please try again!');
      var confirmChar = prompt('Please select a numerical value between 8 and 128');
    }
    console.log(confirmChar); {

    }
    alert("You chose " + confirmChar + " number of charactlers! Cool cool, lets create a password with " +confirmChar + ' characters!')

    var confirmUpper = prompt('Would you like upper case letters? y/n?', 'y/n');
    var confirmLower = prompt('Would you like lower case characters?', 'y/n');
    var confirmSpecial = prompt('Would you like special characters?', 'y/n')
    var confirmNum = prompt('Would you like numbers?', 'y/n');


  

    //   var to save length
    //  validate user number
    // confirm user upper, lower, num, special characters - 4 confirm prompts
    //   4 vars to safe T / F to included characters 
    //  Vars that include all user options of each category.array of string for each category
    //  EX.var upper = ['A' 'B']
    //   if user says yes to include that category choose random elements from the array 
    //   How to decide how many elements to choose from each array 
    //   validate that atleast one cat was chosen
    //   if x is true do this if x and x is true do this is x is true and y is false do this
    //   join chosen elements into a string
    //   console log every variable based on user input

    //   return passwordString;

    console.log(upperCase);
    console.log(specialChar);
    console.log(lowerCase);
    console.log(num);
    console.log(confirmChar);
    console.log(confirmUpper);
    console.log(confirmLower);
    console.log(confirmNum);


  }

writePassword();



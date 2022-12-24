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
  // combines all arrays 
  var allArray = upperCase.concat(lowerCase, num, specialChar);

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('password');

  // passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

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
  alert("You chose " + confirmChar + " number of charactlers! Cool cool, lets create a password with " +confirmChar + ' characters!');

  function askUpper () {
    var confirmUpper = prompt('Would you like upper case characters?', 'y/n');
    confirmUpper = confirmUpper.toLowerCase();

  if (confirmUpper == 'y'){
    alert('You chose ' +confirmUpper + '. We will include upper case characters!');
    console.log(confirmUpper);
  } else if (confirmUpper == 'n') {
    alert('You chose ' +confirmUpper + '. We wont inclue upper case characters!');   
    console.log(confirmUpper);
  } else {
  alert('You didnt select a valid option of y or num, please select y or n!');
  askUpper(); 
  }

}
askUpper();

function askLower() {
  var confirmLower = prompt('Would you like upper case characters?', 'y/n');
  confirmLower = confirmLower.toLowerCase();

if (confirmLower == 'y'){
  alert('You chose ' +confirmLower + '. We will include lower case characters!');
  console.log(confirmLower);
} else if (confirmLower == 'n') {
  alert('You chose ' +confirmLower + '. We wont inclue lower case characters!');   
  console.log(confirmLower);
} else {
alert('You didnt select a valid option of y or num, please select y or n!');
askLower(); 
}
}

askLower();

function addNumbers() {
  var num = prompt('Would you like numbers? ', 'y/n');
  num = num.toLowerCase();

if (num == 'y'){
  alert('You chose ' +num + '. We will include numbers!');
  console.log(num);
} else if (num == 'n') {
  alert('You chose ' +num + '. We wont include numbers!');   
  console.log(num);
} else {
alert('You didnt select a valid option of y or n, please select y or n!');
addNumbers(); 
}
}

addNumbers();

  // var confirmLower = prompt('Would you like lower case characters?', 'y/n');
  // var confirmSpecial = prompt('Would you like special characters?', 'y/n')
  // var confirmNum = prompt('Would you like numbers?', 'y/n');




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
}

var allArray = upperCase.concat(lowerCase, num, specialChar);

writePassword();

console.log (allArray);
console.log(confirmUpper);

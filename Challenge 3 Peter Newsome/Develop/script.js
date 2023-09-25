// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  // Create constants
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numerals = "0123456789";
  const specialchar = "!@#$%&*";
  const passlength = parseInt(prompt("enter password length 8-128"))
  if (isNaN(passlength) || passlength < 8 || passlength > 128){
    alert('Please enter a valid password length between 8 and 128 characters.');
    return '';  }
    //ask prefrences
  const inlower = confirm("include lowercase characters");
  const inupper = confirm("Include uppercase");
  const innum = confirm("Include numerals");
  const inspec = confirm("Include special characters");
  if (!inlower && !inupper && !innum && !inspec) {
    alert('You must select at least one character type.');
    return '';  }
  // combine var
  let charset = "";
  if (inlower) charset += lowercase;
  if (inupper) charset += uppercase;
  if (innum) charset += numerals;
  if (inspec) charset += specialchar;
  let password = "";
  for (let i = 0; i < passlength; i++){
    const randomindex = Math.floor(Math.random()*charset.length);
    password += charset[randomindex];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

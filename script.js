function displayPassword() {
    const length = parseInt(prompt("Enter the password length:"));
    if (isNaN(length) || length < 8 || length > 128) {
      alert("Please enter a valid password length.");
      return;
    }
  
    const includeUppercase = confirm("Include uppercase letters?");
    const includeLowercase = confirm("Include lowercase letters?");
    const includeNumbers = confirm("Include numbers?");
    const includeSpecialChars = confirm("Include symbols?");
  
    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecialChars) {
      alert("At least one character type must be selected.");
      return;
    }
  
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+{}[]|\\:;<>,.?/";
  
    let allChars = "";
    if (includeUppercase) allChars += uppercaseChars;
    if (includeLowercase) allChars += lowercaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSpecialChars) allChars += specialChars;
  
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      generatedPassword += allChars.charAt(randomIndex);
    }
  
    const passwordTextarea = document.getElementById("password");
    passwordTextarea.value = generatedPassword;
    passwordTextarea.placeholder = "";
  }
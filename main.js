// Function to prompt for birthdate and calculate age
function calculateAge() {
    // Get the current date
    const currentDate = new Date();
    
    // Prompt user for their birth year and birth month/day
    const birthYear = prompt("Enter your birth year (e.g., 1990):");
    const birthMonth = prompt("Enter your birth month (1-12):");  // 1 for January, 12 for December
    const birthDay = prompt("Enter your birth day (1-31):");
  
    // Create a birth date object using the user's input
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);  // month is 0-indexed in Date object
    
    // Calculate the difference in years
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    
    // Adjust for if the current date hasn't reached the birthday yet this year
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    
    if (currentMonth < birthDate.getMonth() || (currentMonth === birthDate.getMonth() && currentDay < birthDate.getDate())) {
      age--;
    }
  
    // Show the result in an alert
    alert("Your age is: " + age + " years old.");
  }
  
  // Function to prompt for email, username, and password, and check if they are correct
  function checkCredentials() {
    const correctEmail = "abdalla@gmail.com";
    const correctUsername = "abdalla";
    const correctPassword = "123";
  
    const email = prompt("Enter your email:");
    const username = prompt("Enter your username:");
    const password = prompt("Enter your password:");
  
    if (email === correctEmail && username === correctUsername && password === correctPassword) {
      alert("Success");
      calculateAge();  // Call age calculation function after successful login
    } else {
      alert("Let's back, man!");
    }
  }
  
  // Call the function to check credentials
  checkCredentials();
  
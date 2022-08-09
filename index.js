var currentUser = "The 'currentUser' variable must contain a string";
currentUser = "You need to modify the value of the 'currentUser' variable";
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

var excitedWelcomeMessage = 'WELCOME TO FLATBOOK, ';
const upperCaseCurrentUser = currentUser.toUpperCase();
excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${upperCaseCurrentUser}!`;

var shortGreeting = 'Welcome, ';
const firstInitial = currentUser[0];
const restOfName = currentUser.slice(1);
shortGreeting = `Welcome, ${firstInitial}!`; 
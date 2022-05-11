// Write your code in this file!
const currentUser ='Prince K';

const welcomeMessage = "Welcome to Flatbook, " + currentUser+'!';

//const excitedWelcomeMessage = 'WELCOME TO FLATBOOK, ' + currentUser +'!';

const excitedWelcomeMessage = `${welcomeMessage.toUpperCase()}` + currentUser + "!";

const shortGreeting = "Welcome, "+`${currentUser.slice(0,1)}` +'!';
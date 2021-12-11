var read = require("readline-sync");
var chalk = require("chalk");

/**
 * Welcome message
*/

var userName = read.question("What is your name? ");
let name = userName.charAt(0).toUpperCase() + userName.slice(1);
console.log(chalk.blue("\nWelcome '" + name + "' lets check - Were you born on a leap year? \n"));

var userDOB = read.question("Please Enter Yeat of birth in 'DD/MM/YYYY' format: ");

var date = userDOB.split("/");

var dd = parseInt(date[0]);
var mm = parseInt(date[1]);
var yy = parseInt(date[2]);

/**
 * create function
*/

function validation(userDOB) {

  if (dd == NaN && mm == NaN && yy == NaN) {
    console.log(chalk.magentaBright("Please enter a valied date"));
  }
  else if (dd > 31 || dd < 0 || mm > 12 || mm < 0 || yy >= 9999 || yy < 0) {
    console.log(chalk.magentaBright("Please enter a valied date"));
  }
  else {
    leapYearCheck(yy);
  }
}

function leapYearCheck(yy) {
  if (yy % 400 === 0 || yy % 4 === 0 && yy % 100 !== 0) {
    console.log(chalk.green("\nWOW!!! you are born in a Leap Year.") + chalk.red("\nShare this with your friends."));
  }
  else {
    console.log(chalk.red("\nOPPS!!! you are not born in a Leap Year."));
  }
}

/**
 * function call
*/

validation(userDOB);

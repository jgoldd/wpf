/*
	Assignment: Conditionals Personal
	
	Author: Justin Goldman
	
	Date: November 13, 2013
	
*/
//Can I survive this month on my SSI disability
var totalIncome = prompt("What is your monthly income"); //Check from SSI check
var rentTotal = prompt("What is your rent total?"); //Rent total amount
var otherTotal = prompt("Any other necessary expenses?"); //Any other expenses
var validation = "";

var expensesTotal = Number(rentTotal) + Number(otherTotal); //Expenses added together
var leftOvers = totalIncome - expensesTotal; //Total left over

if(validation === totalIncome){ //check for user input in monthy income prompt
	console.log("You did not enter a monthly income."); //Print if no input in monthly prompt
}else if(validation === rentTotal){ //check for user input in rent total prompt
	console.log("You did not enter a rent total."); //Print if no input in total prompt
}else if(validation === otherTotal){ //check for user input in other expenses prompt
	console.log("You did not enter a expenses total."); //Print if no input in expenses prompt
}else if(totalIncome > expensesTotal){ //if total income is greater than expenses print to console
	console.log("You can survive this month! You will spend " + "$" + expensesTotal + " in rent and other expenses. You will have " + "$" + leftOvers + " left for the month.");
}else { //if total expenses goes over monthly income print this to console
	console.log("You do not have enough money. Your income is " + "$" + totalIncome + " and you need " + "$" + expensesTotal + ".");
}
	

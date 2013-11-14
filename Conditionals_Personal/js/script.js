/*
	Assignment: Conditionals Personal
	
	Author: Justin Goldman
	
	Date: November 13, 2013
	
*/
//Can I survive this month on my SSI disability
var totalIncome = prompt("What is your monthly income"); //Check from SSI check
var rentTotal = prompt("What is your rent total?"); //Rent total amount
var otherTotal = prompt("Any other necessary expenses?"); //Any other expenses
var validation = ""; //validation of user input

var expensesTotal = Number(rentTotal) + Number(otherTotal); //Expenses added together
var leftOvers = totalIncome - expensesTotal; //Total left over

if(expensesTotal < totalIncome){
	console.log("You can survive this month! You will spend " + "$" + expensesTotal + " in rent and other expenses. You will have " + "$" + leftOvers + " left for the month.");
	
}else if(validation === totalIncome){
	console.log("You did not enter a value.");
	
}
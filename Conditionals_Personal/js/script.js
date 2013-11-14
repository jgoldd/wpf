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

if(validation === totalIncome){
	console.log("You did not enter a " + totalIncome " monthly income.");
}else if(validation === rentTotal){
	console.log("You did not enter a " + rentTotal " rent total.");
}
	
	

}else {
	
	console.log("You do not have enough money. Your income is " + "$" + totalIncome + " and you need " + "$" + expensesTotal + ".");

}
console.log("You can survive this month! You will spend " + "$" + expensesTotal + " in rent and other expenses. You will have " + "$" + leftOvers + " left for the month.");	

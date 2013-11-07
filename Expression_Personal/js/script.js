/*
	Assignment: Expressions Personal Assignment
	
	Author: Justin Goldman
	
	Date: November 7, 2013
	
*/

//Finding out monthly rent divided by number of people
const monthlyRent = 1175; //Monthly rent constant
var electricBill = prompt("Please enter Electric Bill amount:"); //Electric bill variable in prompt 
var utilityBill = prompt("Please enter Utility Bill amount:"); //Utility bill variable in prompt
var cableBill = prompt("Please enter Cable Bill amount:"); //Cable bill variable in prompt
var roomMateTotal = 4; //Number of occupants in home in prompt
var roomMates = ["Justin", "Josh", "Alex", "Ryan"] //added array for bills split too

//Adding up electric bill/utilitybill/cablebill
var monthlyTotal = monthlyRent + Number(electricBill) + Number(utilityBill) + Number(cableBill);
//Divided total monthly bill by number of occupants
var monthlySplit = monthlyTotal/roomMates;

//print out monthly total and total split among occupants
console.log("Your total for rent is " + "$" + monthlyTotal + " and split between " + roomMateTotal + " occupants it is " + "$" + monthlySplit + " a piece." roomMates[0] + " recieves " + utilityBillSeprate + "from " + roomMates[1] + ", " + roomMates[2] + ", " roomMates[3] for Comcast and Electricity." );

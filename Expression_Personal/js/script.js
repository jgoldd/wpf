/*
	Assignment: Expressions Personal Assignment
	
	Author: Justin Goldman
	
	Date: November 7, 2013
	
*/


//Finding out monthly rent divided by number of people
const monthlyRent = 1175; //Monthly rent constant
var electricBill = prompt("Please enter Electric Bill amount:"); //Electric bill variable in prompt 
var utilityBill = prompt("Please enter Utility Bill amount:"); //utility bill variable in prompt
var cableBill = prompt("Please enter Cable Bill amount:"); //Cable bill variable in prompt
var roomMates = prompt("Please enter amount of occupants:"); //Number of occupants in home in prompt

//Calculate monthly rent for 4 people

var monthlySplit = monthlyRent + Number(electricBill) + Number(utilityBill);

console.log(monthlySplit);
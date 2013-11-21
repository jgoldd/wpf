/*
	Assignment: Functions Wacky Assignment
	
	Author: Justin Goldman
	
	Date: November 20, 2013
	
*/

//will you save money paying yearly
var priceMonthly = prompt("Price monthly?"); //price monthly variable
var priceYearly = prompt("Price for yearly?"); //price yearly variable

var priceAverage = priceMonthly * 12; //price monthly times number of months

(priceAverage === priceYearly) ? console.log("You will be paying the same amount for yearly as monthly.") : (priceAverage > priceYearly) ? console.log("You will be paying more monthly. Go with the yearly!") : console.log("You will be paying more yearly than monthly. Go with monthly!");
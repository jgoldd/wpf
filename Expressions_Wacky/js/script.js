/*
	Assignment: Functions Wacky Assignment
	
	Author: Justin Goldman
	
	Date: November 20, 2013
	
*/

//will you save money paying yearly
var priceMonthly = prompt("Price monthly?"); 
var priceYearly = prompt("Price for yearly?");

var priceAverage = priceMonthly * 12;

(priceAverage === priceYearly) ? console.log("You will be paying the same amount for yearly as monthly.") : (priceAverage > priceYearly) ? console.log("You will be paying more monthly. Go with the yearly!") : console.log("You will be paying more yearly than monthly. Go with monthly!");

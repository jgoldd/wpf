/*
	Assignment: Functions Personal Assignment
	
	Author: Justin Goldman
	
	Date: November 20, 2013
	
*/

//amount of gas to give to a friend for a ride


var gasPrice = prompt("What is the Price of Gas Per Gallon?"); //Miles Per Gallon Cost
var milesTraveled = prompt("How many Miles did you travel?"); //Miles Traveled
var mpg = prompt("How man Miles Per Gallon does the car approximately recieve?")//MPG of car

var calcPay = function(g, mi, mp){ //set-up function andd parameters
	var calc = mi / mp; //set var for calc of total miles
	var price = calc * g; //set var for final price
	return price; //return final price
}

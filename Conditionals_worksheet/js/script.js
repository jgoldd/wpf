/*
	Assignment: Conditionals worksheet
	
	Author: Justin Goldman
	
	Date: November 5, 2013
	
*/
//Collect MPG, Gas Tank Percentage left, and Gas Tank Capacity 
var carMpg = 32;
var gasPercentage = .25;
var tankCapacity = 30;
var milesToGo = 200;
//
var gasMedian = carMpg * tankCapacity;
var gasLeft = gasMedian * gasPercentage;

if(gasLeft > milesToGo){
    console.log("Yes, you can make it without stopping for gas");
	
}else {
    console.log("You only have " + gasLeft + " gallons of gas in your tank, better get gas now while you can");
}
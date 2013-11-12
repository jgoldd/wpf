/*
	Assignment: Conditionals worksheet
	
	Author: Justin Goldman
	
	Date: November 5, 2013
	
*/
//Collect MPG, Gas Tank Percentage left, and Gas Tank Capacity 
var carMpg = prompt("Miles per gallon?", "MPG");
var gasPercentage = prompt("Gas percentage left in tank?", "%");
var tankCapacity = prompt("Car's gas tank capacity?(in Gallons)");
var milesToGo = 200;
//
var gasMedian = carMpg * tankCapacity;
var gasLeft = gasMedian * gasPercentage;

if(gasLeft > milesToGo){
    console.log("Yes, you can make it without stopping for gas");
	
}else {
    console.log("You only have " + gasLeft + " gallons of gas in your tank, better get gas now while you can");
}
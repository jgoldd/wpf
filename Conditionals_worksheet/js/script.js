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
//Car MPG times the Tanks Capacity for overall Gas Median
var gasMedian = carMpg * tankCapacity;
//Gas overall times Percenatage of gas in tank
var gasLeft = gasMedian * gasPercentage;
//If amount of gas left is more than 200 

if(gasLeft > milesToGo){
	//if more than 200
    console.log("Yes, you can make it without stopping for gas");
	
}else {
	//if it's less or equal to 200
    console.log("You only have " + gasLeft + " gallons of gas in your tank, better get gas now while you can");
}
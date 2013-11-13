/*
	Assignment: Conditionals worksheet
	
	Author: Justin Goldman
	
	Date: November 12, 2013
	
*/

//Group 1 - Last Chance For Gas!

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
    console.log("You only have " + gasLeft + " gallons of gas in your tank, better get gas now while you can.");
}



//Group 2 - Check the Login

//Set Username & Password for Correct and entered
var userName = "Admin";
var passWord = "snowseason";
var correctUserName = "Admin1";
var correctPassWord = "snowseason";

//If username is correct
if(userName === correctUserName && passWord === correctPassWord){
	console.log("Welcome, " + correctUserName + "!");
}else if(passWord === correctPassWord){
	//If user name does not match
	console.log("User not found. Try Again.");
}else{
	//if password doesn't match
	console.log("Password does not match our records.");
}


//Group 3 - Tire Pressure I
//Tire pressure from front left, front right, back left, back right

var tirePressures = [27,27,31,31];
//If front two tires are the same and back two tires are the same
 if(tirePressures[0] === tirePressures[1] && tirePressures[2] === tirePressures[3]){
	//If same on front and back..
	 console.log("The tires pass spec!");	 
}else{
	//If different front and different on back
	 console.log("Get your tires checked out!");
}











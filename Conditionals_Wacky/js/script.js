/*
	Assignment: Conditionals Wacky Assignment
	
	Author: Justin Goldman
	
	Date: November 14, 2013
	
*/

//can you make it by 5:00 to the meeting walking leaving at 3:00
var distance = prompt("What is the distance you will be walking in miles?"); //Amount of distance to walk
var mpg = prompt("Average walking speed in MPG?"); //Average speed of walk in MPG
const timeLeft = 2; //time left to make it to meeting. can be changed based on time remaining
var validation = ""; //validation of user input in prompt

var time = distance / mpg; //distance to walk by walking mpg for total time to walk
//if no input in distance or mpg, print to console you did not enter 
//if time is less than time left then print true
//if total hours pass time to walk print false

(validation === distance && validation === mpg) ? console.log("You did not enter a distance or an average walking speed.") : (time < timeLeft) ? console.log("Yes! You will make it! You have " + timeLeft + "hours to make it to the meeting and it will only take you " + time + " hour(s).") : console.log("No, you will not make it on time.");

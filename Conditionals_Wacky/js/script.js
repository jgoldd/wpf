/*
	Assignment: Conditionals Wacky Assignment
	
	Author: Justin Goldman
	
	Date: November 14, 2013
	
*/

//can you make it by 5:00 to the meeting walking leaving at 3:00
var distance = prompt("What is the distance you will be walking in miles?"); //Amount of distance to walk
var mpg = prompt("Average walking speed in MPG?"); //Average speed of walk in MPG
const timeLeft = 2; //time left to make it to meeting. can be changed based on time remaining

var time = distance / mpg; //distance to walk by walking mpg for total time to walk

(time < timeLeft) ? console.log("Yes! You will make it! You have " + timeLeft + "hours to make it to the meeting and it will only take you" + time + " hours.") : console.log("No, you will not make it on time.");

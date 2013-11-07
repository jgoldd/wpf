/*
	Assignment: Expressions Wacky Assignment
	
	Author: Justin Goldman
	
	Date: November 7, 2013
	
*/


//Aspect ratio of original image to new image sizes
var originalHeight = prompt("Enter start image height:"); // starting image demensions height
var originalWidth = prompt("Enter start image width:"); //starting image demensions width
var newWidth = prompt("Enter target deminsion width:"); //new deminsion width


// divide original height by original width to get aspect ratio number 1
var newHeight = (originalHeight / originalWidth) * newWidth;

console.log("Your new height is ")
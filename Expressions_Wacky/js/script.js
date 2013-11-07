/*
	Assignment: Expressions Wacky Assignment
	
	Author: Justin Goldman
	
	Date: November 7, 2013
	
*/


//Aspect ratio of original image to new image sizes
var originalHeight = prompt("Enter start image height:"); // starting image demensions height
var originalWidth = prompt("Enter start image width:"); //starting image demensions width
var newHeight = prompt("Enter target deminsion height:"); //new deminsion width


//divide original height by original width to get aspect ratio number 1
var newWidth = (originalHeight / originalWidth) * newWidth;


//getting aspect ratio
var aspectRatioOne = originalHeight / originalWidth;
var aspectRatioTwo = newHeight / newWidth;


console.log("Your new height is " + newHeight)
/*
	Assignment: Expressions Wacky Assignment
	
	Author: Justin Goldman
	
	Date: November 7, 2013
	
*/
//Aspect ratio of original image to new image size using pixels and new mage width

var originalHeight = prompt("Enter start image height (px):"); // starting image demensions height
var originalWidth = prompt("Enter start image width: (px)"); //starting image demensions width
var newWidth = prompt("Enter target deminsion width: (px)"); //new deminsion width
var newImage = "Your new image is "; // Concatenating for print out
var pixels = " pixels."; //Concatenating for print out 


//divide original height by original width to get new height
var newHeight = (originalHeight / originalWidth) * newWidth;

//print out to console new height 
console.log(newImage + newHeight + pixels);
>>>>>>> parent of beb769c... set-up wacky functions structure

/*
	Assignment: Expressions Industry Assignment
	
	Author: Justin Goldman
	
	Date: November 7, 2013
	
*/

//tiling an image for background with size of tile and size of area

var tileWidth = prompt("What is the width (inches) of the image:"); //Image Width in Prompt
var tileHeight = prompt("What is the Height (inches) of the image:"); //Image Height in Prompt
var areaWidth = prompt("What is the width (feet) of the area:"); //Width of area in Prompt
var areaHeight = prompt("What is the height (feet) of the area:"); //Height of area in Prompt
const areaSquareFeet = 144; //Square feet in 12 x 12 constant

//Calculate area of the tile 
var tileArea = tileWidth * tileHeight;
//Divide tile area by square foot - 12 x 12 = 144 inches
var tileAreaTotal = tileArea / areaSquareFeet;


//Multiply area width times height to get area
var areaTotal = areaWidth * areaHeight;
//Divide the area total by tile area total 
var total = areaTotal / tileAreaTotal;

//print our of how many images fit in a area
console.log("The total number of " + tileWidth + " x " + tileHeight + " images that could fit in a " + areaWidth + " x " + areaHeight + " area is " + total);


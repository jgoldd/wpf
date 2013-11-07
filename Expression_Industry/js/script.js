/*
	Assignment: Expressions Industry Assignment
	
	Author: Justin Goldman
	
	Date: November 7, 2013
	
*/

//tiling an image for background with size of tile and size of area

var tileWidth = prompt("What is the width (inches) of the image:"); //Image Width in Prompt
var tileHeight = prompt("What is the Height (inches) of the image:"); //Image Height in Prompt
var areaWidth = prompt("What is the width (feet) of the area:"); //Width of area in Prompt
var areaHeight = prompt("What is the height (feet) of the area:");
const areaSquareFeet = 144;

//Calculate area of the tile 
var tileArea = tileWidth * tileHeight;
var tileAreaTotal = tileArea / areaSquareFeet;

var areaTotal = areaWidth * areaHeight;

var total = areaTotal / tileAreaTotal;

console.log("The total number of " + tileWidth + " x " + tileHeight + " images that could fit in a " + areaWidth + " x " + areaHeight + " area is " + total);


/*
	Assignment: Functions Worksheet
	
	Author: Justin Goldman
	
	Date: November 19, 2013
	
*/
//circumference of a circle = 2 * Pi * R
var pi = 3.14159265359; //Pi variable
var radius = 4; //radius 
var circum = circleCir(pi,radius); //setting function to var for result
console.log("The circumference of the circle is " + circum);

function circleCir(p,r){
	
	return 2*p*r;
	
}
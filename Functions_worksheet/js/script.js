/*
	Assignment: Functions Worksheet
	
	Author: Justin Goldman
	
	Date: November 19, 2013
	
*/
console.log("----------- Circumference -----------");

//circumference of a circle = 2 * Pi * R

var pi = 3.14159265359; //Pi variable
var radius = 4; //radius 
var circum = circleCir(pi,radius); //result variable
console.log("The Circumference of the Circle is " + circum + "."); //console print out for circumference

function circleCir(p,r){ //set-up for function and set parameters 
	
	return 2*p*r; //equation return for circle circumference 
}


console.log("----------- Stung! -----------");

//How many Bee stings to kill an animal

var weight = 10; //weight variable
var stingsPer = 8.666666667;
var death = beeStings(weight, stingsPer); //result variable

console.log("It takes " + death + " bee stings to kill an animal."); //console print out

function beeStings(w,s){
	return s * w; //equation return for Bee Stings Per Pound
}
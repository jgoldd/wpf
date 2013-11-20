/*
	Assignment: Functions Industry Assignment
	
	Author: Justin Goldman
	
	Date: November 20, 2013
	
*/

//was a client worth it based on a $1000 a week minimum 

var budget = prompt("What is the total budget of the project?"); //total price of project
var length = prompt("Length of project in weeks?"); //Number of weeks worked on project
const weekBudget = 1000; //Weekly miniumum 

var average = budget / length; //Average pay per week

function worthIt(){ //set-up function for is it worth it
	if(average > weekBudget){ //if average is greater than weekly budget
	console.log("Congratulations! The client was worth it. Your average weekly pay is " + "$" + average + ".") //print to console if true
	}else if (average === weekBudget){
		console.log("The average pay will meet the budget equally! Be careful!"); //print to console if true
	}else {
		console.log("Sorry! This client wasn't worth it! Your average weekly pay is " + "$" + average + "."); //print to console if ture
	}
}

worthIt();
/*
	Assignment: Conditionals Industry Assignment
		
	Author: Justin Goldman
	
	Date: November 13, 2013
	
*/
//Advertisment pay for monthly clicks on a site 
var totalClickPerAd = prompt("What is the total number of monthly clicks per AD?");
var totalAds = prompt("What is the total number of Ads?");
var adPay = [.20, .50];
var adPayView = [200, 400];

var totalClicks = totalClickPerAd * totalAds; //total clicks per ad times number of ads
var lowPagePay = totalClicks * adPay[0]; //overall clicks times pay of .20

 
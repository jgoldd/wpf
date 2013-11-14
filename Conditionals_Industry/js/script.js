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
var highPagePay = totalClicks * adPay[1]; //overall clicks times pay of .50

if(totalClicks  >= adPayView[0]) { //if total clicks is greater or equal to 200 print to console
	console.log("You had a total of " + totalClicks + " clicks from " + totalAds + " Ads. You made " + lowPagePay + " from Ad clicks. ");
}else if(totalClicks >= adPayView[1]) { //if total clicks is greater or equal to 400 print to console
	console.log("You had a total of " + totalClicks + " clicks from " + totalAds + " Ads. You made " + highPagePay + " from Ad clicks. ");

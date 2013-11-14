/*
	Assignment: Conditionals Industry Assignment
		
	Author: Justin Goldman
	
	Date: November 13, 2013
	
*/
//Advertisment pay for monthly clicks on a site 
var totalClickPerAd = prompt("What is the total number of monthly clicks per AD?"); //clicks per AD 
var totalAds = prompt("What is the total number of Ads?"); //How many ads you have
var adPay = [.20, .50]; //ad pay per views
var adPayView = [200, 400]; //views total for pay
var validation = "";

var totalClicks = totalClickPerAd * totalAds; //total clicks per ad times number of ads
var lowPagePay = totalClicks * adPay[0]; //overall clicks times pay of .20
var highPagePay = totalClicks * adPay[1]; //overall clicks times pay of .50


if(totalClicks >= adPayView[0] && totalClicks < adPayView[1]) { //if total clicks is greater or equal to 200 print to console && total clicks is less than 400
	console.log("You had a total of " + totalClicks + " clicks from " + totalAds + " Ads. You made " + "$" + lowPagePay + " from Ad clicks. ");
}else if(totalClicks >= adPayView[1]) { //if total clicks is greater or equal to 400 print to console
	console.log("You had a total of " + totalClicks + " clicks from " + totalAds + " Ads. You made " + "$" + highPagePay + " from Ad clicks.");
}else { //if under 200 clicks you get nothing, print out
	console.log("You did not make 200 clicks or over this month, you only had " + totalClicks + " clicks. Which there is now pay out for under 200 clicks.");
}
//Age of Sparky in dog years based on actual age
var humanYears = 2.5; //dogs age in human years 
const dogAge = 7;

// multiply dogAge by humanYears & assign to age variable
var age = humanYears * dogAge;

//print out of "dog age" based on human years
console.log("Spark is" + " " + humanYears + " " + "which is" + " " + age + " " + "in dog years.")





//How much pizza each party goer will recieve
const slicesPerPizza = 3; //Number of slices 8
var numberOfGuests = 8; //Number of people 25
var numberOfPizzas = 10; //Number of pizzas 10

//pizzas ordered times the number of slices, divided by the number of people & asign slicePerson variable
var slicesPerPerson = (slicesPerPizza * numberOfPizzas)/numberOfGuests;
//print hout how many pieces per person
console.log("Each person ate" + " " + slicesPerPerson + " " + "slices of pizza at the party.")

//Sparky gets what remainder of pizza
//Slices by pizzas used modulo to give remainder with people\
var dogFood = (numberOfPizzas * slicesPerPizza) % numberOfGuests;

//print out how many slices sparky got
console.log("Sparky got" + " " + dogFood + " " + "slices of pizza.");




//total amount spent on groceries and average
var groceryTotals = [75.87, 45.56, 89.34, 67.49, 91.01];

//Add of all weeks of groceries 
var total = groceryTotals[0] + groceryTotals[1] + groceryTotals[2] + groceryTotals[3] + groceryTotals[4];
//dividing all weeks of groceries by number of weeks for average
var average = total/5;

//print out of average spent of groceries and total
console.log("You have spent a total of" + " " + total + " " + "on groceries over 5 weeks. That is an average of" + " " + average + " " + "per week.") 



//Calculate discounted price for item, with and without sales tax
var priceForItem = 100; //price for item
var discountOnItem = .20; //discount percentage 
var descriptionOfItem = "Nike Sneakers"; //description of item
var salesTax = .08; //sales tax percenatge 

//multiply discount times price for difference 
var discountTotal = discountOnItem * priceForItem; 
//subtract discount from price of item
var withoutTax = priceForItem - discountTotal;

//multiply discount price by sales tax percentage for difference
var taxTotal = withoutTax * salesTax;
//add total tax to total without tax for final price
var withTax = taxTotal + withoutTax;

//print out of price with discount with tax and without tax
console.log("Your" + " " + descriptionOfItem + " " + "was originally" + " " + "$" + priceForItem + " " + "but after a" + " " + discountOnItem + "%" + " " + "discount, it is now" + " " + "$" + withoutTax + " " + "without tax, and" + " " + "$" + withTax + " " + "with tax.")































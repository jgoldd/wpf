//Age of Sparky in dog years based on actual age
var humanYears = 2.5; //dogs age in human years 
const dogAge = 7;

// multiply dogAge by humanYears & assign to age variable
var age = humanYears * dogAge;
//print out of "dog age" based on human years
console.log("Spark is" + " " + humanYears + " " + "which is" + " " + age + " " + "in dog years.")


//How much pizza each party goer will recieve
const slices = 3; //Number of slices 8
var people = 8; //Number of people 25
var pizzas = 10; //Number of pizzas 10

//pizzas ordered times the number of slices, divided by the number of people & asign slicePerson variable
var slicePerson = (slices * pizzas)/people;
//print hout how many pieces per person
console.log("Each person ate" + " " + slicePerson + " " + "slices of pizza at the party.")



//Sparky gets what remainder of pizza
//Slices by pizzas used modulo to give remainder with people
var dogFood = 30 % people;
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
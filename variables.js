/*let i= 10;
console.log (i);

i +=2;
console.log(i); */


let faveDrink = "coffee";
console.log("My favourite drink is " + faveDrink);

/*
let firstName= "Marc";
let myAge= "28";
//example without template literal

console.log ("My name is " +firstName+ " I am " +myAge + ".");
//example with template literal

console.log (` My name is ${firstName}, my age is ${myAge}.`); */


// Activity 1 and stretch
let firstName ="Marc"
let myAge ="28"
let faveColour="Purple"

console.log(`My name is ${firstName} I am ${myAge} years old. My favourite colour is ${faveColour}.`)

firstName= "Bob";
myAge= "30";
faveColour= "Green";

console.log(`My name is ${firstName} I am ${myAge} years old. My favourite colour is ${faveColour}.`)

let myBreakfast ="Eggs";
let myLunch= "Bacon";
let myDinner= "Curry";
console.log(`Today I had ${myBreakfast} for breakfast, ${myLunch} for lunch and ${myDinner} for dinner.`);

myBreakfast= "Porridge";
myLunch= "Sandwhich";
myDinner= "Chicken";

console.log(`Tomorrow I will have ${myBreakfast} for breakfast, ${myLunch} for lunch and ${myDinner} for dinner.`);


const oneDay= 24*60*60*1000;
const firstDate= new Date (2021,11,16);
const secondDate= new Date(2022, 3, 6);
const diffDays= Math.round(Math.abs((firstDate-secondDate) / oneDay));

console.log(`There are ${diffDays} days until my birthday`);

// Use of && in a if, else if statement. Can use || which means or

let place= "Manc";
let weather= "Cloudy";

if (place == "Manc" && weather == "Sunny"){
console.log("Check again");
}

else if (place =="Manc" && weather =="Rain"){

console.log("Obvs");
}

else {
    console.log("What, it isnt raining?");
}

let age= "18"
let country= "UK"
if (age <=17 && country == "UK")
{
    console.log (`You are ${age} so I can serve you`);

}

else{

    console.log= ("Sorry, you are younger than 18, so I am unable to serve you")
}

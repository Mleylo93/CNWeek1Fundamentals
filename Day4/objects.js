// example of an object-

// let day= "Saturday";
// let alarm

// const myAlarm= {
//     weekendAlarm:"No alarm needed",
//     weekdayAlarm:"get up at 7AM"

// }
// if (day==("Saturday") || day== ("Sunday")){

//     alarm=myAlarm.weekendAlarm;
//     console.log(alarm);
// }
// else{
//     alarm=myAlarm.weekdayAlarm;
//     console.log(alarm);
// }

let offer= "anything";
let time = "1200";
const cafe= {
name:"Whitesheep",
seatingCapacity:100,
hasSpecialOffers:true,
drinks:[
"Cappuccino",
"Latte",
"Filter coffee",
"Tea",
"Hot chocolate"

],

breakfastOffer:"Free croissant with coffee",
lunchOffer: "Free drink with surprisingly priced sandwich",
noOffer:"Sorry no offer",

openCafe(){
if(this.hasSpecialOffers){
    return "Time for a special offer!";
}
}

};
console.log(cafe.openCafe())

if (time <1100){
    offer= cafe.breakfastOffer;
    console.log(offer);


}
else if (time<1500){

    offer=cafe.lunchOffer;
    console.log(offer);
}
else {
    offer=cafe.noOffer;
    console.log(offer);
}


//
const person={
name:"Marc",
age:"28",
faveColour: "Purple",
faveSongs:[
    "Foo Fighters: Everlong"


],
sayHi(){

    return `Hello my name is ${this.name}`


},

};
console.log(person.name);
console.log(cafe.drinks[1])
console.log(person.sayHi());

person.faveSongs=["Iron man", "Killing in the name of"];
console.log(person.faveSongs);
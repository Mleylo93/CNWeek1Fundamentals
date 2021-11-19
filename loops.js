let faveDrinks = [
" Rum",
"Bourbon",
"Whiskey",
];

for (let i =0; i<faveDrinks.length; i++){
    console.log(faveDrinks[i])
}


// While loop
let age=15;
while( age<18) {
console.log(`${age}? You're a child!`);
age++;

}
console.log(` ${age}? You're an adult!`);

let cards= ["Diamond", "Spade", "Heart", "Club"];
let currentCard= "Club";
while(currentCard !="Spade"){
    console.log(currentCard);
    currentCard=cards[Math.floor(Math.random()*4)];
}
console.log(currentCard);
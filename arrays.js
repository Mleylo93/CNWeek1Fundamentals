// Creates an array [ are used to start and , between each entry]
let coffeeOrder = [
"Alex- Cortado",
"Ben- Cortado",
"Charlie- Whatever's new"

];
console.log(coffeeOrder);

console.log(coffeeOrder[2]);


coffeeOrder[1] ="Ann- Vanilla Latte";
console.log(coffeeOrder);
// Shows the number of items in an array
console.log(coffeeOrder.length);

// Adds an item to the end of the array
coffeeOrder.push("Donna- Espresso");
console.log(coffeeOrder);

// Removes the last entry in the array
coffeeOrder.pop();
console.log(coffeeOrder);

let faveSongs =[
" Foo Fighters- Everlong",
" QOTSA- Songs for the deaf",
" Machinehead- Locust",
]

faveSongs.push("Dreamevil- Book of heavy metal");
faveSongs.push("Metallica- for whom the bell tolls");

faveSongs.pop();
faveSongs.pop();

console.log(faveSongs);
faveSongs.unshift('Tenacious D- The metal')
console.log(faveSongs);

let a= Math.floor((Math.random() *10));
let tacToeOne
if (a <=5) {
    tacToeOne= "o";
    
} else {
    tacToeOne= "x";
    
}

let b= Math.floor((Math.random() *10));
let tacToeTwo
if (b <=5) {
    tacToeTwo= "o";
    
} else {
    tacToeTwo= "x";
    
}
let c= Math.floor((Math.random() *10));
let tacToeThree
if (c <=5) {
    tacToeThree= "o";
    
} else {
    tacToeThree= "x";
    
}
let d= Math.floor((Math.random() *10));
let tacToeFour
if (d <=5) {
    tacToeFour= "o";
    
} else {
    tacToeFour= "x";
    
}
let e= Math.floor((Math.random() *10));
let tacToeFive
if (e <=5) {
    tacToeFive= "o";
    
} else {
    tacToeFive= "x";
    
}
let f= Math.floor((Math.random() *10));
let tacToeSix
if (f <=5) {
    tacToeSix= "o";
    
} else {
    tacToeSix= "x";
    
}
let g= Math.floor((Math.random() *10));
let tacToeSeven
if (g <=5) {
    tacToeSeven= "o";
    
} else {
    tacToeSeven= "x";
    
}
let h= Math.floor((Math.random() *10));
let tacToeEight
if (h <=5) {
    tacToeEight= "o";
    
} else {
    tacToeEight= "x";
    
}
let i= Math.floor((Math.random() *10));
let tacToeNine
if (i <=5) {
    tacToeNine= "o";
    
} else {
    tacToeNine= "x";
    
}

let lineOne="   |      | "
let lineTwo=" ------------"

console.log (`${tacToeOne}  |   ${tacToeTwo}   |    ${tacToeThree}`);
console.log (lineTwo);
console.log (`${tacToeFour}  |   ${tacToeFive}   |    ${tacToeSix}`);
console.log (lineTwo);
console.log (`${tacToeSeven}  |   ${tacToeEight}   |    ${tacToeNine}`);





let num= 1001
let numToString = num.toString()
let wordReverse = numToString.split("").reverse().join("");

if (numToString == wordReverse){
    console.log(`${numToString} is a palindrome`)
}
else{
    console.log(`${numToString} is not a palindrome`)
}
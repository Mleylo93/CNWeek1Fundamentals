// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds");
// }

// pressGrindBeans();


let coffeeIsGrinding = false;
const pressGrindBeans =() => {
if (coffeeIsGrinding) {
    console.log ("Stopping the grind");
    coffeeIsGrinding= false;
}
else {
    console.log("Grinding is about to begin");
    coffeeIsGrinding= true;
}

}
pressGrindBeans();


const cashWithdrawal= (amount, accnum) =>{
    console.log(`Withdrawing ${amount} from account ${accnum}`);

}
cashWithdrawal (300, 50449921);
cashWithdrawal(30, 50449921);
cashWithdrawal(200,50447921); 


const addUp = (num1, num2)=> {
    return num1 + num2;
}

let a = (addUp(1,3));
console.log(a);
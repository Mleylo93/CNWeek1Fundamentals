

const cashMachine=(pin, amount) => {
    let balance = ("2002")
    const custPin= ("1172")
    let newBalance= (balance- amount);

    if ((pin== custPin) && (amount<= balance)){
    console.log(`Your pin is correct, you have withdrawn £${amount} your new balance is £${newBalance}`)
       
    }

    else if (pin != custPin){
        console.log("Your pin is incorrect, please try again")
    }

    else{
        console.log("You have insufficient funds")
    }

}

cashMachine(1172, 100);
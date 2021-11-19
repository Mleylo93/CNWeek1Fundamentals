let pizzaTopping=("Sausage")

switch (pizzaTopping){
case "Sausage":
case "Pepperoni":
    console.log(`${pizzaTopping} is nice on a pizza`)

    break;

case "Ham":
case "Meatballs":
    console.log(`I don't mind having ${pizzaTopping} on my pizza`)
    break;

case "Pineapple":
case "Tuna":
    console.log(`Ewww ${pizzaTopping} does not belong on a pizza`)
    break;

default:
    console.log(`I've not tried ${pizzaTopping} on a pizza before`);



}
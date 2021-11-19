let orderCount = 0;

const takeOrder= (topping, sauce) => {
    console.log(` This is order number ${orderCount+1} Pizza with ${topping} and ${sauce} sauce base`);
    orderCount++;
}

takeOrder("Pepperoni", "BBQ");
takeOrder("Sausage", "Garlic");

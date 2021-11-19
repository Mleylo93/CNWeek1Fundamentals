const pet= {

    name:"Fido",
    typeOfPet:"Dog",
    age:"4",
    colour:"gold",
    eating:true,
    drinking:false,

eatingFood(){
    if (this.eating){
        return `${this.name} is eating and`
    }
    else{
        return `${this.name} is not eating and`
    }
}
,
drinkingDrink(){
    if(this.drinking){
        return ` ${this.name} is drinking`
    }
    else {
        ` ${this.name} is not drinking`
    }
}
,
drinkingEating (){
    return ` ${this.eatingFood} ${this.drinkingDrink}`
},

}
console.log(pet.drinkingEating());

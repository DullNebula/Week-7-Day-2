//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

//const isMap = obj => getType(obj) === 'Map';
// attempt for elif statement using this function inside of displayFood

const displayFood = (person)=>{
    for(let i = 0; i < Object.keys(person).length; i++){
        if (Array.isArray(Object.values(person)[i])){
            Object.values(person)[i].forEach(val => console.log(val))
        } else{
            console.log(Object.values(person)[i])
        }
    }
}


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    printInfo = () => `Name: ${this.name} \nAge: ${this.age}`

    increaseAge = () => this.age += 1;

}



let john = new Person('John', 30)
console.log(john.printInfo())
john.increaseAge();
john.increaseAge();
john.increaseAge();

let grace = new Person('Grace', 25)
console.log(grace.printInfo())
grace.increaseAge();
// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const stringLength = theString => {
    return new Promise ( (resolve, reject) =>(
        theString.length <= 10 ? reject( false ) : resolve( true )
    ))
}

stringLength("I'll try spinning, that's a good trick!")

.then( result => console.log(`Big Word`) )
.catch( error => console.log(`Small Number`) )
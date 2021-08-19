// Classes

// Properties
class Person {
    firstName: string;
    lastName: string;

    // "function" keyword is not used for methods within a class
    sayHello(){
        console.log("Hello", this.firstName);
    }
    sayHelloToFullName() {
        console.log("Hello", this.firstName , this.lastName);
    }
}
let phil: Person = new Person();
phil.firstName = "Phil";
phil.lastName = "Donahue"; 

let kenn: Person = new Person();
kenn.firstName = "Kenn";
kenn.sayHello();

// Practice
let sheriff: Person = new Person();
sheriff.firstName = "Sheriff";
sheriff.lastName = "Holler";
sheriff.sayHelloToFullName();

// Constructors
class Game {
    constructor(name: string, maker: string) {
        this.gameName = name;
        this.gameMaker = maker;
    }
    gameName: string;
    gameMaker: string;
}

let battleship: Game = new Game("Battleship", "Hasbro")

class GameWithoutConstructor {
    gameName: string;
    gameMaker: string;
}

let monopoly: GameWithoutConstructor = new GameWithoutConstructor();
monopoly.gameName = "Monopoly";
monopoly.gameMaker = "Hasbro";

// Inheritance
class Vehicle {
    type: string;
    make: string;
    model: string;
    manufactureYear: number;
    runs: boolean;
    topSpeed: number;
}

// Example One
class Automobile extends Vehicle {
    isSelfDriving: boolean;
} 

let myCar: Automobile = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = "Volvo";

// Example Two
class Motorcycle extends Vehicle {
    easyToDoWheelie: boolean;
}

let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;

class Animal {
    numberOfLegs: number;
    isCarnivore: boolean;
    name: string;
}

class Bear extends Animal {
    color: string;
}

let winnie: Bear = new Bear();
winnie.numberOfLegs = 4;
winnie.isCarnivore = false;
winnie.name = "Winnie the Pooh"
winnie.color = "yellow"
class Tiger extends Animal {
    hasStripes: boolean;
}

let khan: Tiger = new Tiger();
khan.numberOfLegs = 4;
khan.isCarnivore = true;
khan.name = "Shere Khan"
khan.hasStripes = true;

// Parameter Properties
class Store {
    constructor(public name: string, public city: string){}
}

let ikea: Store = new Store("Ikea", "Fishers")

// Accessors
class Employee extends Person {
    private _salary: number;
    
    getSalary(): string {
        return this._salary.toString();
    }

    setSalary(newSalary: number){
        this._salary = newSalary;
    }
}

let newEmployee: Employee = new Employee();
newEmployee.setSalary(30000);
//newEmployee._salary = 0; //This breaks
let salaryResult: string = newEmployee.getSalary();
console.log("The salary is:", salaryResult);
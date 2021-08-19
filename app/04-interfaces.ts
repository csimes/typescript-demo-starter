// Interfaces

// Properties
interface Animal {
    name: string;
    numberOfLegs: number;
    isCarnivore: boolean; // had to add this from 03-classes.ts
}

let lassie: Animal = {
    name: "Lassie",
    numberOfLegs: 4,
    isCarnivore: true
}

// Methods
interface Product {
    name: string;
    price: number;
    setTimeOfPurchase(d: Date);
}

class Apples implements Product {
    name: "Apples";
    price: 5.50;
    setTimeOfPurchase(d: Date) {
        console.log("Apples purchased on ", d);
    }
}

let myApples: Apples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()))
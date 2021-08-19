// Functions

// Annotations
function addNumbers(numOne: number, numTwo: number) {
    return numOne + numTwo;
}

// 1- Works
addNumbers(1, 2);

// 2 - Errors
// addNumbers(1, 2, 3);
// addNumbers(1, 2, 3, "Foo")

function addNames(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}
console.log(addNames("Cherron", "Simes"));

// Return Types

function sayHello(name: string) : string {
    return name;
}

sayHello("Kenn");
// sayHello(1); - argument doesn't satisfy return type

// Practice
function userCredentials(username: string, password: string) : boolean {
    if (username == "elevenfiftyuser" && password == "Letmein1234!") {
        return true;
    } else {
        return false;
    }
}
console.log(userCredentials("elevenfiftyuser", "Letmein1234!"));
console.log(userCredentials("elevenfiftyuser1", "Letmein1234!"));

// Optionals
// Optional params must go *after* all required params
function addNumbersWithOptional(numOne: number, numTwo: number, someString?: string) {
    console.log(someString);
    return numOne + numTwo;
}

addNumbersWithOptional(1, 2);
addNumbersWithOptional(1, 2, "This is optional");

// Practice
function fullName(firstName: string, lastName: string, middleName?: string) {
    if (middleName !== undefined) {
        return firstName + " " + middleName + " " + lastName
    } else {
        return firstName + " " + lastName
    }
}
console.log(fullName("Cherron", "Simes"));
console.log(fullName("Cherron", "Simes", "Patrice"));
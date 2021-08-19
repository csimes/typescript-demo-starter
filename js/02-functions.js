// Functions
// Annotations
function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
// 1- Works
addNumbers(1, 2);
// 2 - Errors
// addNumbers(1, 2, 3);
// addNumbers(1, 2, 3, "Foo")
function addNames(firstName, lastName) {
    return firstName + " " + lastName;
}
console.log(addNames("Cherron", "Simes"));
// Return Types
function sayHello(name) {
    return name;
}
sayHello("Kenn");
// sayHello(1); - argument doesn't satisfy return type
// Practice
function userCredentials(username, password) {
    if (username == "elevenfiftyuser" && password == "Letmein1234!") {
        return true;
    }
    else {
        return false;
    }
}
console.log(userCredentials("elevenfiftyuser", "Letmein1234!"));
console.log(userCredentials("elevenfiftyuser1", "Letmein1234!"));
// Optionals
// Optional params must go *after* all required params
function addNumbersWithOptional(numOne, numTwo, someString) {
    console.log(someString);
    return numOne + numTwo;
}
addNumbersWithOptional(1, 2);
addNumbersWithOptional(1, 2, "This is optional");
// Practice
function fullName(firstName, lastName, middleName) {
    if (middleName !== undefined) {
        return firstName + " " + middleName + " " + lastName;
    }
    else {
        return firstName + " " + lastName;
    }
}
console.log(fullName("Cherron", "Simes"));
console.log(fullName("Cherron", "Simes", "Patrice"));
//# sourceMappingURL=02-functions.js.map
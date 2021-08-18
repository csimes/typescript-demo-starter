// Type Declarations
// Declare variable: declare variable type = intialize variable with a value of declared type
var username = "instructor";
var password = "Letmein1234!";
var instructorId = 5;
// Variable declaration without initialization
// let password: string;
var phoneNumber;
var email;
var socialSecurity;
var isMarried;
// Implicit typing - declare variable, but not type 
var greeting = "Hello";
//Basic Types
// Number
var age = 40;
var currentYear = 2018;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
// String
var companyName;
companyName = "Eleven Fifty";
var appName = "Twitter";
appName = "Instagram";
// Boolean
var isLoggedIn = true;
var isGoldLevelUser = true;
// Array
var studentList = ["Tom", "Tracy", "Nikaya"];
var allScores = [100, 92, 95, 96];
console.log("Student List:", studentList[0]);
// Any
var dataFromThirdParty = "12345";
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
// Void
function sayHelloToAll() {
    console.log("Hello to all!");
}
// Null and undefined
var undefinedVariable = undefined;
var nullVariable = null;
// Tuple
// Declare a tuple type
var usernameAndId;
// Initialize it
usernameAndId = [1, "kennisreally40"]; // OK
// usernameAndId = ["kenn26", 2]; // wrong order - compiler will throw error
// Enum
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
;
var weapon = WeaponType.Sword;
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {}));
; // starting index can be assigned a different number
var cardType = CardType[2];
console.log(cardType);
// Union Types
var x;
var y;
x = "1234";
y = 1234;
// will throw error - value not assignable to designated type
// x = true; 
// y = false;
//# sourceMappingURL=01-types.js.map
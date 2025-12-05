"use strict";
// This is an industrial-grade, general purpose greet function
function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toString()}!`)
}

greet("Caleb", new Date());

const message = `Hello`;

// message();

const user = {
    firstName: "John",
    lastName: "Doe",
    age: 22,
}

console.log(user.lastName);

console.log(user.firstName.toLocaleLowerCase());

function getFavoriteNumber(): number {
    return 7;
}

async function myNumber(): Promise<number> {
    return 100;
}

myNumber().then(result => {console.log(result)});

const name = ["Caleb", "Abenaa", "Nicol"]

// Contextual typing for function - parameter s inferred to have type string
name.forEach(function (name){
    console.log(name.toUpperCase())
});

// Contextual typing also applies to arrow functions
name.forEach(name => console.log(name.toLowerCase()))

// The parameter's type annotation is an object type
function printCoordinate(pt: {x: number; y: number}) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoordinate({x: 10, y: 12});

function printName(first: string, middle?: string, last?: string) {
    console.log("The name is " + first + " " + middle + " " + last);
    console.log(middle?.toUpperCase());
}

printName("Caleb", "Nana");

// Union types
function printID(id: string | number | boolean) {
    console.log("Your ID is " + id);
    id.toString();
    if (typeof id === "string") { // narrowing
        id.toUpperCase();
    }
}

printID("D0235");
printID(true);

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        console.log("Hello, " + x.join(" and "));
    } else {
        console.log("Welcome lone traveller " + x);
    }
}

welcomePeople(["Caleb", "Abenaa", "Nicol"]);
welcomePeople("Bertha");

// Type aliases
type Point = {
    x: number;
    y: number
};

function drawLine(point: Point) {
    console.log(`Point a is ${point.x}, and point b is ${point.y}`);
}

drawLine({x: 100, y: 125});

type userInputSanitizedString = string;

function sanitizedInput(str: string): userInputSanitizedString {
    return str;
}

// let userInput = sanitizedInput(getInput())

// Interfaces - works like the Point object
interface myPoint {
    x: number;
    y: number;
}

interface Animal {
    name: String;
}

interface Bear extends Animal {
    honey: boolean;
}

// const bear = getBear();
// bear.name;
// bear.honey;

type Human = {
    name: string;
}

type Man = Human & {
    gender: string;
}

// const kofi = getMan();
// kofi.name;
// kofi.gender;

// Type Assertions
const myCanvas = document.getElementById("myCanvas") as HTMLCanvasElement;
const myCanvas2 = <HTMLCanvasElement>document.getElementById("myCanvas2");

let changingString = "Hello World";
const constantString = "Hello World";

let sayHello: "hello" = "hello"; // Even though let is used, the type "hello" makes it a literal type

console.log(sayHello);

// sayHello = "hsos"; // not possible
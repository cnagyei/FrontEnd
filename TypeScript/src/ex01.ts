"use strict";
interface Pointlike {
    x: number;
    y: number;
}

interface Name {
    name: string;
}

function logPoint(x: Pointlike) {
    console.log("x = ")
}

const obj = "Hello";
console.log(obj);
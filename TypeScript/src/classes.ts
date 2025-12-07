class Point {
    x: number = 3;
    y: number = 9;
}

const pt = new Point();
console.log(`x = ${pt.x}, y = ${pt.y}`);
pt.x = 5;
pt.y = 5;
console.log(`x = ${pt.x}, y = ${pt.y}`);

class GoodGreeter {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// definite assignment assertion operator, ! - not initialized, but no error
class Bird {
    name!: string;
    age!: number;
}

class Greeter {
    readonly name: string = "world"; // prevents assignments to the field outside of the constructor.

    constructor(otherName?: string) {
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }

    err() {
        // this.name = "not ok"; // can't assign because it is readonly
    }
}

const g = new Greeter();
// g.name = "also not ok"; // can't assign because it is readonly

// Super Calls
class Base {
    k = 4;
}

class Derived extends Base {
    constructor() {
        // Prints a wrong value in ES5; throws exception in ES6
        super(); // 'super' must be called first before accessing 'this'
        console.log(this.k)
    }
}

// Note that inside a method body, it is still mandatory to access fields and other methods via this.
let x: number = 0;

class C {
    x: string = "hello";

    m() {
        // x = "world"; // refers to the number x, not the string property x in class
        this.x = "world" // invoke 'this'
    }
}

// Getters and Setters
class GetSet {
    private _length = 0;

    get length() {
        return this._length;
    }

    set length(length: number) {
        this._length = length;
    }
}

/*
If get exists but no set, the property is automatically readonly
If the type of the setter parameter is not specified, it is inferred from the return type of the getter
 */

// Since TypeScript 4.3, it is possible to have accessors with different types for getting and setting.
class Thing {
    _size = 0;

    get size() {
        return this._size;
    }

    set size(value: string | number | boolean) {
        let num = Number(value);

        // Don't allow NaN, Infinity, etc.
        if (!Number.isFinite(num)) {
            this._size = 0;
            return;
        }
        this.size = num;
    }
}

// 'implements' Clauses
interface Pingable {
    ping(): void;
}

class Sonar implements Pingable {
    ping(): void {}
}

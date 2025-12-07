function padLeft(padding: number | string, input: string): string {
    // throw new Error("No implemented");
    if (typeof padding === 'number') {
        return " " + repeat(padding) + input;
    }
    return padding + input;
}

function repeat(times: number): string {
    let str = "";
    for (let i = 0; i < times; i++) {
        str += " ";
    }
    return str;
}

function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
        for (const s of strs) { // typeof null is actually object
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs)
    }
}

function getUsersOnlineMessage(numUsersOnline: number) {
    if (numUsersOnline) {
        return `There are ${numUsersOnline} online now!`;
    }
    return "Nobody's here. :(";
}

console.log(getUsersOnlineMessage(213));

function multiplyAll(
    values: number[] | undefined,
    factor: number
): number[] | undefined {
    if (!values) {
        return values;
    } else {
        return values.map((x) => factor * x);
    }
}

function example(x: string | number, y: string | boolean) {
    if (x === y) {
        // We can now call any 'string' method on 'x' or 'y'.
        x.toUpperCase();
        y.toLowerCase();
    } else {
        console.log(x);
        console.log(y);
    }
}

interface Container {
    value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
    // Remove both 'null' and 'undefined' from the type
    if (container.value != null) {
        console.log(container.value);

        // Now we can safely multiply 'container.value'
        container.value *= factor;
    }
}

// The 'in' operator narrowing
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = {swim?: () => void; fly?: () => void };

function move(animal: Fish | Bird) {
    if ("swim" in animal) { // checks and picks the type assigned to animal which has a property named "swim"
        return animal.swim();
    }

    return animal.fly();
}

function go(animal: Fish | Bird | Human) {
    if ("swim" in animal) {
        return animal;
    }

    return animal;
}

// 'instanceof' Narrowing
function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toISOString());
    } else {
        console.log(x.toUpperCase());
    }
}

// Using type predicates
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim() !== undefined;
}

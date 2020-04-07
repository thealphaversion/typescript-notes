// to run we use the typescript compiler
// tsc filename.ts
// this will compile the typescript file
// then we run using node
// node filename.js

function log(message) {
    console.log(message);
}

let message: string = "hello-world";

let code;

code = 'abc';

// note: running tsc main.ts here will give an error
// Property 'endsWith' does not exist on type 'string'.
// this is because endsWith is an ES6 function so we need to target ES6 in the typescript compiler settings
// you could run this with 
// tsc --target ES6 main.ts
let endsWithC = (<string>code).endsWith("c");

log(endsWithC);


// custom types

/*
    let drawpoint = (x, y) => {
        // ...
    }
*/

// sometimes we may have a lot of parameters
// like all the parameters of a car
// instead we can just pass an object that has all those parameters

// so we pass a point object to the function

/*
    let drawpoint = (point) => {
        // ....
    }

    drawpoint({x: 1, y: 2});

    // now a problem here is that we might pass some other object that migh break the code
    // we have two solutions
    // one of them is that we can annotate it with a type

    let drawpoint_annotated = (point: {x: number, y: number}) => {
        // ...
    };

    // the problem with this is that it is very verbose
    // instead we can use the other solution
    // that is, Interfaces

    // same concept as in java


    interface Point {
        x: number,
        y: number
    }
    // this way we can simplify the declaration
    // and we can always reuse it different places

    let drawpoint_interface = (point: Point) => {
        // ...
    }

    // the problem with this implementation is cohesion
    // cohesion says that the things that are related should be part of one unit.

    // our point frunctions are related to one another, but they are not in the same unit.
    // that is the cohesion is low

    // we can declare the function inside the interface or use a class
*/

// inside an interface

/*
interface Point {
    x: number,
    y: number
    draw: () => void        // no parameters because it can access x and y directly
}
*/

class Point {
    x: number;
    y: number;
    draw() {
        console.log('X: ' + this.x);
    }
    getDistance(another: Point) {
        // ...
    }       
}

let point: Point = new Point();
point.x = 1;
point.draw();

// to combine two commands together, we can use && 
// tsc --target ES6 main.ts && node main.js
// this works on linux at least


// new up we'll make a class with constructor

// in typescript we can only have 1 constructor, unlike java
class NewPoint {
    x: number;
    y: number;
    z: number;

    // once you make a parameter optional
    // then all parameters to the right of that
    // should also be optional
    constructor(x: number, y?: number, z?: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    draw() {
        console.log(this.x + "  " + this.y);
    }
}

// if we want to not pass parameters to the constructor, then we can make the parameters optional.
let newPoint = new NewPoint(1, 2, 3);
let newPoint2 = new NewPoint(1);

newPoint.draw();
newPoint2.draw();

// to prevent changing the value of any variable in the class outside the class
// we can use access modifiers

// in typescript, we have 3 access specifiers
// public       // this is the default
// private
// protected

class PrivatePoints {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getPoints() {
        console.log("x = " + this.x + "\ny = " + this.y);
    }
}


let privatePoints = new PrivatePoints(4, 2);

// you cannot directly manupulate the properties x and y from outside the class
// by default the access specifier is public


// -------------------------------------------------------------------------------------------------- //

// using access specifiers, typescript has a way of declaring and initilizing the properties with less amount of code

class LessCode {
    // writing the access specifier will before the variable will tell result in the typescript compiler
    // automatically initialize the properties with the values passed to them.
    constructor(private num1?: number, public num2?: number) {
    }

    print() {
        console.log(this.num1, this.num2);
    }

    getNum1() {
         return this.num1;
    }

    getNum2() {
        return this.num2;
    }

    setNum1(value: number) {
        if ( value < 0) {
            throw new Error('Value less than 0.')
        }
        this.num1 = value;
    }
}

let lessCode = new LessCode(4, 6);
let one = lessCode.getNum1();

// a cleaner way to do the above is

class CleanCode {
    constructor(private _num1?: number, public _num2?: number) {
    }

    get num1() {
        return this._num1;
   }

   get num2() {
       return this._num2;
   }

   set num1(value: number) {
       if ( value < 0) {
           throw new Error('Value less than 0.')
       }
       this._num1 = value;
   }
}

let cleanCode = new CleanCode(4, 6);
let x = cleanCode.num1;
let y = cleanCode.num2;

cleanCode.num1 = 10;

console.log(x, y, cleanCode.num2);
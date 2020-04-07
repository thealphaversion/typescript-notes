// to run we use the typescript compiler
// tsc filename.ts
// this will compile the typescript file
// then we run using node
// node filename.js
function log(message) {
    console.log(message);
}
let message = "hello-world";
let code;
code = 'abc';
// note: running tsc main.ts here will give an error
// Property 'endsWith' does not exist on type 'string'.
// this is because endsWith is an ES6 function so we need to target ES6 in the typescript compiler settings
// you could run this with 
// tsc --target ES6 main.ts
let endsWithC = code.endsWith("c");
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
    draw() {
        console.log('X: ' + this.x);
    }
    getDistance(another) {
        // ...
    }
}
let point = new Point();
point.x = 1;
point.draw();
// to combine two commands together, we can use && 
// tsc --target ES6 main.ts && node main.js
// this works on linux at least
// new up we'll make a class with constructor
// in typescript we can only have 1 constructor, unlike java
class NewPoint {
    // once you make a parameter optional
    // then all parameters to the right of that
    // should also be optional
    constructor(x, y, z) {
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

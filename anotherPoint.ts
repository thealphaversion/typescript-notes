// whenever we want to export a module
export class AnotherPoint {
    constructor(private x?: number, private y?: number) {
    }

    draw() {
        console.log('X: ' + this.x);
    }    
}

let anotherPoint: Point = new Point();
point.x = 1;
point.draw();
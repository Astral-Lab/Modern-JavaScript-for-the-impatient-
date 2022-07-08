```javascript
/**
 * 4. Repeat the preceeding exercise, but provide getters and setters for the x
 * and y coordinates. In the setter, make sure the argument is a number.
 */

'use strict'

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    translate(x, y) { this.x += x; this.y += y; }

    scale(s) { this.x *= s; this.y *= s; }

    get getX() { return this.x; }

    get getY() { return this.y; }

    set setX(x) { 
        if(typeof x === 'number') this.x = x;
    }

    set setY(y) {
        if(typeof y === 'number') this.y = y;
    }
}

const p1 = new Point(10, 10);

console.log(p1.getX);

p1.setX = 25;

console.log(p1.getX);

p1.setY = true;

console.log(p1.getY);
```

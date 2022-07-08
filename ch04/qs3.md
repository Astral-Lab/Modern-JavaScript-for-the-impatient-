```javascript
/**
 * 3. Repeat the preceding exercise, but now use the class syntax.
 */

'use strict'

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getX() { return this.x; }
    
    getY() { return this.y; }

    translate(x, y) { this.x += x; this.y += y; }

    scale(s) { this.x *= s; this.y *= s; }
}

const p1 = new Point(10, 10);

console.log(p1);

console.log(p1.getX());

p1.translate(10, 5);

p1.scale(2);

console.log(p1.getX(), p1.getY());
```

```javascript
/**
 * 1. Implement a function createPoint that creates a point in the plane with a
 * given x and y coordinates. Provide methods getX, getY, translate, and scale.
 * The translate method moves the point by a given amount in x and y direction.
 * The scale method scales both coordinates by a given factor. Use only the
 * techniques of Section 4.1, "Methods" (page 77).
 */

'use strict'

function createPoint(in_x, in_y) {
    return {
        x: in_x,
        y: in_y,

        getX() { return this.x; },
        
        getY() { return this.y; },

        translate(x, y) { this.x += x; this.y += y; },

        scale(s) { this.x *= s; this.y *= s; }
    }
}

const p1 = createPoint(10, 10);

console.log(p1);

console.log(p1.getX());

p1.translate(10, 5);

p1.scale(2);

console.log(p1.getX(), p1.getY());
```

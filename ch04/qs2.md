```javascript
/**
 * 2. Repeat the preceeding exercise, but now implement a constructor function
 * and use prototypes, as in Section 4.2, "Prototypes" (page 78).
 */

'use strict'

function createPoint(x, y) {
    let result = {x, y};
    Object.setPrototypeOf(result, pointPrototype);
    return result;
}

const pointPrototype = {
    getX() { return this.x; },
        
    getY() { return this.y; },

    translate(x, y) { this.x += x; this.y += y; },

    scale(s) { this.x *= s; this.y *= s; }
}

const p1 = createPoint(10, 10);

console.log(p1);

console.log(p1.getX());

p1.translate(10, 5);

p1.scale(2);

console.log(p1.getX(), p1.getY());
```

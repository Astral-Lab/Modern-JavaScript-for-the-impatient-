```javascript
/**
 * 5. Consider this function that makes a string "greetable" by adding a greet
 * method:
 * 
 *  function createGreetable(str) {
 *      const result = new String(str)
 *      result.greet = function(greeting) { return `${greeting}, ${this}!`}
 *      return result
 *  }
 * 
 * Typical usage:
 *  
 *  const g = createGreetable('World')
 *  console.log(g.greet('Hello'))
 * 
 * This function has a drawback: each greetable string has its own copy of 
 * the greet method. Have createGreetable yield an object whose prototype
 * contains the greet method. Make sure that you can still invoke all string
 * methods.
 */

'use strict'

function createGreetable(str) {
    const result = new String(str);
    String.prototype.greet = function(greeting) { return `${greeting}, ${this}!`};
    return result;
}
      
const g = createGreetable('World')
console.log(g.greet('Hello'))

console.log(g);

console.log(g.toString());

console.log(g.endsWith('d'));
```

What happens when you pass a string argument to a rest parameter ...str? The string becomes an element of the argument array.

The code below uses the above fact to construct an object with custom property names. Bracket notation is used, as dot notation
would result in the returned object having only one property, 'name'. 

```javascript
// Coded solution to question 7

/**
 * What happens when you pass a string argument to a rest parameter ...str?
 * Come up with a useful example to take advantage of your observation.
 */

function customObj(...prop) {
    let obj = {}
    for(const name of prop) {
        obj[name] = undefined           // use bracket notation, as it works with variables
    }
    return obj
}

const person = customObj('name', 'age', 'language')

console.log(person)                     // outputs: { name: undefined, age: undefined, language: undefined }

person.name = 'Nakamoto, Satoshi'

person.age = '?'

person.language = 'C++'

console.log(person)                     // outputs: { name: 'Nakamotot, Satoshi', age: '?', language: 'C++' }
```

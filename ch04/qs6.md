```javascript
/**
 * 6. Provide a method withGreeter that adds the greet method to any class,
 * yielding a new class:
 * 
 *  const GreetableEmployee = withGreeter(Employee)
 *  const e = new GreetableEmployee('Harry Smith', 90000)
 *  console.log(e.greet('Hello'))
 * 
 * Hint: Section 4.1, "Class Expressions" (page 91).
 * 
 * Note: The way I went about implementing a general 'greet' method, was to
 * just have the greeting word ('hello', 'hi', ...) passed in as usual, then
 * use the parent class 'base' as the thing to greet. We could have used a second 
 * parameter indicating which property to use after the 'Hello', but the question 
 * uses only one parameter, so I stuck with that. 
 */

'use strict'

const withGreeter = base => 
    class extends base {
        greet(greeting) {
            return `${greeting}, ${base.name}`;
        }
    }

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
}

class Computer {
    constructor(os, memType, cpu) {
        this.os = os;
        this.memType = memType;
        this.cpu = cpu;
    }

    details() { return `os: ${this.os}, memType: ${this.memType}, cpu: ${this.cpu}`; }
}

const GreetableEmployee = withGreeter(Employee);
const e = new GreetableEmployee('Harry Smith', 90000);
console.log(e.greet('Hello'));

const GreetableComputer = withGreeter(Computer);
const c = new GreetableComputer(/** parameters left blank on purpose */);
console.log(c.greet('Hi'));
```

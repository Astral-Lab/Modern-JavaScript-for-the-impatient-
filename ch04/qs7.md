```javascript
/**
 * 7. Rewrite the Employee class using private instance fields, as shown in
 * Section 4.6, "Instance Fields and Private Methods" (page 85).
 */

'use strict'

class Employee {
    #name;
    #salary;

    constructor(name, salary) {
        this.#name = name;
        this.#salary = salary;
    }

    raiseSalary(percent) {
        this.#salary *= 1 + percent / 100;
    }

    // cool how getters and setters can be called without bracekts. Gives the illusion of direct access of properties
    // with the added benefit of type checking etc (non here of course!)

    get name() { return this.#name; }             

    get salary() { return this.#salary; }

    set name(name) { this.#name = name; }

    set salary(salary) { this.#salary = salary; }
}

let mario = new Employee('Mario', 100000);

console.log(mario.name);

mario.raiseSalary(10);

console.log(mario.salary);

mario.salary = 1;

console.log(mario.salary);
```

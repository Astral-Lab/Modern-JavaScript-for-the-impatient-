```javascript
/**
 * 9. Provide a class Random with static methods
 *  
 *  Random.nextDouble(low, high)
 *  Random.nextInt(low, high)
 *  Random.nextElement(array)
 * 
 * that produces a random number between low(inclusive) and high(exclusive),
 * or a random element from a given array.
 */

class Random {
    static nextDouble(low, high) {
        let rand = Math.random() * high;                                // generate a random number 0 <= rand <= high
        while(rand < low || rand >= high) rand = Math.random() * high;  // make sure low <= rand < high is true
        return rand;    
    }
    static nextInt(low, high) {
        let rand = Math.round(Math.random() * high);                                // generate a random number 0 <= rand <= high
        while(rand < low || rand >= high) rand = Math.round(Math.random() * high);  // make sure low <= rand < high is true
        return rand;                                                                
    }
    static nextElement(array) { return array[Math.floor(Math.random() * array.length)]; }
}

for(let i = 0; i < 100; i++) console.log(Random.nextElement([0, 1, 2])) // testing .nextElement()

console.log()

for(let i = 0; i < 100; i++) console.log(Random.nextInt(0, 10))         // testing .nextInt()

console.log()

for(let i = 0; i < 100; i++) console.log(Random.nextDouble(0, 10))      // testing .nextDouble()
```

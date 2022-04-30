// Closure --------------> Access even after parent is closed

let x=1;
const parent = () => {
    let value = 2;
    console.log(x);
    console.log(value);
    const child = () => {
        console.log(x += 1);
        console.log(value += 5);
    }
    child();
}
parent();



// proto 
const person = {
    alive : true
}
const musician = {
    plays : true
}
Object.setPrototypeOf(musician,person);


// Recursion ----------

const fib = (num,array = [0,1]) => {
    if(num > 2) return array;
    const [nextToLast,last] = array.slice(-2);
    return fib(num-1,[...array,nextToLast + last]);
}
console.log(fib(12));

const fibPos = pos => pos < 2 ? pos : fibPos(pos-1) + fibPos(pos-2);
console.log(fibPos(10));

// Curry Function 
const multi = x => y => x*y;
console.log(multi(4)(5));

// String is mutable
// Array is immutable

// Pure Function 
const z = 5;
const sum = (x,y) => x+y+z;
console.log(sum(2,2));

((namespace) => {
    namespace.count = 0;
    namespace.current = function () {return `App count is ${this.count}.`};
    namespace.increement = function () {this.count++};
    namespace.reset = function () {this.count = 0};
})(window.App = window.App || {});

App.increement();
console.log(App.current());







# JS Theory

## How does the JS Engine (V8) work?
V8 translates js code directly into machine code so that computers can actually understand
it, then it exectues the translated or compiled code.

---

## Event loop - Call Stack - Do some research.

---
## What are closures?
A closure is a function having access to the parent scope, even after the parent function has closed.

---

## What is hoisting in JS?
Hoisting is when the interpreter appears to move the declaration of functions,
variables, classes or imports to the top of their scope, prior to the exection of the code.

---

## Call Back functions?
A callback is a function passed as an argument to another function.

Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).

```javascript
setTimeout(myFunction, 3000);

function myFunction() {
  document.getElementById("demo").innerHTML = "I love You !!";
}
```

In the example above, myFunction is used as a callback.

myFunction is passed to setTimeout() as an argument.

3000 is the number of milliseconds before time-out, so myFunction() will be called after 3 seconds.

<span style="color:orange">
<h4><em><strong>Side Note:</strong></em></h4>
</span>

When passing a function as an argument remember not to use parenthesis.

Right: setTimeout(myFunction, 3000);

Wrong: ~~setTimeout(myFunction(), 3000);~~


---
## Async / Await definition

async makes a function return a Promise

await makes a function wait for a Promise

---
## What is prototype inheritance ?

In programming, inheritance refers to passing down characteristics from a parent to a child so that a new piece of code can reuse and build upon the features of an existing one.

JavaScript implements inheritance by using objects. Each object has an internal link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype and acts as the final link in this prototype chain.


```javascript
const o = {
  a: 1,
  b: 2,
  // __proto__ sets the [[Prototype]]. It's specified here
  // as another object literal.
  __proto__: {
    b: 3,
    c: 4,
  },
};

// o.[[Prototype]] has properties b and c.
// o.[[Prototype]].[[Prototype]] is Object.prototype
// Finally, o.[[Prototype]].[[Prototype]].[[Prototype]] is null.
// This is the end of the prototype chain, as null,
// by definition, has no [[Prototype]].
// Thus, the full prototype chain looks like:
// { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> Object.prototype ---> null
```

---
## ESM - common.js - ES6 modules

<h3><u>CommonJS (CJS):</u></h3>

CommonJS is a module system adopted by Node.js and used on the server-side. CJS allows for the import and export of modules using require and module.exports. This enables modules to be loaded synchronously and provides a simple syntax.

<span style="color:orange">
<u>Example:</u>
</span>

Libraries and frameworks like Express.js prefer CommonJS because:

It is adopted by Node.js and is widespread on this platform.
It provides simple and synchronous module loading for server-side applications.
It offers good integration and compatibility with the Node.js ecosystem.

<h3><u>ECMAScript Module (ESM):</u></h3>

ESM is considered the official module system of JavaScript and is natively supported in modern browsers. ESM allows for the import and export of modules using import and export keywords. This provides more opportunities for optimizations such as static analysis and tree shaking. Additionally, ESM offers asynchronous module loading support.

<span style="color:orange">
<u>Example:</u>
</span>

Frameworks like Vue.js prefer ESM because:

It is the official module system of modern JavaScript and is a forward-looking choice.
It is natively supported by browsers, eliminating the need for additional libraries.
It allows for code optimizations such as static analysis and tree shaking.
It provides better performance with asynchronous module loading support.

---
## What are modules ?

A module is a chunk of code in an external file that performs a specific task or function. It is a separate entity within a program, allowing for modularity and code reusability. By encapsulating related code into modules, developers can organize their programs more efficiently and make them easier to maintain.

---
## OOP concepts such as inheritance and polymorphism.

<h3><u>Inheritance</u></h3>

To create a class inheritance, use the extends keyword.

A class created with a class inheritance inherits all the methods from another class:

```javascript
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = myCar.show();
```

The super() method refers to the parent class.

By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

---
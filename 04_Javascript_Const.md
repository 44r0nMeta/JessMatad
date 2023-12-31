## JavaScript Const

* The const keyword was introduced in ES6 (2015)

* Variables defined with const cannot be Redeclared

* Variables defined with const cannot be Reassigned

* Variables defined with const have Block Scope

## 1. Cannot be Reassigned

A const variable cannot be reassigned:

Example:
```js
    const age = 13;
    age = 25;      // This will give an error
    age = age + 13;   // This will also give an error
```

## 2. Must be Assigned
JavaScript const variables must be assigned a value when they are declared:

#### Correct:
```js
    const PI = 3.14159265359;
```
#### Incorrect:
```js
    const PI;
    PI = 3.14159265359;
```

## When to use JavaScript const ?
Always declare a variable with const when you know that the value should not be changed.

Use const when you declare:

* A new Array
* A new Object
* A new Function
* A new RegExp
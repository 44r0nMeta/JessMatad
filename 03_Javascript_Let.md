# Javascript: Let

The **let** keyword was introduced in ES6 (2015)

### Note:
* Variables defined with let cannot be Redeclared
* Variables defined with let must be Declared before use
* Variables defined with let have Block Scope

## 1. Cannot be Redeclared

Variables defined with let can not be redeclared.
You can not accidentally redeclare a variable declared with let.
For example with let you can not do this:

```js
    let x = "John Doe";

    let x = 0;
```

With var you can:

```js
    var x = "John Doe";

    var x = 0;
```
## 2. Block Scope

Before ES6 (2015), JavaScript had Global Scope and Function Scope.

ES6 introduced two important new JavaScript keywords: **let** and **const**.

These two keywords provide Block Scope in JavaScript.

Variables declared inside a { } block cannot be accessed from outside the block:

Example:

```js
    {
        let x = 2;
    }
    // x can NOT be used here
```
## 3. Redeclaring Variables

### a. With var
Redeclaring a variable using the **var** keyword can impose problems.

Redeclaring a variable inside a block will also redeclare the variable outside the block:

Example:

```js
    var x = 10;
    // Here x is 10

    {
    var x = 2;
    // Here x is 2
    }

    // Here x is 2

```

### b. With let
Redeclaring a variable using the let keyword can solve this problem.

Redeclaring a variable inside a block will not redeclare the variable outside the block:

Example:
```js
    let x = 10;
    // Here x is 10

    {
    let x = 2;
    // Here x is 2
    }

    // Here x is 10
```

## What is Good?
 - let and const have block scope.

 - let and const can not be redeclared.

 - let and const must be declared before use.

 - let and const does not bind to this.

 - let and const are not hoisted.

## What is Not Good?
 - var does not have to be declared.

 - var is hoisted.

 - var binds to this.

## Warning

**the hoisting concept will be explained orally**
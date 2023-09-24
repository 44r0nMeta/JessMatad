# JavaScript Variables

Variables are Containers for Storing Data
JavaScript Variables can be declared in 4 ways:

- Automatically
- Using var
- Using let
- Using const

Example:

In this first example, x, y, and z are undeclared variables.

They are automatically declared when first used:

``` js
    x = 5;
    y = 6;
    z = x + y;
```

## Note: 
    It is considered good programming practice to always declare variables before use.

From the examples you can guess:

x stores the value 5
y stores the value 6
z stores the value 11

```js
    var x = 5;
    var y = 6;
    var z = x + y;
```

## Note:

    The **var** keyword was used in all JavaScript code from 1995 to 2015.

    The **let** and **const** keywords were added to JavaScript in 2015.

    The var keyword should only be used in code written for older browsers.

Example using let:

```js
    let x = 5;
    let y = 6;
    let z = x + y;
```

Example using const:

```js
    const x = 5;
    const y = 6;
    const z = x + y;
```

Mixed Example:
```js
    const price1 = 5;
    const price2 = 6;
    let total = price1 + price2; //total equal 11

    /** 

        The two variables price1 and price2 are declared with the const keyword.

        These are constant values and cannot be changed.

        The variable total is declared with the let keyword.

        The value total can be changed. 
    */
```

# Conclusion
When to Use **var**, **let**, or **const** ?

1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.

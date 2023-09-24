# Conditions

* Note: Conditions result is true/false

## 1. If

Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

Syntax:
```js
if (condition) {
  //  block of code to be executed if the condition is true
}
```
E.g:

```js
let age = 18;
if(age >= 18){
    console.log('You are here because condition is true.')
}
```

## 2. Else

Use the else statement to specify a block of code to be executed if the condition is false.

Synthax:

```js
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
```
E.g:

```js
//If the hour is less than 18, create a "Good day" greeting, otherwise "Good evening":
let hour = 18;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

//The result is: Good Day
```

## 2. Else If

Use the else if statement to specify a new condition if the first condition is false.

Syntax:

```js
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
```

E.g:
If time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening":
```js

if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
```

## Exercice file download link: [](./TP/tp_06.js)






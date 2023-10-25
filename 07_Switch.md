# The JavaScript Switch Statement

Use the switch statement to select one of many code blocks to be executed.

Syntax:

```js 
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

E.g:

```js
let gender = 'M';

switch(gender){
    case 'M':
        console.log("Male")
        break;
    case 'F':
        console.log("Female")
        break;
    default:
        console.log("Unknow gender")
}

```

e.g:

```js
let month_number = 01
let month_name = ""

switch(month_number){
    case 1:
        month_name = "January"
        break;
    case 2:
        month_name = "February"
        break;
    case 3:
        month_name = "March"
        break;
    default:
        month_name = "Unknown"
}

console.log(month_name)

```
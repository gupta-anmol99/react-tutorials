# react-tutorials

We will start with using vite, since we don't want to use any framework.

https://vitejs.dev/guide/

## 01vitereact

1. This is an introduction to the vite and how to create an app.

2. We create this using the command-
   `npm create vite@latest`

3. Then go to the folder and run `npm i` to install node modules.

4. We then edit the App.jsx file to remove unnecessary code.

### Theory

The files like `App.jsx` and `Test.jsx` are called components. These components are powerfull because they can be used to return html, which can be rendered.

Let's define the rules-

1. The components should be named with extensions `.jsx`.
2. The name of the functions inside the components should start with an **upper case letter**. If not this will throw an error.
3. Although not necessary, we also capitalize the first letter of the name fo the file containing components.
4. A component cannot return more than one element. So we use fragment, ie, <> to encompass everything we want in a single tag.

## Project Digidex

This is a personal project based on the lessons and previous projects. The aim of the project is to make a card in which we will show the information about a digimon based on the selection. For this we are using [Digimon API](https://digimon-api.vercel.app/).

Let's discuss different section of this project one by one.

1. components/Card.jsx -> This is a JSX component which encapsulates Card which shows the details about the digimon. It takes 5 props, most of which are self-explanatory. Input is readOnly which shows the name of the selected digimon. digimonOptions is an array which contains the name of all the digimons available to choose as a scroll select input using map function. Finally, the select element has the onChange which triggers a function onNameChange with the target value as the argument. Note that `onNameChange && onNameChange(e.target.value)` means that it will only be triggeed if the onNameChange is available.

2. hook/getDigiInfo.js ->

## 07 Redux Toolkit

Redux is a state management library which is used to manage the state of the application. In terms of react, this means that we can create global state which can be accessed by any component. This is useful when we have to pass the state to a component which is not a child of the parent component.

There are three different concepts in redux-

1. Store -> This is the global state of the application. This is the single source of truth. This is the state which is shared by all the components. Store is made up of different slices, each of which contains a part of the state. For exmpale, in a todo app, we can have a slice for todos and another slice for the visibility filter.

2. Actions -> This is used to tell the redux what should be done to the states. This is a plain object which contains the type of action and the payload. For example, in a todo app, we can have an action to add a todo and delete a todo.

3. Reducers -> This is a function which takes the current state and the action and returns the new state. This is a pure function which means that it should not have any side effects. This is the function which is used to update the state of the application.

Basically, action tells what to do and then reducer performs it.

## Appendix

1. Arrow Functions (=>): Arrow functions are used to create functions. Single line arrow functions take the arguemnts from the left of => and return the right side expression.

For example, `let sum = (a, b)=> a+b;` is a function which takes two arguments a and b and returns their sum.

When we have multiline functions, we use curly braces to define the body of the function. For example, 

```
let div = (a, b, c)=> { 
    let d = a+b;
    return d/c; 
    }

```

is a function which takes three arguments a, b and c and returns the evaluation. Note that when we use curly braces, we have to use return explicitly to return the value.

2. Spread Operaotr (...): Spread operator is used to expand the elements of an array or object. For example, 

```
let arr = [1, 2, 3];
let arr2 = [...arr]

let user = { name: "John Doe", age: 10 };
let copiedUser = {...user};
```

The above code will create a copy of arr and user and store it in arr2 copiedUser respectively. This is useful when we want to create a copy of an array or object.

We can also merge arrays using spread operator. For example, 

```
let maleNames = ["Daniel", "Peter", "Joe"];
let femaleNames = ["Sandra", "Lucy", "Jane"];

let allNames = [...maleNames, ...femaleNames];
```

The above code will merge the two arrays and store it in allNames. Similarly, we can merge objects using spread operator. For example, 

```
let userName = { name: "John Doe" };
let userSex = { sex: "Male" };

let user = { ...userName, ...userSex };
```

In a situation where one key has another property, the last property overrides the first instance. We can use this to overwrite the properties of an object. For example, if we have an object with properties as given below, we can put new properties in the object later and overwrite the old properties.

```
let user = { name: "John Doe", age:43, adult: true };
let newUser = { ...user, age: 14, adult: false };
```

3. Filter and Map: Filter and Map are two functions which are used to filter and map the elements of an array. When we use these, they take a function whose argument is each element of the array and returns a new array.




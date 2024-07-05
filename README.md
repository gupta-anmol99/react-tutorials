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

## 02couter-project

In this project, we use a hook called useState. Hooks are basically functions in React that allow us to hook into the states.

For example, in this project, we make a counter which increases or decreases accoding to a button on the screen. When we simply increase and decreae the counter, the UI will not know that the counter vlaue is changed and we will still see the same value. So in order to solve this, we use a hook called useState(). useState() is defined via two values like this-

```
const [counter, setCounter] = useState(initValue)
```

counter is the variable we want to use and setCounter is the function that is used to set the counter value. Note that we should only use setCoutner to change the counter value. As soon as we use setCounter, the page re-renders and the updated value is displayed.

## 04tailwind-Props

In this project, we use tailwindCSS to make a card and then use props for passing information to it.

Props are a way for react components to communicate with each other and pass information.

First we make a Card component after making components folder in src. We pick the card component directly from [DevUI](https://devui.io).

First we define the Card in such a way that it takes a single prop which is an object in this example. Note that we can pass functions and other datatypes as well. Now we can define it in two ways, first without destructuring and second using destructuring. Head over to `../src/components/Card.jsx ` to understand both ways.

After defining Card, we use it in App. We also define an object `myObj` and pass it as a prop in Card. Remember the name of the prop should be same in declaration and definiton.

## 05react-router

ReactRouter is used to create pages adnd navigation between them in React. In this example, we want to create a personal webpage. Now, webpage has multiple components like Home, About, Contact and Github page. 

Furthermore, in our webpage, we want have header and footer which should be present in every page. Since these headers and footers don't change, we shouldn't reload them as we navigate b/w the pages. For this we will use Outlet in react router.

Outlet is used to define the place where the child components will be rendered. For example, in this project, we have a header and footer which are present in every page. So we define them and then use Outlet to define the place where the child components will be rendered.

For the project we first make the components, that are About, Footer, Home, Header and Github.

Then we define the routes in main.jsx. For this, we will use createBrowserRouter. We define a router using createBrowserRouter and then define the routes. There are two ways to do this, first is by defining an array of routes. Inside the array, each route is defined as an object and has a path and element. Further nested routes are contained in children. 

Go to main.jsx and see how the routes are defined in the commented part. First we define the first route as `path="/"`, which contains the Layout. That means that it renders a header and footer and children between them. The first child is `<Home />` which is present at the entry. Then the next route is defined as `path="about"` which contains the About component. Similarly, we define the other routes.

Second way is to use createRouteFromElements. In this we will use `<Route>` to define path and components. Head to main.jsx to see how this is done.

Finally, we use the Link component to navigate between the pages. Link is used to create a link to the page. It takes a `to` prop which is the path to the page. For example, in this project, we use Link to create a link to the home, about, contact and github page.

We use an updated version of Link called `NavLink`. NavLink also takes `to` prop but it gives access to a class called isActive, which can is true when the link is active. This can be used to color it differently if we want to show the page we are on.

## 06 Context
Up until now, if we need to pass any information to any component, we have to pass it as a prop. This can be cumbersome if we have to pass the information to a component which is not a child of the parent component or we have a very deep tree of components. Context solves the problem by providing a way to pass the information to any component without passing it as a prop.

We start with creating a context. Context is created using createContext function. This function returns an object which contains a provider which is used to provide the information. Head to ../src/context/UserContext.js to see how this is done. Then a provider is created using the context. Head to ../src/context/UserContextProvider.jsx to see how this is done. Then we can import the context anywhere and use the values provided in the Provider from any component.


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

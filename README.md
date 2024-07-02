# react-tutorials
We will start with using vite, since we don't want to use any framework. 

https://vitejs.dev/guide/

## 01vitereact

1. This is an introduction to the vite and how to create an app. 

2. We create this using the command- 
```npm create vite@latest```

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

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

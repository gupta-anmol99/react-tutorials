// In this we will try to build a custom react to see how the react works under the hood.

/*
This is the code for main.jsx from 01 and we will call it 'M' -

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <TestIt />
  </React.StrictMode>,
)


This is the code for the App.jsx form 01 and we will call it 'A'-

function App() {

  return (
    <h1>This is Anmol's script!</h1>
  )
}
export default App

So basicall A only returns an HTML element, which is then rendered in M.

Let's say, A returns an <a> tag, which is read by react as an object with tree like strucutre.
*/


// Make a customRender, which takes in the element and root to add to the html.
function customRender(element, container){
    // const domElement = document.createElement(element.type)
    // domElement.innerHTML = element.children
    // domElement.setAttribute('href', element.props.href)
    // domElement.setAttribute('target', element.props.target)

    // container.appendChild(domElement)
    
    // Above code is good but it only works for specific tags only. We need to make it versatile.

    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children

    for(prop in element.props){
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)
    
}



// Create a root element by finding the root in HTML


const mainContainer = document.querySelector('.root')

const reactElement = {
    type:'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: "Click me to go to Google!"
}

// Now we use the customRender

customRender(reactElement, mainContainer)



import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import './index.css'

/* 
Différenciation HTML vs Component :

Angular - <my-component></mycomponent>
React   - <Component/> || <Component></Component> 
VueJS   - <my-component></mycomponent> || <Component/> 

*/
/* 
Application LifeCycle :
1. DOM Ready
2. Render Start
*/

ReactDOM
  .createRoot(
  window.document.getElementById('root')
  ).render(
  <React.StrictMode>
    { /* "{}" expression javascript standard */ }
    { /* <App /> */ }
    { React.createElement(App) }
    { /* React.createElement('h1', null, 'Hello') */ }
  </React.StrictMode>,
)
/*
function evaluate(strings, ...values){
  console.log(strings, values);
  return 'Hello ' + values[0] + strings[1];
}

const name = 'Romaric';

const message = evaluate`Bonjour ${name} !`

console.log(message)
*/
import React from 'react'
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// let elementis = <h1>hii whats app</h1>


// ReactDOM.render(element or component, Dom node)
// it is the method used to render the react element/component to the web page to the specific specific Dom elemeent is present
// Reactct.createElementent(Component, props, child) it is the format of react to create an element
ReactDOM.render(

  // here APP is the component which has to render to the DOM element named root in index.html file which is present in public folder.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // elementis,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit .ly/CRA-PWA
// serviceWorker.unregister(); for this you have to import * as serviceWorker from './serviceWorker';

// reportWebVitals(console. log); This function is fired when the final values for any of the metrics
//  have finished calculating on the page. You can use it to log any of the results to the console or send to a particular endpoint
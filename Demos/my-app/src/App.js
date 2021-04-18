// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// ========================================================================================

import React from "react";
import logo from "./logo.svg";
import { Component } from 'react';
import "./App.css";
import Welcome2 from "./test1";
// import Welcome from "./test";
// import MultipleWc from "./test";

function App() {
  // const element = <Welcome myname = "spider"/>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="spider" className="App-logo" />
        <h2>
          React documentation
          {/* <Welcome myname = "spider"/> */}
          {/* {element} */}
          {/* <Welcome myname="spider"/> */}
          {/* <MultipleWc myage = "25"/> */}
          {/* <Welcome/> */}
          <Welcome2/>
        </h2>
        
      </header>
    </div>
  );
}
// =======================================================================

// class App extends React.Component {
//   render() {
//     // const arrr = this.props.nummr
//     // console.log(arrr);
//     return(

//       <div className="App">
//       <header className= "App-header">
//         <img src={logo} alt = "spider" className="App-logo" />
//         <div>
        
//         </div>

//       </header>
//     </div>
//     )
//   }

// }

export default App;

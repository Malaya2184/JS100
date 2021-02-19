// function Welcome(props) {
//     return <h1>Hello, {props.myname}</h1>;
//   }
// =========================================================
//   function MultipleWc(props) {
//       return <div>  <div>Hiiii my age is {props.myage}</div>
//                     <Welcome myname="malaya"/>
//                     <Welcome myname="xxxxxx"/>
//                     <Welcome myname="yyyyyy"/>
//             </div>
//   }
// ========================================================
// import React from "react";

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.myname}</h1>;
//   }
// }

// =========================================================
// import React from 'react';
// class Welcome extends React.Component {
//     constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }
//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }
//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }
//     render() {
//       return (
//         <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//       )
//     }
//   }

//   export default Welcome;

// =========================================================

// export default Welcome;
// export default MultipleWc;

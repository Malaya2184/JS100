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
import React from 'react';
class Welcome extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
        this.tick = this.tick.bind(this);
        
    }

//     componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }
//     componentWillUnmount(){
//         clearInterval(this.timerID);
//     }
    // tikki(){
    //     console.log("method outside the tick method")
    // }
    tick()
    {
        // e.preventDefault();
    this.setState({
      date: new Date()
    });
    // this.tikki()
    // =========================================
    // console.log(this);
    // console.log("hii this is tick")

    // function abc() {
    //     console.log("normal function");
    // };
    // const xyz= ()=>(console.log("arrow"));
    // abc();
    // xyz();
    
  }
//   tok = () => {
//     this.setState({
//       date: new Date()
//     });
//   }

//   1st render function called when the app starts
    render() {
      return (
        <div>
      {/* <h1>Hello, world!</h1> */}
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      {/* <button onClick= {this.tick}>update here</button> */}
      <a href={"#"} onClick={this.tick.bind(this)} >click</a>
      {/* <a href={"#"} onClick={() => (this.tick())} >click</a> */}
      {/* <a href={"#"} onClick={this.tok} >click</a> */}
    </div>
      )
    }
  }

  export default Welcome;

// =========================================================

// export default Welcome;
// export default MultipleWc;



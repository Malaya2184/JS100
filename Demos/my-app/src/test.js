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
import React, { Component } from "react";
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.tick = this.tick.bind(this);
  }
  myObj = {
    user: [
      { id: "101", name: "spider1", password: "asdf123vb" },
      { id: "102", name: "spider2", password: "lkj456dfgh" },
      { id: "103", name: "spider3", password: "dfty34dfvb" },
    ],
    isLoggedIn: false,
  };

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
  tick() {
    // e.preventDefault();
    this.setState({
      date: new Date(),
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
    const myArr = [10, 20, 30, 40, 50];
    const newArr = myArr.map((number) => {
      console.log("num before multiplication=" + number);
      return <li key={number}>{number * 2}</li>;
    });
    console.log(
      `my old array which was iterated by using map function is : ${myArr}`
    );
    console.log("my new array after map method is :", newArr);
    const allUser = this.myObj.user.map((user) => {
      return (
        <h3 key={user.id}>
          Id :{user.id}, Name :{user.name}, password: {user.password}{" "}
        </h3>
      );
    });

    return (
      <div>
        {/* <h1>Hello, world!</h1> */}
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        {/* <button onClick= {this.tick}>update here</button> */}
        <a href={"#"} onClick={this.tick.bind(this)}>
          click
        </a>
        {/* <a href={"#"} onClick={() => (this.tick())} >click</a> */}
        {/* <a href={"#"} onClick={this.tok} >click</a> */}

        {/* =================================================================== */}

        <ol>
          {/* <li>{myArr[0]}</li> */}
          {/* <li>{newArr}</li> */}
          {newArr}
          {/* <li>{newArr.map((number)=>{return <ol>{number}</ol>})}</li> */}
          {/* {myArr.map((number)=>{
                return <li>{number * 2}</li>
          })} */}
        </ol>
        {/* <h2>id: {this.myObj.user[0].id}, Name : {this.myObj.user[0].name}, password : {this.myObj.user[0].password}</h2> */}
        {allUser}
      </div>
    );
  }
}

export default Welcome;

// =========================================================

// export default Welcome;
// export default MultipleWc;

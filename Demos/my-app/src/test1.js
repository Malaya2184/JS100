import React, { useState, useEffect } from 'react';

// class Welcome2 extends React.Component {
//     constructor( props){
//         super( props);
//         this.state={
//             value : ""
//         };
//         this.handleChange = this.handleChange.bind(this)
//     }
//     // if  you use handleChange method as an arrow function then you need not to bind this method on the constructor
//     handleChange(event) {
//         // this.setState({value: event.target.value.toUpperCase().substring(0,12)});
//         this.setState({value: event.target.value});
//         console.log("changed")
//         console.log(event.target.value)
//         // console.log(event);
//   }
//   render() {
//     //   console.log(this.state.value)
//     return (
//       <div>
//         <form>
//           <h3>controlled by react</h3>
//           <input type="text" value={this.state.value} onChange = {this.handleChange}/>
//         </form>
//       </div>
//     );
//   }
// }

// ========================================================================================================
function Welcome2() {
    const [count, setCount] = useState(0);

// Similar to componentDidMount and componentDidUpdate:
useEffect(() => {
  // Update the document title using the browser API
  document.title = `You clicked ${count} times`;
});

return (
  <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
  </div>
);

}
export default Welcome2;
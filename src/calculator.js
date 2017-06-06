import React, { Component } from 'react';

class Calculator extends Component {

  constructor(props) {
    supper(props);
    this.state = {
      sum: 0
    }
  };

  add() {
    var sum = (parseInt(this.refs.val1.value) || 0) + (parseInt(this.refs.val2.value) || 0);

    this.setState({
      sum: sum
    });
  }
  render() {
    return (
  <div className="container">
   <h1>Add with React!</h1>

   <div className="add">
     <input type="text" />
     <span>+</span>
     <input type="text" />
     <span>=</span>
     <h3>Addition results go here!</h3>
   </div>
    );
  }
}

export default Calculator;

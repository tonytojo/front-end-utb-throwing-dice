import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import Dice from './Dice';

class App extends React.Component {
  state = { dice: null,  errorMessage: "" };
  numArr = ['',0,0,0,0,0,0];
  componentDidMount() {
    this.start();
  }

  start() {
    setInterval(() => {
      this.throwDice(1, 6);
    }, 1000);
  }

  throwDice(min, max) {
    const number =  Math.floor(Math.random() * (max - min + 1) + min);
    this.numArr[number]++;

    this.setState({
      dice : "dice" +  number + ".png",
      });
      
  }
  // Efter return( lägger jag en <> taggar... </>
  render() {

    if(this.state.dice !== null)
        return <Dice dice= {this.state.dice} result = {this.numArr} />

    return (
      <div className="colour-box">
        <h1 className="title">Waiting on timer</h1>
      </div>
    );
  } //end render
} //end App class

ReactDOM.render(<App />, document.querySelector("#root"));
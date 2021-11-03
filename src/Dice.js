import React from "react";
import './dice.css';

const DiceDisplay = (props) => {
  
  let arr= ["ETTOR: ", "TVÅOR: ", "TREOR: ","FYROR: ", "FEMOR: ", "SEXOR: "];

  const listItems = props.result
    .filter(item => item !== '')
    .map((item, idx) => 
    {
       return <li> {arr[idx]} {item} </li>;
    });

  return (
   <div className="colour-box">
      <h1 className="title">Throwing dice</h1>
      <img src={process.env.PUBLIC_URL + props.dice} alt="" />
      <ul>{listItems}</ul>
    </div>
  );
};

export default DiceDisplay;

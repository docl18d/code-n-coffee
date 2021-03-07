import React from "react";
// import { Button } from 'react-mdl';
import "../components/AddFido/addfido.css";
import ContentCard from "../components/ContentCard";

//my personal suggestion would be to change to class component, set up state like you did
//in the registration component, and move these inputs down to the render/return
const Addfido = ({ props }) => {
  let input;
  return (
      <form onSubmit={
        e => {
          e.preventDefault();

          if (!input.value.trim()) {
            return
          }

          props(Addfido(input.value));
          input.value = '';
        }
      }>
      <ul>
        {/* <li>
          <input type="text" ref={el => (input = el)} />
          <input type="text" id="" value="" />
        </li> */}
        <br />
        <li>
          <label for="Breed">Breed:</label>
          <input type="text" id="" value="" />
        </li>
        <li>
          <label for="Sex">Sex</label>
          <input type="text" id="Age" value="" />
        </li>
        <li>
          <label for="Age">Last name:</label>
          <input type="text" id="" value="" />
        </li>
        <li>
          <label for="City">City:</label>
          <input type="text" id="" value="" />
        </li>
        <li>
          <label for="Park">Park:</label>
          <input type="text" id="" value="" />
        </li>
        <li>
          <label for="Owners_Preferred_Drink">Owner’s Preffered Drink:</label>
          <input type="text" id="" value="" />
        </li>
        <li>
          <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect" type="submit">
            <i class="material-icons">Add Fido</i>
          </button>
        </li>
          </ul>
        </form>
  
  );
}



export default Addfido;
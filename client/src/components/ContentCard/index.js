import React from "react";
import "./style.css";
import { Menu } from "react-mdl";

function ContentCard(props) {
  return (
  <div class = "container">
    <div className="content-card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Breed:</strong> {props.breed}
          </li>
          <li>
            <strong>Sex:</strong> {props.sex}
          </li>
          <li>
            <strong>Age:</strong> {props.age}
          </li>
          <li>
            <strong>City:</strong> {props.city}
          </li>
          <li>
            <strong>Park:</strong> {props.park}
          </li>
          <li>
            <strong>Owners_Preffered_Drink:</strong> {props.owners_Preffered_Drink}
          </li>
        </ul>
      </div>

    </div>
    <div class="remove-function">
        <span onClick={() => props.removeFido(props.id)} className="remove">
        X
      </span>
</div>
</div >

  );
}

export default ContentCard;
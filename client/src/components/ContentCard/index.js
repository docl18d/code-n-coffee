import React from "react";
import "./style.css";

function ContentCard(props) {
  return (
    <div className="card">
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
      <span onClick={() => props.removeFido(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default ContentCard;
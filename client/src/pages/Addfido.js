import React from "react";

const Addfido=({props}) => {
let input; 
  return (
<div>
  <form onSubmit={
    e => {
        e.preventDefault();

        if (!input.value.trim()) {
            return 
        }

        props(Addfido(input.value));
        input.value='';
    }
}> 
    <input type="text" ref={el => (input = el)}/>
    <input type="text" id="" value=""/>
        <label for="Breed">Breed:</label>
        <input type="text" id="" value=""/>  
      <label for="Sex">Sex</label>
        <input type="text" id="Age" value=""/>  
      <label for="Age">Last name:</label>
        <input type="text" id="" value=""/>  
      <label for="City">City:</label>
        <input type="text" id="" value=""/> 
      <label for="Park">Park:</label>
        <input type="text" id="" value=""/> 
      <label for="Owners_Preffered_Drink">Owner’s Preffered Drink:</label>
        <input type="text" id="" value=""/>
    <button type="submit">Add Fido</button>
</form>
        </div>
    );
}

  

export default Addfido;
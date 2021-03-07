import React, { Component } from "react";

export default class Register extends Component {
    Render(){
        const signupFormHandler = async (event) => {
            event.preventDefault();
          
            const name = document.querySelector('#name-signup').value.trim();
            const email = document.querySelector('#email-signup').value.trim();
            const password = document.querySelector('#password-signup').value.trim();
            const confirm = document.querySelector('#password-confirm').value.trim();
          
            if(password !== confirm){
              alert("Passwords do not match.");
            } else if (name && email && password && confirm) {
              const response = await fetch('/api/user', {
                method: 'POST',
                body: JSON.stringify({ name, email, password }),
                headers: { 'Content-Type': 'application/json' },
              });
          
              if (response.ok) {
                document.location.replace('/Browse');
              } else {
                alert(response.statusText);
              }
            }
          };
          
          document
            .querySelector('.signup-form')
            .addEventListener('submit', signupFormHandler);
        
            Return (
            <div>
                <h1>Woof!</h1>  
            </div>
        )
    }
}
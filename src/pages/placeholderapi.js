import { useState, useEffect } from 'react';

function PlaceholderAPI() {

    const [user, setUser] = useState({
        userID: 0,
        irlName: "",
        username: "",
        phone: ""
      });

    async function request() {
        fetch('https://jsonplaceholder.typicode.com/users/1/')

        .then(response => response.json()).then(response => {
            setUser({
                userID: response.id,
                irlName: response.name,
                username: response.username,
                phone: response.phone
            })
        });
    }

    useEffect(() => {
        request();
    });

    return (
      <div>
        <h2>PlaceholderAPI</h2>
        <p>UserID: {user.userID}</p>
        <p>Name: {user.irlName} ({user.username})</p>
        <p>Phone: {user.phone}</p>
      </div>
    );
  }
  
  export default PlaceholderAPI;
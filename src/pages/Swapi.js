import { useState, useEffect } from 'react';

function Swapi() {

    const [user, setUser] = useState({
        averageHeight: 0,
        averageLifespan: "",
        classification: "",
        designation: "",
        eyeColors: "",
        hairColors: "",
        language: "",
        name: ""
      });

    async function request() {
        fetch('https://swapi.dev/api/species/3/')

            .then(response => response.json()).then(response => {
                setUser({
                    averageHeight: response.average_height,
                    averageLifespan: response.average_lifespan,
                    classification: response.classification,
                    designation: response.designation,
                    eyeColors: response.eye_colors,
                    hairColors: response.hair_colors,
                    language: response.language,
                    name: response.name
                })
            });
    }

    useEffect(() => {
        request();
    });

    return (
      <div>
        <h2>Swapi</h2>
        <p>Name: {user.name}</p>
        <p>Language: {user.language}</p>
        <br />
        <p>Hair colors: {user.hairColors}</p>
        <p>Eye colors: {user.eyeColors}</p>
        <br />
        <p>Designation: {user.designation}</p>
        <p>Classification: {user.classification}</p>
        <br />
        <p>Lifespan: {user.averageLifespan}</p>
        <p>Height: {user.averageHeight}</p>
      </div>
    );
  }
  
  export default Swapi;
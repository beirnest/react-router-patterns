import React from "react";
import "./DogDetails.css";
import { Link, useParams } from "react-router-dom";

function DogDetails(dogs) {
  const dog = useParams();
  console.log(dogs);
  console.log(dog);

  const currentDog = dogs.dogs.find(d => d.name.toLowerCase() === dog.name.toLowerCase());

  return (
    <div>
      <div>
        <img src={currentDog.src} alt={currentDog.name} />
        <h2>{currentDog.name}</h2>
        <h3>{currentDog.age} years old</h3>
        <ul>
          {currentDog.facts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))}
        </ul>
        <Link to="/dogs">Go Back</Link>
      </div>
    </div>
  );
}

export default DogDetails;
import React from "react";
import './DogList.css'
import { Link } from "react-router-dom";

function DogList({dogs}) {
  return (
    <div className="DogList">
      <div>
        <div >
          <h1 className="text-center">
            Click on each dog's name to find out more about them
          </h1>
        </div>
      </div>
      <div className="dogInfo">
        {dogs.map(d => (
          <div className="singleDog" key={d.name}>
            <img src={d.src} alt={d.name} />
            <h3 className="mt-3">
              <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
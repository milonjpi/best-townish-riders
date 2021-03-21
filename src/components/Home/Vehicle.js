import React from "react";
import { Link } from "react-router-dom";

const Vehicle = (props) => {
    const {id, name, photo} = props.vehicle;
  return (
    <div className="col-md-3">
      <div className="bg-white mb-3 p-4 rounded">
        <Link to={`/destination/${id}`}>
          <img className="w-100" src={photo} alt={name} />
        </Link>
        <h4 className="text-center">{name}</h4>
      </div>
    </div>
  );
};

export default Vehicle;

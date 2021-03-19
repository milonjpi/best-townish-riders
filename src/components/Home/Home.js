import React from "react";
import bike from "../../images/bike.png";
import car from "../../images/car.png";
import bus from "../../images/bus.png";
import train from "../../images/train.png";
import "./Home.css";

const Home = () => {
  return (
      <div className="row mx-md-5 my-alignment">
        <div className="col-md-3">
          <div className="bg-white mb-3 p-4 rounded">
            <img className="w-100" src={bike} alt="" />
            <h4 className="text-center">BIKE</h4>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-white mb-3 p-4 rounded">
            <img className="w-100" src={car} alt="" />
            <h4 className="text-center">CAR</h4>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-white mb-3 p-4 rounded">
            <img className="w-100" src={bus} alt="" />
            <h4 className="text-center">BUS</h4>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-white mb-3 p-4 rounded">
            <img className="w-100" src={train} alt="" />
            <h4 className="text-center">TRAIN</h4>
          </div>
        </div>
      </div>
  );
};

export default Home;

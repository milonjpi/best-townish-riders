import React, { useEffect, useState } from "react";
import "./Home.css";
import vehicleInfo from "../../fakeData/fakeData.json";
import Vehicle from "./Vehicle";

const Home = () => {
  const [vehicleData, setVehicleData] = useState([]);
  useEffect(() => {
    setVehicleData(vehicleInfo);
  }, [])
  return (
      <div className="row mx-md-5 my-alignment">
        {
          vehicleData.map( vehicle => <Vehicle key={vehicle.id} vehicle={vehicle}></Vehicle>)
        }
      </div>
  );
};

export default Home;

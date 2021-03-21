import React from "react";
import { useParams } from "react-router";
import people from "../../images/peopleicon.png";
import vehicleInfo from "../../fakeData/fakeData.json";

const SearchResult = (props) => {
  const {pickFrom, pickTo} = props.searchValue;
  const a = [1, 2, 3];
  return (
    <>
      <div className="bg-danger text-white p-2 rounded">
        <p>{pickFrom}</p>
        <p className="text-info">To</p>
        <p>{pickTo}</p>
      </div>
      {a.map(() => <SearchValue></SearchValue>)}
    </>
  );
};
const SearchValue = () => {
  const { vehicleId } = useParams();
  const vehicle = vehicleInfo.find((vh) => vh.id === parseInt(vehicleId));
  const { name, person, photo, rent } = vehicle;
  return (
    <div className="bg-white text-white mt-2 p-2 rounded">
      <div className="row text-dark p-2">
        <div className="col-3">
          <img className="w-100" src={photo} alt={name} />
        </div>
        <div className="col-2">
          <p>{name}</p>
        </div>
        <div className="col-2 ml-auto">
          <img className="w-100" src={people} alt="person" />
        </div>
        <div className="col-1">
          <p>{person}</p>
        </div>
        <div className="col-3 text-right">
          <p>${rent}</p>
        </div>
      </div>
    </div>
  );
};
export default SearchResult;

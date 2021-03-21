import React from "react";
import './Destination.css';
import { useState } from "react";
import SearchResult from "./SearchResult";
import map from "../../images/Map.png";

const Destination = () => {
  const [search, setSearch] = useState(true);
  const [searchValue, setSearchValue] = useState({
    pickFrom: "",
    pickTo: "",
  });
  const handleBlur = (e) => {
    const searchInfo = { ...searchValue };
    searchInfo[e.target.name] = e.target.value;
    setSearchValue(searchInfo);
  };
  const AnyReactComponent = ({ text }) => <div>{text}</div>
  return (
    <div className="row mx-md-5">
      <div className="col-lg-4 mb-3">
        <div className="bg-light p-3 rounded">
          {search ? (
            <form onSubmit={() => setSearch(false)}>
              <label>Pick From</label>
              <input
                className="form-control"
                type="text"
                onBlur={handleBlur}
                name="pickFrom"
                placeholder="Pick From....."
                required
              />
              <label>Pick To</label>
              <input
                className="form-control"
                type="text"
                onBlur={handleBlur}
                name="pickTo"
                placeholder="Pick To....."
                required
              />
              <br />
              <input
                className="form-control btn btn-success"
                type="submit"
                value="Search"
              />
            </form>
          ) : (
            <SearchResult searchValue={searchValue}></SearchResult>
          )}
        </div>
      </div>
      <div className="col-lg-8">
           <img className="w-100" src={map} alt="map"/>
      </div>
    </div>
  );
};
export default Destination;


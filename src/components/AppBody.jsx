import Restaurent from "./RestaurentCard";
import { restData } from "../../data";
import { useState } from "react";

const RestaurentList = ({ restData }) => (
  <div className="restaurentList">
    {restData &&
      restData.map((res, i) => <Restaurent key={res.info.id} restData={res} />)}
  </div>
);

const AppBody = () => {
  [listOfRestaurent, setListOfRestaurent] = useState(restData);

  return (
    <div className="appbody">
      <div>
        <button
          onClick={() => {
            const filterData = restData.filter((ele) => ele.info.avgRating > 4.6);
            setListOfRestaurent(filterData);

          }}
        >
          Top Rated Restaurent
        </button>
      </div>
      <RestaurentList restData={listOfRestaurent} />
    </div>
  );
};

export default AppBody;

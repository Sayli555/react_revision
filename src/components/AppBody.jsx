import Restaurent from "./RestaurentCard";
import { restData } from "../../data";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer/Shimmer";

const RestaurentList = ({ restData }) => (
  <div className="restaurentList">
    {restData &&
      restData.map((res, i) => <Restaurent key={res.info.id} restData={res} />)}
  </div>
);

const AppBody = () => {
  [listOfRestaurent, setListOfRestaurent] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setListOfRestaurent(
        json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      console.log("data", json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return listOfRestaurent?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="appbody">
      <div>
        <button
          onClick={() => {
            const filterData = listOfRestaurent?.filter(
              (ele) => ele.info.avgRating > 4
            );
            setListOfRestaurent(filterData);
          }}
        >
          Top Rated Restaurent
        </button>
      </div>
      <RestaurentList  restData={listOfRestaurent} />
    </div>
  );
};

export default AppBody;

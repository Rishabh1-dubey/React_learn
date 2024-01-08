import ResturentCard from "./ResturentCard";
import resList from "../utils/data";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] =useState([]);
  const [searchText, setsearchText] = useState(" ");

  //whenver state varible changes,updates trigger a reconcilition cycle ( react   re-render the components);
  console.log("body re-rednder");

  //useEffect
  useEffect(() => {
    // console.log("use effect called")
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      " https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // optional chaining ******
    setlistOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  if (listOfRestaurants.length === 0) {
    // return <h1>Loading...?</h1>;
    return <Shimmer />;
  }


  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => {
            setsearchText(e.target.value);
          }} />

          <button
            onClick={() => {
              //filter the restuarent cards and updates the UI
              //searchTEXT
              console.log(searchText);

              //to display on the ui we have use filtered resturent...
              const filteredRestaurant = listOfRestaurants.filter((res) => 
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // setlistOfRestaurants(filteredRestaurant);
              setfilteredRestaurant(filteredRestaurant);
            }} >search</button> 
        </div>



        <button className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.2);
            setlistOfRestaurants(filteredList);
          }}
        >
          Top rated Resturet
        </button>
      </div>
      <div className="resto-container">
        {filteredRestaurant.map((restaurant) => (
          <ResturentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
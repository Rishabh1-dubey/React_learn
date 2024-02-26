import ResturentCard from "./ResturentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState(" ");

  //whenver state varible changes,updates trigger a reconcilition cycle ( react   re-render the components);
  // console.log("body re-rednder");

  //useEffect
  useEffect(() => {

    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      " https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D19.0759837%26lng%3D72.8776559%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // optional chaining ******
    setlistOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you are a offline !!!! try again some time</h1>
    )





  return listOfRestaurant?.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {
            setsearchText(e.target.value);
          }} />

          <button
            className="px-4 py-2 bg-green-100 m-4"
            onClick={() => {

              console.log(searchText);

              //to display on the ui we have use filtered resturent...
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // setlistOfRestaurant(filteredRestaurant);
              setfilteredRestaurant(filteredRestaurant);

            }} >search</button>
        </div>
        <div className="search px-4 py-4 flex items-center">
          <button className="px-4 py-2 bg-gray-100"
            onClick={() => {
              const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
               setlistOfRestaurant(filteredList);
              

            }}
          >
            Top rated Resturet
          </button>
        </div>
      </div>


      <div className="flex flex-wrap">
        {
          filteredRestaurant.map((restaurant) => (
            <Link key={restaurant.info.id} to={"/restaurent/" + restaurant.info.id}>
              <ResturentCard resData={restaurant} />
            </Link>
          )
          )
        }
      </div>
    </div>
  )
}

export default Body;
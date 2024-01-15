import ResturentCard from "./ResturentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] =useState([]);
  const [searchText, setsearchText] = useState(" ");

  //whenver state varible changes,updates trigger a reconcilition cycle ( react   re-render the components);
  // console.log("body re-rednder");

  //useEffect
  useEffect(() => {
   
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
     " https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // optional chaining ******
    setlistOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
  };

  const onlineStatus =useOnlineStatus();
  
  if(onlineStatus===false)
    return(
      <h1>Looks like you are a offline !!!! try again some time</h1>
    )
  

  


  return listOfRestaurant?.length === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => {
            setsearchText(e.target.value);
          }} />

          <button
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



        <button className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
            setlistOfRestaurant(filteredList);
            
          }}
        >
          Top rated Resturet
        </button>
      </div>
      <div className="resto-container">
        {
          filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurent/" + restaurant.info.id}>
            <ResturentCard  resData={restaurant} />
        </Link>
        )
          )
      }
      </div>
    </div>
  )
        }

export default Body;
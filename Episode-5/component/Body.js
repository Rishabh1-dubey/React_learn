import ResturentCard from "./ResturentCard";
import resList from "../utils/data";
import { useState } from "react";
const Body = () => {

  // state varaible

  //const  arr=  useState(resList)
  // const [listOfRestaurants, setlistOfRestaurants] = arr;

  const [listOfRestaurants, setlistOfRestaurants] = useState(resList);



  //normal js varaible
  // let listOfRestaurants = [
  //   {
  //     "info": {
  //       "id": "202836",
  //       "name": "Hangout Cakes & More",
  //       "cloudinaryImageId": "47d61d838cfa45d899f3bbf0bcd24226",
  //       "locality": "CST Road",
  //       "areaName": "Santacruz East",
  //       "costForTwo": "₹150 for two",
  //       "cuisines": [
  //         "Bakery"
  //       ],
  //       "avgRating": 4.3,
  //       "veg": true,
  //       "parentId": "4508",
  //       "avgRatingString": "4.3",
  //       "totalRatingsString": "1K+",
  //       "deliveryTime": 13,
  //       "lastMileTravel": 1.5,
  //       "serviceability": "SERVICEABLE",

  //     }
  //   },
  //   {
  //     "info": {
  //       "id": "5691",
  //       "name": "Smoke House Deli",
  //       "cloudinaryImageId": "f5rgvghgew6hmnmbg3rn",
  //       "locality": "Bandra Kurla Complex",
  //       "areaName": "Bandra Kurla Complex",
  //       "costForTwo": "₹600 for two",
  //       "cuisines": [
  //         "American",
  //         "Italian",
  //         "European"
  //       ],
  //       "avgRating": 3.4,
  //       "parentId": "874",
  //       "avgRatingString": "4.4",
  //       "totalRatingsString": "5K+",
  //       "sla": {
  //         "deliveryTime": 32,
  //         "lastMileTravel": 1.5,

  //       }
  //     }
  //   },
  //   {
  //     "info": {
  //       "id": "86158",
  //       "name": "Kitchen Garden by Suzette",
  //       "cloudinaryImageId": "bttsvynpr8x77z6hu9b1",
  //       "locality": "BKC",
  //       "areaName": "Scruz Bandra East",
  //       "costForTwo": "₹1100 for two",
  //       "cuisines": [
  //         "Salads"
  //       ],
  //       "avgRating": 4.6,
  //       "parentId": "5477",
  //       "avgRatingString": "4.6",


  //     }
  //   }

  // ];



  return (
    <div className="body">
      <button className="filter-btn"
        onClick={() => {
          const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.2         );

          setlistOfRestaurants(filteredList);
        }}
      >
        Top rated Resturet
      </button>
      <div className="resto-container">
        {listOfRestaurants.map((restaurant) => (
          <ResturentCard key={restaurant.info.id} resData={restaurant} />
        ))
        }
      </div>
    </div>
  )
}

export default Body;
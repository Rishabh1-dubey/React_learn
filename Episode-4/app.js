import React from "react";
import ReactDOM from "react-dom/client";


/*
*Header
-logo
-navitem
 * body
-search bar
-resturent container
-retro card
*footer
-coopyright
-links

*/



const Header = () => {
  return (
    <div className="Header">
      <div className="logo-container">
        <img
          className="logo" src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg" alt="logo" />
      </div>

      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Add Cart</li>
        </ul>
      </div>
    </div>
  )
}

const ResturentCard = (props) => {
  // console.log(props);
  const { resData } = props;


  const { cloudinaryImageId,name,cuisines, costForTwo, deliveryTime, } = resData?.info;


  return (
    // <div className="res-card">
    //   <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.info.cloudinaryImageId}
    //    />

    // after declaring const in globallt above you don't need to write resData.info and so on...
    <div className="res-card">
      {/* <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}
       /> */}



      {/* ...........simple props method to give the value........... */}

      {/* <h3>Meghna food</h3> 
      <h3>{props.resName}</h3>
      <h3>Biryani, North Indian,Asain</h3> 
      <h3>{props.cousine}</h3>
      <div className="infor">
      <h3>4.4 stars ⭐⭐⭐</h3>
      <h3>38 mins</h3>
    </div> */}
    

      {/* .................swiggy api data.......................  */}

      <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
      />
      {/* this is use when we define put a vluue for one hotel or thinh like deivenconfig */}
      {/* <h3>{resData.info.name}</h3>
        <h3>{resData.info.cuisines}</h3> 
       // join use for a adding a comma  
      <h3>{resData.info.cuisines.join(",")}</h3>
      <div className="infor">
        <h3>{resData.info.avgRating} For two</h3>
        <h3>{resData.info.sla.deliveryTime} Min </h3>
      </div>   */}

      <h3>{name}</h3>
      <h3>{cuisines.join(",")}</h3>
      <div className="infor">
        <h3>{costForTwo} For two</h3>
        <h3>{deliveryTime} Min </h3>
      </div>
    </div>
  );
};

const resList = [
  {
    "info": {
      "id": "62894",
      "name": "LunchBox - Meals and Thalis",
      "cloudinaryImageId": "pjobovhpe4jwxdxoe1ns",
      "locality": "Kalina",
      "areaName": "Santacruz East",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Biryani",
        "North Indian",
        "Punjabi",
        "Healthy Food",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.1,
      "parentId": "4925",
      "avgRatingString": "4.1",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "22 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-04 23:59:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹159"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-kalina-santacruz-east-mumbai-62894",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "36461",
      "name": "FreshMenu",
      "cloudinaryImageId": "6c4de7b481d3614370e5062b2f33e7d6",
      "locality": "Nityanand Bugh Road",
      "areaName": "Chembur",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Continental",
        "Chinese",
        "Oriental",
        "Asian",
        "Healthy Food",
        "Fast Food",
        "Indian",
        "Desserts"
      ],
      "avgRating": 4.2,
      "parentId": "398",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "30 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-05 00:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "EVERY ITEM",
        "subHeader": "@ ₹129"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/freshmenu-nityanand-bugh-road-chembur-mumbai-36461",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "9052",
      "name": "Subway",
      "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
      "locality": "Central Plaza, Kalina",
      "areaName": "Santacruz East",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.3,
      "parentId": "2",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "20 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-05 04:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/subway-central-plaza-kalina-santacruz-east-mumbai-9052",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "17499",
      "name": "Faasos - Wraps, Rolls & Shawarma",
      "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
      "locality": "Kalina",
      "areaName": "Santacruz East",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.2,
      "parentId": "21809",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 22,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "22 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-04 23:59:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹129"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-kalina-santacruz-east-mumbai-17499",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "86155",
      "name": "Kitchen Garden by Suzette",
      "cloudinaryImageId": "bttsvynpr8x77z6hu9b1",
      "locality": "BKC",
      "areaName": "Scruz Bandra East",
      "costForTwo": "₹1100 for two",
      "cuisines": [
        "Salads"
      ],
      "avgRating": 4.6,
      "parentId": "5477",
      "avgRatingString": "4.6",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "23 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-04 19:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kitchen-garden-by-suzette-bkc-scruz-bandra-east-mumbai-86155",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "29822",
      "name": "Sodabottleopenerwala",
      "cloudinaryImageId": "495277686a0f29763fad4e916642b1eb",
      "locality": "Bandra Kurla Complex",
      "areaName": "Bandra Kurla Complex",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Parsi",
        "Indian"
      ],
      "avgRating": 4.4,
      "parentId": "877",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 2.5,
        "serviceability": "SERVICEABLE",
        "slaString": "29 mins",
        "lastMileTravelString": "2.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-05 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/sodabottleopenerwala-bandra-kurla-complex-mumbai-29822",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "391816",
      "name": "Louis Burger",
      "cloudinaryImageId": "19d3d352cc815b9d88b22617b41fa97b",
      "locality": "Trade Centre",
      "areaName": "Santacruz Bandra east",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Burgers",
        "American",
        "Fast Food"
      ],
      "avgRating": 4.4,
      "parentId": "22485",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 2,
        "serviceability": "SERVICEABLE",
        "slaString": "24 mins",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-05 05:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
      "link": "https://www.swiggy.com/restaurants/louis-burger-trade-centre-santacruz-bandra-east-mumbai-391816",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "202836",
      "name": "Hangout Cakes & More",
      "cloudinaryImageId": "47d61d838cfa45d899f3bbf0bcd24226",
      "locality": "CST Road",
      "areaName": "Santacruz East",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Bakery"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "4508",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 13,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "13 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-04 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": { },
          "textExtendedBadges": { }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": { },
          "video": { }
        }
      },
      "reviewsSummary": { },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": { }
    },
    "analytics": { },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/hangout-cakes-and-more-cst-road-santacruz-east-mumbai-202836",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "5691",
      "name": "Smoke House Deli",
      "cloudinaryImageId": "f5rgvghgew6hmnmbg3rn",
      "locality": "Bandra Kurla Complex",
      "areaName": "Bandra Kurla Complex",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "American",
        "Italian",
        "European"
      ],
      "avgRating": 4.4,
      "parentId": "874",
      "avgRatingString": "4.4",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "32 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-04 23:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": { },
          "textExtendedBadges": { }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": { },
          "video": { }
        }
      },
      "reviewsSummary": { },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": { }
    },
    "analytics": { },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/smoke-house-deli-bandra-kurla-complex-mumbai-5691",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "86155",
      "name": "Kitchen Garden by Suzette",
      "cloudinaryImageId": "bttsvynpr8x77z6hu9b1",
      "locality": "BKC",
      "areaName": "Scruz Bandra East",
      "costForTwo": "₹1100 for two",
      "cuisines": [
        "Salads"
      ],
      "avgRating": 4.6,
      "parentId": "5477",
      "avgRatingString": "4.6",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "26 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-04 19:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": { },
          "textExtendedBadges": { }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹120 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": { },
          "video": { }
        }
      },
      "reviewsSummary": { },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": { }
    },
    "analytics": { },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kitchen-garden-by-suzette-bkc-scruz-bandra-east-mumbai-86155",
      "type": "WEBLINK"
    }
  }

];

//not using (not acceptable)<<<<<<<< index as a key <<<<<<<<<<<<<< unique id(best praticce)

const Body = () => {
  return (

    <div className="body">
      <div className="search">serach</div>
      <div className="resto-container">
        {/* <ResturentCard resName=""Meghna Food cousine="Biryani, North Indian,Asain"/>
        <ResturentCard resName="KFC" cousine="Burger, Fast Food" /> */}

        {/* simple , this is not a good pratice  */}
        {/* <ResturentCard resData={resList[0]} />
         <ResturentCard resData={resList[1]} />
         <ResturentCard resData={resList[2]} />
         <ResturentCard resData={resList[3]} />
         <ResturentCard resData={resList[4]} /> */}
        {/* <ResturentCard resData={ResList} /> */}

        {/* if we we have a 1000 rest.. data then how we can find it so we are using map filter */}

        {resList.map((restaurant) => (
          <ResturentCard key={restaurant.info.id}  resData={restaurant} />
        ))
        }






      </div>
    </div>
  )
}





const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* <ResturentCard/> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
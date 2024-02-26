// import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentmenu from "../utils/useRestaurentmenu";
import { MENU_API } from "../utils/constents";
import RestaurentCategory from "../component/RestaurentCategory"
import { useState } from "react";


const Restaurentmenu = () => {
    const { resId } = useParams();

    const ResInfo = useRestaurentmenu(resId);

    const [ShowIndex , setShowIndex]=useState(null);

    if (ResInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = ResInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    

    console.log(ResInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  

    //we have filter out all the recommed category of the resataurent......

    const categories= ResInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(categories);

    return (
        <div className="  text-center">
            <h1 className="font-bold my-6  text-2xl">{name}</h1>
            <p  className="font-bold  text-lg">{cuisines.join(" , ")}-{costForTwoMessage}</p>
            {/* category*/}
            {categories&&categories.map((category,index)=>(
                <RestaurentCategory
                  key={category?.card?.card.id}
                 data={category?.card?.card}
                
                showItems={index===ShowIndex ? true : false}
                setShowIndex={(index)=>{
                    setShowIndex(index);
                }}
                index={index}
                />
            ))}
        </div>
    );
};

export default Restaurentmenu;
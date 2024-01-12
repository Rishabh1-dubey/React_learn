import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// to use resId
import { MENU_API } from "../utils/constents";
const Restaurentmenu = () => {

    const [ResInfo, setResInfo] = useState(null);

    // const Params = useParams()
    // console.log(Params); 

    const { resId } = useParams();



    useEffect(() => {
        fetchMenu();
    }, []);


    //const fetchMenu = async() => {
    // const data = await fetch(
    //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"

    // );

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();

        console.log(json);
        setResInfo(json.data);
    };
    if (ResInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = ResInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = ResInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")}-{costForTwoMessage}</p>


            <h2>menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} - {"Rs"}-{item.card.info.price/100  || item.card.info.price/100}
                    </li>))}

            </ul>

        </div>
    )
}

export default Restaurentmenu;
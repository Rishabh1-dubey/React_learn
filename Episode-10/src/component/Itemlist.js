
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constents";
import { addItem } from "../utils/cartSlice";

const Itemlist = ({ items }) => {

        const dispatch = useDispatch();
        const handleAddItem =(item)=>{
            dispatch(addItem(item));
    }
  

    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} 
                className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
<div className="w-9/12">

<div className="p-2">
<span className="font-bold">{item.card.info.name}</span>
<span>- ₹ {item.card.info.price/100}</span>
</div>
<p>{item.card.info.description}</p>
</div>
<div className="w-3/12 p-3">
    <div className="absolute">

        
<button className="p-2 bg-white  shadow-lg m-auto border text-black" 
onClick={()=>handleAddItem(item)}
// onClick={handleAddItem}//destructure  property shi se karna padega
// onClick={handleAddItem(item)}//ye sbhi rest ke menu ko add kr lega 
>
     Add+
     </button>
    </div>
<img src={CDN_URL + item.card.info.imageId} className="rounded-md"/>
</div>
</div>
    ))} 
    </div>
    );
};
export default Itemlist;

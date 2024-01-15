import { useEffect, useState } from "react"
import { MENU_API } from "./constents";


const useRestaurentmenu = (resId) =>{
const [ResInfo,setResInfo]=useState(null);
useEffect (()=>{
//fetch api 
fetchData();
},[]);

const fetchData= async ()=>{
    const data= await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
};
    return ResInfo;

};
 export default useRestaurentmenu;
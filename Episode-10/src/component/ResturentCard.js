import { CDN_URL } from "../utils/constents"

const ResturentCard = (props) => {
    // console.log(props);
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, deliveryTime, } = resData?.info;

    return (
        <div className="m-4 p-4 h-[420px] w-[330px] bg-gray-200 rounded-md hover:bg-slate-300">
            <img className="w-[320px] h-[220px] rounded-lg" src={CDN_URL + cloudinaryImageId}
            />


            <h3 className="font-bold py-4 text-xl">{name}</h3>
            <h3>{cuisines.join(",")}</h3>
                <h3>{avgRating}</h3>
            <div className="infor">
                <h3>{costForTwo} For two</h3>
                <h3>{deliveryTime} Min </h3>
            </div>
        </div>
    );
};
export default ResturentCard;
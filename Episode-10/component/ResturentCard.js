import { CDN_URL } from "../utils/constents";

const ResturentCard = (props) => {
    // console.log(props);
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, deliveryTime, } = resData?.info;

    return (
        <div className="res-card">
            <img className="res-logo" src={CDN_URL + cloudinaryImageId}
            />


            <h3>{name}</h3>
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
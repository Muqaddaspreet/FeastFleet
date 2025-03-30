import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  //   console.log(props);
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla: { deliveryTime },
  } = resData?.info; // Optional chaining
  return (
    <div
      className="m-4 p-4 w-[350px] rounded-lg shadow-lg hover:scale-95"
      // style={{ backgroundColor: "#f0f0f0" }}
    >
      <div className="h-56">
        <img
          className="rounded-lg h-[100%] w-[100%] object-cover"
          alt="res-logo"
          src={`${CDN_URL}${cloudinaryImageId}`}
        />
      </div>

      <h3 className="font-bold pt-4 text-xl">{name}</h3>
      <h4 className="font-bold text-xl text-gray-400">{cuisines.join(", ")}</h4>
      <span className="font-semibold text-xl">⭐{avgRating}</span>
      <span className="font-bold pl-1 text-xl">•{deliveryTime} mins</span>
      <h4 className="font-bold">{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  console.log(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const cardGroup =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  console.log(cardGroup);

  const categories = cardGroup.filter((c) =>
    c.card?.card?.["@type"].includes(".ItemCategory")
  );
  console.log(categories);

  const itemCards =
    cardGroup?.[2]?.card?.card?.itemCards ||
    cardGroup?.[6]?.card?.card?.itemCards;
  console.log(itemCards);

  return (
    <div className="menu">
      <div className="text-center">
        <h1 className="font-bold text-6xl my-10">{name}</h1>
        <h3 className="font-bold text-4xl text-gray-500">
          {cuisines?.join(", ")} - {costForTwoMessage}
        </h3>
      </div>
      {/* Categories accordions */}
      {categories.map((category, index) => (
        // Controlled Component
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          setHideIndex={() => setShowIndex(null)}
        />
      ))}

      {/* <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - ₹{" "}
            {item?.card?.info?.defaultPrice / 100 ||
              item?.card?.info?.price / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};
export default RestaurantMenu;

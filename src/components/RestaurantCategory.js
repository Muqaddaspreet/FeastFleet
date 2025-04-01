import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({
  data,
  showItems,
  setShowIndex,
  setHideIndex,
}) => {
  // const [showItems, setShowItems] = useState(false);

  console.log(data);
  return (
    <div className="">
      {/* Header */}
      <div className="w-[60%] mx-auto my-8 shadow-lg p-4">
        <div
          className="flex justify-between"
          onClick={() => {
            // setShowItems(!showItems);
            showItems ? setHideIndex() : setShowIndex();
          }}
        >
          <span className="font-bold text-3xl">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="cursor-pointer">🔽</span>
        </div>

        {/* Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;

import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="py-8 my-2 border-b flex justify-between border-b-gray-400 flex-col md:flex-row"
        >
          <div className="flex flex-wrap">
            <p>{item.card.info.isVeg ? "🟢" : "🔴"}</p>
            <div className="py-2 font-bold text-2xl">
              <span className="">{item.card.info.name} - </span>
              <span className="">
                ₹{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="font-bold text-green-800">
              {item.card.info.ratings.aggregatedRating.rating !== undefined
                ? "⭐" + item.card.info.ratings.aggregatedRating.rating
                : ""}
            </p>
            <p className="font-semibold text-gray-500 text-lg">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-52 shrink-0 h-52 ml-2 flex justify-center relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt="Not available"
              className="w-[100%] h-[100%] object-cover rounded-3xl"
            />
            <button className="absolute bottom-[-16px] text-green-700 text-3xl cursor-pointer bg-white font-bold hover:bg-gray-300 px-[20%] py-2 shadow-lg border border-gray-300 rounded-xl hover:scale-105 transition-transform duration-200">
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;

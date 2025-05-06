import RestaurantCard, { withNewlyOnboardedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardNewlyOnboarded = withNewlyOnboardedLabel(RestaurantCard);

  useEffect(() => {
    // console.log("UseEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.6527936&lng=74.82439389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional rendering
  // if (listOfRestaurants.length === 0) {
  //   // return <h1>Loading.....</h1>;
  //   return <Shimmer />;
  // }
  // console.log("Body rendered");

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter flex justify-center">
        <div className="search my-4 p-4">
          <input
            type="text"
            data-testid="searchInput" // To find this input box by .getByTestId() for testing purposes.
            placeholder="Search for restaurants"
            className="px-4 py-1 border font-bold outline:none focus:outline-none border-gray-400 text-xl shadow-lg hover:scale-95"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className=" border border-gray-400 px-4 py-2 text-xl font-bold m-4 rounded-4xl hover:bg-amber-300 shadow-lg cursor-pointer hover:scale-95 hover:text-amber-900 hover:border-0"
            onClick={() => {
              // Filter the restaurant cards and update the UI
              // console.log(searchText);
              const searchFiltered = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(searchFiltered);
              // console.log(window);
            }}
          >
            Search
          </button>
        </div>
        <div className="search p-4 flex items-center">
          <button
            className="px-4 py-2 text-xl font-bold border border-gray-400 rounded-4xl hover:bg-amber-300 shadow-lg cursor-pointer hover:scale-95 hover:text-amber-900 hover:border-0"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated restaurants
          </button>
        </div>
        <div className="search p-4 flex items-center">
          <input
            type="text"
            placeholder="Enter Username"
            className="px-4 py-1 border font-bold outline:none focus:outline-none border-gray-400 text-xl shadow-lg hover:scale-95"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="res-container flex flex-wrap justify-center">
        {/*res-card-component*/}
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {
              /* If the restaurant is newly onboarded, then add a label to it. */
              restaurant.info.isNewlyOnboarded ? (
                <RestaurantCardNewlyOnboarded resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )
            }
          </Link>
        ))}
        {/* {console.log(filteredRestaurants)} */}
      </div>
    </div>
  );
};

export default Body;

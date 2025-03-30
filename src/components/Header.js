import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // let btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("UseEffect called");
  }, [btnNameReact]);

  return (
    <div className="flex justify-between shadow-lg m-2">
      <div className="Logo-container">
        <Link to={"/"}>
          <img className="w-56 m-1 hover:scale-[103%]" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 items-center">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4 text-2xl font-bold hover:text-amber-800 cursor-pointer">
            <Link to="/">🏠Home</Link>
          </li>
          <li className="px-4 text-2xl font-bold hover:text-amber-800 cursor-pointer">
            <Link to="/about">🪧About Us</Link>
          </li>
          <li className="px-4 text-2xl font-bold hover:text-amber-800 cursor-pointer">
            <Link to="/contact">📞Contact Us</Link>
          </li>
          <li className="px-4 text-2xl font-bold hover:text-amber-800 cursor-pointer">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 text-2xl font-bold hover:text-amber-800 cursor-pointer">
            🛒Cart
          </li>
          <button
            className="login px-4 text-2xl font-bold hover:text-amber-800 cursor-pointer"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >
            🔐{btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

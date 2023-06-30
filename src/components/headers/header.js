import { useState } from "react";
import Logo from "./logo";
import SearchBar from "./SearchBar";
import Avatar from "./avatar";
import Helpers from "./helpers";
import ShopBasket from "./shopBasket";
export default function MainHeader(props) {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <nav className="fixed z-30 w-full bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800 ">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <Logo />
              <SearchBar />
            </div>
            <div className="flex items-center">
              <ShopBasket />
              <Helpers click={props.click} />
              <div className="flex items-center ml-3">
                <Avatar />
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mx-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

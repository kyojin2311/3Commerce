import { Outlet } from "react-router-dom";
import MainHeader from "./components/headers/header";
import { useEffect, useState } from "react";
export default function Layout() {
  const [light, setLight] = useState(true);
  // const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);
  // console.log(isDarkOS);
  // useEffect({}, []);
  const lightHandler = () => {
    setLight(!light);
  };
  return (
    <>
      <div className={`${light ? " " : "dark"} App`}>
        <MainHeader click={lightHandler} />
        <div className="flex pt-20 bg-gray-50 dark:bg-gray-900 h-full overflow-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
}

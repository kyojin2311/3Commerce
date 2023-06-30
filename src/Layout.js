import { Outlet } from "react-router-dom";
import MainHeader from "./components/headers/header";
import { useState } from "react";
export default function Layout() {
  const [light, setLight] = useState(true);
  const lightHandler = () => {
    setLight(!light);
  };
  return (
    <>
      <div className={`${light ? " " : "dark"} App`}>
        <MainHeader click={lightHandler} />
        <div className="flex pt-20 overflow-hidden bg-gray-50 dark:bg-gray-900">
          <Outlet />
        </div>
      </div>
    </>
  );
}

import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export default function Logo() {
  return (
    <>
      <Link to="/" className="flex ml-2 md:mr-24 ">
        <img src={logo} className="h-12 mr-3 dark:fill-white" alt="PageLogo" />
      </Link>
    </>
  );
}

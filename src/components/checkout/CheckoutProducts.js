import photo from "../../assets/carr.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
export default function CheckOutProducts() {
  return (
    <>
      <li class="ml-6 grid grid-cols-3">
        <div className="col-span-1">
          <img src={photo} />
        </div>
        <div className="col-span-2 items-center ml-3">
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            LAMBORGHINI EDVENTADOR
            {/* <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
              Latest
            </span> */}
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Released on January 13th, 2022
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-800 bg-blue-100 border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 rounded dark:bg-blue-900 dark:text-blue-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            <FontAwesomeIcon icon={faMoneyBill} className="mr-2" />
            Buy
          </a>
        </div>
      </li>
    </>
  );
}

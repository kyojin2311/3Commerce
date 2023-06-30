import { useDispatch, useSelector } from "react-redux";
import car1 from "../../assets/car1.jpg";
import { addToCart } from "../../slice/shoppingSlice";

const car = [
  {
    id: "e1",
    name: "Lamborghini1",
    price: 519,
  },
  {
    id: "e2",
    name: "Lamborghini2",
    price: 529,
  },
  {
    id: "e3",
    name: "Lamborghini3",
    price: 539,
  },
  {
    id: "e4",
    name: "Lamborghini4",
    price: 549,
  },
  {
    id: "e5",
    name: "Lamborghini5",
    price: 559,
  },
  {
    id: "e6",
    name: "Lamborghini6",
    price: 569,
  },
];
export default function Products() {
  const dispatch = useDispatch();
  const products = car.map((c) => (
    <div
      key={c.id}
      className="col-span-1 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <img className="p-8 rounded-t-lg" src={car1} alt="product image" />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300 ">
            {c.name}
          </h5>
        </a>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${c.price}
          </span>
          <button
            onClick={() => {
              dispatch(addToCart({ id: c.id, name: c.name, price: c.price }));
            }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  ));
  return <>{products}</>;
}

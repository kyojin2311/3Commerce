import photo from "../../assets/carr.jpg";
import Products from "./Products";

export default function Home() {
  return (
    <>
      <div className="mb-5">
        <img
          className="h-auto max-w-full transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 mb-5"
          src={photo}
          alt="image description"
        />
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          <Products />
        </div>
      </div>
    </>
  );
}

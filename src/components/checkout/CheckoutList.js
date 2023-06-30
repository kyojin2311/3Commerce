import CheckOutHead from "./CheckoutHead";
import CheckOutProducts from "./CheckoutProducts";

export default function List() {
  return (
    <>
      <div className="lg:col-span-3 col-span-4">
        <CheckOutHead />
        <ol class="relative border-l border-gray-200 dark:border-gray-700 mt-5">
          <CheckOutProducts />
        </ol>
      </div>
    </>
  );
}

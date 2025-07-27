import ProductContainer from "../components/ProductContainer";
import ControlBar from "../components/ControlBar";
import Filters from "../components/Filters";

function ShopPage() {
  return (
    <div className="container mx-auto w-full">
      {/* header  */}
      <h1 className="italic text-center text-2xl underline underline-offset-3 ">
        Cool Shopper
      </h1>

      {/* filters */}
      <Filters />
      {/* sorting */}
      <ControlBar />

      {/* main  */}
      <ProductContainer />

    </div>
  );
}

export default ShopPage;

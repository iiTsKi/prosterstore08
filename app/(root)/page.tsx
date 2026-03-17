import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/products.action";
import { LIMITED_DISPLAY } from "@/lib/constants";

export const metadata = {
  title: "Home",
};
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const HomePage = async () => {
  const LatestProduct = await getLatestProducts();
  // await delay(2000);
  // const HomePage = () => {
  return (
    <>
      <ProductList
        data={LatestProduct}
        title="Newest Arrivals"
        limit={LIMITED_DISPLAY}
      />
    </>
  );
};

export default HomePage;

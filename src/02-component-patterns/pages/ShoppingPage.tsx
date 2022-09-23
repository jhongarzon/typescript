import { ProductCart } from "../components/ProductCart";
const ShoppingPage = () => {
  return (
    <>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCart />
      </div>
    </>
  );
};

export default ShoppingPage;

import Product from "./Product";
const Main = (props) => {
  const { products, onAdd, onRemove,cartItems } = props;
  return (
    <div className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <Product
            onAdd={onAdd}
            onRemove={onRemove}
            item = {cartItems.find((x) => x.id === product.id)}
            key={product.id}
            product={product}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default Main;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchedProducts from "./utils/products";
import { productsSelector } from "./redux/selectors";
import { setProducts } from "./redux/actions/products";

function App() {
  const dispatch = useDispatch();
  const products = useSelector(productsSelector);

  useEffect(() => {
    dispatch(setProducts(fetchedProducts));
  }, [dispatch]);

  return (
    <div
      style={{
        display: "flex",
        gap: "24px",
        justifyContent: "center",
        flexWrap: "wrap",
        maxHeight: "200px",
      }}
    >
      {products &&
        products.length > 0 &&
        products.map((product) => {
          return (
            <div
              key={product.id}
              style={{
                display: "flex",
                flexDirection: "column",
                border: "1px solid black",
                justifyContent: "space-between",
              }}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{
                  objectFit: "contain",
                }}
              />
              <p
                style={{
                  alignSelf: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                {product.title}
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default App;

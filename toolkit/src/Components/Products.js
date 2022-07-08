import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/cartSlice";
import { fetchProducts } from "../redux/productSlice";
import { STATUSES } from "../redux/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.product);
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());

    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);

  const handleAdd = (product) => {
    const local = localStorage.getItem("cartItem") || "[]";
    const cartArray = [...JSON.parse(local)];
    dispatch(add(product));
    cartArray.push(product);
    localStorage.setItem("cartItem", JSON.stringify(cartArray));
  };

  if (status === STATUSES.LOADING) {
    return <h2>LOADING....</h2>;
  }
  if (status === STATUSES.ERROR) {
    <h2>Something went wrong</h2>;
  }

  return (
    <div className="productsWrapper">
      {data.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn" onClick={() => handleAdd(product)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;

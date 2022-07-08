import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, updated } from "../redux/cartSlice";

const Cart = () => {
  // const [products,setProducts] = useState(()=>{

  // })

  const dispatch = useDispatch();
  let products = useSelector((state) => {
    console.log("abcdc", state);
    return state.cart;
  });

  console.log(products);

  useEffect(() => {
    if (products.length === 0) {
      console.log("check product");
      const cached = JSON.parse(localStorage.getItem("cartItem"));
      console.log(cached);
      dispatch(updated(cached));
    }
  }, []);

  const handleRemove = (id) => {
    const removeLocal = JSON.parse(localStorage.getItem("cartItem"));
    dispatch(remove(id));
    const filterLocalArray = removeLocal.filter((item) => item.id !== id);
    localStorage.setItem("cartItem", JSON.stringify(filterLocalArray));
  };

  console.log("cartComponentMounted");

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((product) => (
          <div className="cartCard" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button className="btn" onClick={() => handleRemove(product.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;

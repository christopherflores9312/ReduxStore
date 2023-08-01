import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateCartQuantity } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {
  const dispatch = useDispatch(); // Get dispatch function
  const cart = useSelector(state => state.cart); // Access state

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  const handleAddToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch(updateCartQuantity(_id, parseInt(itemInCart.purchaseQuantity) + 1)); // Dispatch an action
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch(addToCart({ ...item, purchaseQuantity: 1 })); // Dispatch an action
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <div>
        <div>{quantity} {pluralize("item", quantity)} in stock</div>
        <span>${price}</span>
      </div>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
}

export default ProductItem;

export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_MULTIPLE_TO_CART = "ADD_MULTIPLE_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY";
export const TOGGLE_CART = "TOGGLE_CART";
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";

export const updateProducts = (products) => {
  return {
    type: UPDATE_PRODUCTS,
    products
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    product
  };
};

export const addMultipleToCart = (products) => {
  return {
    type: ADD_MULTIPLE_TO_CART,
    products
  };
};

export const removeFromCart = (_id) => {
  return {
    type: REMOVE_FROM_CART,
    _id
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART
  };
};

export const updateCartQuantity = (_id, purchaseQuantity) => {
  return {
    type: UPDATE_CART_QUANTITY,
    _id,
    purchaseQuantity
  };
};

export const toggleCart = () => {
  return {
    type: TOGGLE_CART
  };
};

export const updateCategories = (categories) => {
  return {
    type: UPDATE_CATEGORIES,
    categories
  };
};

export const updateCurrentCategory = (currentCategory) => {
  return {
    type: UPDATE_CURRENT_CATEGORY,
    currentCategory
  };
};

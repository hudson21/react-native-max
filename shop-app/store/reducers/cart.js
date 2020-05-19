// Constans
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/constants";

// Models
import CartItem from "../../models/cart-item";

const initialState = {
  items: {},
  totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const productPrice = addedProduct.price;
      const productTitle = addedProduct.title;

      let updatedOrNewCartItem;

      if (state.items[addedProduct.id]) {
        // Already have the item in the cart
        updatedOrNewCartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          productPrice,
          productTitle,
          state.items[addedProduct.id].sum + productPrice
        );
      } else {
        // Add a new Item to the cart
        updatedOrNewCartItem = new CartItem(
          1,
          productPrice,
          productTitle,
          productPrice
        );
      }
      return {
        // Here we are not copying the state because we are already updating all the fields
        items: { ...state.items, [addedProduct.id]: updatedOrNewCartItem },
        totalAmount: state.totalAmount + productPrice,
      };
    case REMOVE_FROM_CART:
      const currentQuantity = state.items[action.productId].quantity;
      if (currentQuantity > 1) {
        // Need to reduce it. Not to erase it
      } else {
        const updatedCartItems = { ...state.items };
        delete updatedCartItems[action.productId];
      }
    default:
      return state;
  }
};

export default cartReducer;
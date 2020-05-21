import { DELETE_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT } from "./constants";

export const deleteProduct = (productId) => {
  return {
    type: DELETE_PRODUCT,
    productId,
  };
};

export const createProduct = (title, description, imageUrl, price) => {
  return {
    type: CREATE_PRODUCT,
    productData: {
      title,
      description,
      imageUrl,
      price,
    },
  };
};

export const updateProduct = (productId, title, description, imageUrl) => {
  return {
    type: UPDATE_PRODUCT,
    productId,
    productData: {
      title,
      description,
      imageUrl,
    },
  };
};

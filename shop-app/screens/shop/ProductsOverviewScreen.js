import React from "react";
import { FlatList, StyleSheet, Button } from "react-native";

// Redux
import { useSelector, useDispatch } from "react-redux";
import * as cartActions from "../../store/actions/cart";

// COmponents
import ProductItem from "../../components/shop/ProductItem";

// Constants
import Colors from "../../constants/Colors";

const ProductsOverviewScreen = ({ navigation: { navigate } }) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();

  const selectItemHandler = (id, title) => {
    navigate("ProductsDetailsScreen", {
      productId: id,
      producTitle: title,
    });
  };

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {
            selectItemHandler(itemData.item.id, itemData.item.title);
          }}
        >
          <Button
            color={Colors.primary}
            title="View Details"
            onPress={() => {
              selectItemHandler(itemData.item.id, itemData.item.title);
            }}
          />
          <Button
            color={Colors.primary}
            title="To Cart"
            onPress={() => {
              dispatch(cartActions.addToCart(itemData.item));
            }}
          />
        </ProductItem>
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default ProductsOverviewScreen;

import React from "react";
import { FlatList, StyleSheet } from "react-native";

// Redux
import { useSelector } from "react-redux";

// COmponents
import ProductItem from "../../components/shop/ProductItem";

const ProductsOverviewScreen = ({ navigation: { navigate } }) => {
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {
            navigate("ProductsDetailsScreen", {
              productId: itemData.item.id,
              producTitle: itemData.item.title,
            });
          }}
          onAddToCart={() => {}}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default ProductsOverviewScreen;

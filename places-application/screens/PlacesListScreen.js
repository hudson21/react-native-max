import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

// Redux
import { useSelector } from "react-redux";

// Components
import PlaceItem from "../components/PlaceItem";

const PlacesListScreen = (props) => {
  const places = useSelector((state) => state.places.places);

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <PlaceItem
          image={itemData.item.imageUri}
          title={itemData.item.title}
          address={null}
          onSelect={() =>
            props.navigation.navigate("PlaceDetailScreen", {
              placeTitle: itemData.item.title,
              placeId: itemData.item.id,
            })
          }
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default PlacesListScreen;

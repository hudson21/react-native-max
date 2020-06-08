import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

// Actions
import * as placesActions from "../store/places-actions";

// Redux
import { useSelector, useDispatch } from "react-redux";

// Components
import PlaceItem from "../components/PlaceItem";

const PlacesListScreen = (props) => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.places.places);

  useEffect(() => {
    dispatch(placesActions.loadPlaces());
  }, [dispatch]);

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <PlaceItem
          image={itemData.item.imageUri}
          title={itemData.item.title}
          address={itemData.item.address}
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

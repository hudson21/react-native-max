import { ADD_PLACE, SET_PLACES } from "./constants";

// Constants
import ENV from "../env";

// DB Actions
import { insertPlace, fetchPlaces } from "../helpers/db";

// FileSystem Functionality
import * as FileSystem from "expo-file-system";

export const loadPlaces = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchPlaces();
      dispatch({
        type: SET_PLACES,
        places: dbResult.rows._array,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const addPlace = (title, image, location) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${ENV.googleApiKey}`
    );

    if (!response.ok) {
      throw new Error("Something went wrong!!!");
    }

    const resData = await response.json();

    if (!resData.results) {
      throw new Error("Something went wrong!!!");
    }

    const address = resData.results[0].formatted_addres;
    const fileName = image.split("/").pop(); // It gets the filename by popping up the last index separated in an array by '/'
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      // It moves a file  from 'A' to 'B'
      await FileSystem.moveAsync({
        from: image, // Image Directory
        to: newPath,
      });
      const dbResult = await insertPlace(
        title,
        newPath,
        address,
        location.lat,
        location.lng
      );
      dispatch({
        type: ADD_PLACE,
        placeData: {
          id: dbResult.insertId,
          title,
          image: newPath,
          address,
          coords: {
            lat: location.lat,
            lng: location.lng,
          },
        },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

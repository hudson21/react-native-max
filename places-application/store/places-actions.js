import { ADD_PLACE } from "./constants";

// FileSystem Functionality
import * as FileSystem from "expo-file-system";

export const addPlace = (title, image) => {
  return async (dispatch) => {
    const fileName = image.split("/").pop(); // It gets the filename by popping up the last index separated in an array by '/'
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      // It moves a file  from 'A' to 'B'
      await FileSystem.moveAsync({
        from: image, // Image Directory
        to: newPath,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }

    dispatch({
      type: ADD_PLACE,
      placeData: {
        title,
        image: newPath,
      },
    });
  };
};

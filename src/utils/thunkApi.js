import { createAsyncThunk } from "@reduxjs/toolkit";

import getAxiosInstance from "./axios.config";


const API_endpoint = process.env.REACT_APP_API_ENDPOINT;

export const postData = createAsyncThunk(
    'create_mood',
    async (concatenatedData,dispatch) => {
        const formdata= new FormData()
        formdata.append('Title', concatenatedData.Title);
        formdata.append('image', concatenatedData.image.image);
      try {
        const response = await getAxiosInstance().post( `create_mood`,formdata);
        console.log(response,"response")
        dispatch(fetchData());
        return response.data
      } catch (error) {
        return error
      }
    }
)

export const fetchData = createAsyncThunk("fetch/mood_data", async (  ) => {
 
  try {

    const response = await getAxiosInstance().get("get_mood_data");
   
    return response.data.get_data;
  } catch (error) {
    return error;
  }
});
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
const API_endpoint = process.env.REACT_APP_API_ENDPOINT;
export const postData = createAsyncThunk(
    'create_mood',
    async (concatenatedData) => {
        // console.log({Title:concatenatedData.Title,image:concatenatedData.image.image},"pppouu")
        const formdata= new FormData()
        formdata.append('Title', concatenatedData.Title);
        formdata.append('image', concatenatedData.image.image);
      try {
        const response = await axios.post(API_endpoint + "create_mood",formdata);
        console.log(response,"response")
        return response.data
      } catch (error) {
        return error
      }
    }
)

export const fetchData = createAsyncThunk("fetch/mood_data", async () => {
  try {
    const response = await axios.get(API_endpoint + "get_mood_data");
   
    return response.data.get_data;
  } catch (error) {
    return error;
  }
});
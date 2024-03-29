import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postData, fetchData } from "../utils/thunkApi";

const initialState = {
  data: [],
  inputData: [],
  image:[],
  loading: false,
  postData: false,
};

export const dataSlice = createSlice({
  name: "motivation",
  initialState,
  reducers: {
    addInputData: (state, action) => {
      state.inputData = action.payload
    },
    imageUpload: (state, action) => {
      state.image = action.payload;
    },
    postDataFalse: (state, action) => {
      
      state.postData = action.payload==="false"  && false;
    },
  },
  extraReducers: (builder) => {
    // for getting data
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = true;
    });

    // Handle POST request success state
    builder.addCase(postData.fulfilled, (state, action) => {
      state.postData=true
    });
  },
});
export const { addInputData,imageUpload,postDataFalse } = dataSlice.actions;
export default dataSlice.reducer;



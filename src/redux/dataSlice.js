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
      console.log(action.payload,"action.payload")
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
      console.log(action.payload, "post");
      state.postData=true
    });
  },
});
export const { addInputData,imageUpload,postDataFalse } = dataSlice.actions;
export default dataSlice.reducer;


// export const insertData = (data) => async (dispatch) => {
//   try {
//     // Perform the data insertion operation here
//     // Example:
//     // const response = await axios.post('your-insert-api-url', data);
//     // Handle the response as needed

//     // Dispatch the fetchData action to trigger the GET API request
//     dispatch(fetchData());

//     // Optionally, you can return the response if needed
//     // return response;
//   } catch (error) {
//     // Handle errors
//     console.error('Error inserting data:', error);
//   }
// };

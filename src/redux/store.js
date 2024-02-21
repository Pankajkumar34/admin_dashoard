import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
const store=configureStore({
    reducer:{
        mood:dataSlice
    }
})
 export {store}
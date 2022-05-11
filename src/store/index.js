import { configureStore } from "@reduxjs/toolkit";
import dataSlise from "./slise/dataSlise";

export default configureStore({
    reducer:{
        post: dataSlise,
    }
})
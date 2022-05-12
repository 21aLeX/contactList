import { configureStore } from "@reduxjs/toolkit";
import dataSlise from "./slise/dataSlise";
import pagesSlise from "./slise/pagesSlise";

export default configureStore({
    reducer:{
        post: dataSlise,
        page: pagesSlise,
    }
})
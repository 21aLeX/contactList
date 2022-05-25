import { configureStore } from "@reduxjs/toolkit";
import dataSlise from "./slise/dataSlise";
import pagesSlise from "./slise/pagesSlise";
import searchSlise from "./slise/searchSlise";
import selectSlise from "./slise/selectSlise";

export default configureStore({
    reducer:{
        post: dataSlise,
        page: pagesSlise,
        select: selectSlise,
        search: searchSlise,
    }
})
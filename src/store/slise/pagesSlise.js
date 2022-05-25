import { createSlice } from "@reduxjs/toolkit";

const pagesSlise = createSlice({
    name: 'page',
    initialState: {
        page: 1,
        limit: 10,
        currentPage: 1,
    },
    reducers: {
        addPage(state, action) {
            state.page = Math.ceil(action.payload/state.limit)
        },
        setCurrentPage(state,action){
            state.currentPage = action.payload
        }
    }
})

export const {addPage,setCurrentPage} = pagesSlise.actions

export default pagesSlise.reducer
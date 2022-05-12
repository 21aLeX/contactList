import { createSlice } from "@reduxjs/toolkit";

const pagesSlise = createSlice({
    name: 'page',
    initialState: {
        page: 1,
        limit: 10,
    },
    reducers: {
        addPage(state, action) {
            state.page = Math.ceil(action.payload/state.limit)
            console.log(state.page)
        }
    }
})

export const {addPage} = pagesSlise.actions

export default pagesSlise.reducer
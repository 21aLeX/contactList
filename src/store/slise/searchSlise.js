import { createSlice } from "@reduxjs/toolkit";

const searchSlise = createSlice({
    name: 'search',
    initialState: {
        search: '',
    },
    reducers: {
        addSearch(state, action) {
            console.log(action.payload)
            state.search = action.payload
        }
    }
})

export const {addSearch} = searchSlise.actions

export default searchSlise.reducer
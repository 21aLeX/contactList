import { createSlice } from "@reduxjs/toolkit";

const dataSlise = createSlice({
    name: 'post',
    initialState: {
        post: []
    },
    reducers: {
        addPost(state, action) {
            state.post = action.payload
        }
    }
})

export const {addPost} = dataSlise.actions

export default dataSlise.reducer
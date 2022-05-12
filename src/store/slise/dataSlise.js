import { createSlice } from "@reduxjs/toolkit";

const dataSlise = createSlice({
    name: 'post',
    initialState: {
        post: []
    },
    reducers: {
        addPost(state, action) {
            console.log(action.payload)
            state.post.push(action.payload[0])
        }
    }
})

export const {addPost} = dataSlise.actions

export default dataSlise.reducer
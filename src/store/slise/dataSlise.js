import { createSlice } from "@reduxjs/toolkit";

const dataSlise = createSlice({
    name: 'post',
    initialState: {
        post: []
    },
    reducers: {
        addPost(state, action) {
            console.log(action)
            state.post.push(action)
            console.log(state)
        }
    }
})

export const {addPost} = dataSlise.actions

export default dataSlise.reducer
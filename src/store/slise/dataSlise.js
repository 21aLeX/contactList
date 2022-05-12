import { createSlice } from "@reduxjs/toolkit";

const dataSlise = createSlice({
    name: 'post',
    initialState: {
        post: []
    },
    reducers: {
        addPost(state, action) {
            for(let i = 0; i<100 ;i++){
            state.post.push(action.payload[i])
            }
        }
    }
})

export const {addPost} = dataSlise.actions

export default dataSlise.reducer
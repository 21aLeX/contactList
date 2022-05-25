import { createSlice } from "@reduxjs/toolkit";

const selectSlise = createSlice({
    name: 'select',
    initialState: {
        select: '',
    },
    reducers: {
        addSelect(state, action) {
            state.select = action.payload
        }
    }
})

export const {addSelect} = selectSlise.actions

export default selectSlise.reducer
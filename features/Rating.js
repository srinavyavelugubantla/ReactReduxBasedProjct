import React from 'react';
import { createSlice} from '@reduxjs/toolkit';
import { RatingData } from '../mockData/RatingData';

export const ratingSlice = createSlice({
    name: "users",
    initialState: {value: RatingData},
    reducers:{
        updateRating: (state, action) =>{
            state.value.push(action.payload)
        }
    }
})
export const {updateRating} = ratingSlice.actions;
export default  ratingSlice.reducer;
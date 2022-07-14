import React from 'react';
import { createSlice} from '@reduxjs/toolkit';
import { UserData } from '../mockData/MockData';

export const userSlice = createSlice({
    name: "users",
    initialState: {value: UserData},
    reducers:{
        addUser: (state, action) => {
            state.value.push(action.payload)
        },
        deleteUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id)
        },
        updateEmailAddress: (state, action) => {
            state.value.map((user) => {
            if(user.id === action.payload.id){
                user.email = action.payload.email
            }})
        },
        updateUserName: (state, action) =>{
            state.value.map((user) =>{
                if(user.id === action.payload.id){
                    user.name = action.payload.name
                }
            })
        }
    }
})
export const {addUser, deleteUser, updateUserName, updateEmailAddress} = userSlice.actions;
export default  userSlice.reducer;
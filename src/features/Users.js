import {createSlice} from '@reduxjs/toolkit';


export const usersSlice = createSlice({
    name:"users",
    initialState:{value:[]},
    reducers:{
        addUser:(state,action)=>{
            state.value.push(action.payload)
        }
    }
    })

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState:{count: 0},
    reducers:{
        increment: state =>{
            state.count = state.count + 1;
        },
        decrement: state =>{
            if(state.count > 0){
                state.count = state.count - 1;
            }else{
                state.count = 0;
            }
        },
        reset: state=>{
            state.count = 0;
        },
        oddNumberIncrease: state =>{
           if(state.count <= 100){
            state.count = state.count + 2;
           }else{
            state.count = state.count - 15 ;
           }
        }
        

    }
});
export const {increment,decrement,reset, oddNumberIncrease} = counterSlice.actions;
export default counterSlice.reducer;
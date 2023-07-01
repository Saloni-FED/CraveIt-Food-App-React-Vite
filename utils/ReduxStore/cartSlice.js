import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cartItems",
    initialState:{
        items:[],
    },
    // In reducer functions it takes two argument initialSate and action
    reducers:{
       addItem: (state,action)=>{
          state.items.push(action.payload)
       },
       deleteItem: (state)=>{
         state.items.pop();
       },
       clearItem: (state)=>{
        state.items = []
       }
    }
})

export const { addItem, deleteItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
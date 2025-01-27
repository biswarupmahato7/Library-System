import { createSelector, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers:{
        addBook: (state,action)=>{
            state.push(action.payload)

        }
    }
})

export const getBookSelector = createSelector(
        (state) => state.cart,
        (state) => state
)

export const {addBook} = cartSlice.actions
export default cartSlice.reducer
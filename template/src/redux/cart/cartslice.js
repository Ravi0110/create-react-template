import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        ADDCART: (state, action) => {
            state.cart = [...state, action.payload];
        },
        REMOVECART: (state, action) => {
            state.cart = state.filter(a => a !== action.payload);
        }
    },
})

// Action creators are generated for each case reducer function
export const { ADDCART, REMOVECART } = cartSlice.actions

export default cartSlice.reducer
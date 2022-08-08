import { createSlice } from "@reduxjs/toolkit";
import { items } from "../assets/items";


export const storeSlice = createSlice({
    name: 'store',
    initialState: {
        items: items,
        totalMoney: 100000000000,
        basket: {
            items: {},
            totalItem: 0,
            totalPrice: 0,
        }
    },
    reducers: {
        buyItem: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            state.totalMoney -= item.productPrice;
            item.count += 1;
            state.basket.totalItem += 1;
            state.basket.totalPrice += item.productPrice;
        },
        sellItem: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            state.totalMoney += item.productPrice;
            item.count -= 1;
            state.basket.totalItem -= 1;
            state.basket.totalPrice -= item.productPrice;
        }
    },
});

export const selectTotalMoney = state => state.store.totalMoney;
export const selectBasket = state => state.store.basket;
export const selectItems = state => state.store.items;

export const { setItemCount, buyItem, sellItem } = storeSlice.actions;
export default storeSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        lamps: {},
    },
    reducers: {
        incrementLampCount: (state, action) => {
            const lampId = action.payload;
            state.lamps[lampId]["count"] += 1;
        },
        decrementLampCount: (state, action) => {
            const lampId = action.payload;
            if (state.lamps[lampId]["count"] === 1) {
                delete state.lamps[lampId];
            } else {
                state.lamps[lampId]["count"] -= 1;
            }
        },
        addLampToCart: (state, action) => {
            const lamp = action.payload;
            state.lamps = { ...state.lamps, [lamp.id]: lamp };
        },
        removeLampFromCart: (state, action) => {
            const lampId = action.payload;
            delete state.lamps[lampId];
        },
        clearCart: (state) => {
            state.lamps = {};
        },
    },
});

export const {
    incrementLampCount,
    decrementLampCount,
    addLampToCart,
    removeLampFromCart,
    clearCart,
} = cartSlice.actions;

export const selectLampsInCart = (state) => state.lampsInCart.lamps;

export default cartSlice.reducer;

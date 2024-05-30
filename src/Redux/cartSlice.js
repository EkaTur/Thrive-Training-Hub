import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            const existingCartItem = state.cartItems.find(cartItem => cartItem.productId === action.payload.product.id);

            if (existingCartItem) {
                // Если элемент найден, обновляем количество и общую цену
                existingCartItem.quantity += action.payload.quantity;
                existingCartItem.totalPrice += action.payload.quantity * action.payload.product.price;
            } else {
                const timeId = new Date().getTime()
                state.cartItems.push({
                    productId: action.payload.product.id,
                    product: action.payload.product,
                    quantity: action.payload.quantity,
                    totalPrice: action.payload.quantity * action.payload.product.price,
                    id: timeId
                })
            }
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== action.payload.cartItemId)
        },
        decreaseItemQuantity: (state, action) => {
            const existingCartItem = state.cartItems.find(cartItem => cartItem.productId === action.payload.productId);

            if (existingCartItem) {
                existingCartItem.quantity -= 1;
                existingCartItem.totalPrice -= existingCartItem.product.price;

                if (existingCartItem.quantity === 0) {
                    state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== existingCartItem.id);
                }
            }
        }
    },
})

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
    return cartItems.totalPrice + total
    }, 0)
}

export const getTotalItems = state => {
    return state.cart.cartItems.reduce((total, cartItem) => {
        return total + cartItem.quantity;
    }, 0);
};

export const getCartItems = state => state.cart.cartItems;
export const { addItemToCart, removeItemFromCart, decreaseItemQuantity } = slice.actions;
export default slice.reducer;
export const initialState = {
    cart: [],
};
export const getBasketTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
            };
        case 'REMOVE_FROM_CART':
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            let newCart = [...state.cart];
            if (index > -1) {
                newCart.splice(index, 1);
                return {
                    ...state,
                    cart: newCart,
                };
            }
            else {
                console.warn(`Cant remove product (id: ${action.id}) as its not in cart`);
            }
        case 'CLEAR_CART':
            return {
                ...state,
                cart: [],
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;

    }
}
export default reducer;
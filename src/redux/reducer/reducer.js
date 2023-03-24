const InitialState = {
    carts: []
}
export const CartReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "ADD_CART":
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }
            break;
        default:
            return state

    }

}

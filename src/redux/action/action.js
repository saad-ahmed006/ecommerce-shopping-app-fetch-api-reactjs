export const Add = (item) => {
    return {
        type: 'ADD_CART',
        payload: item
    }
}
export const del = (item) => {
    return {
        type: 'DEL_CART',
        payload: item
    }
}
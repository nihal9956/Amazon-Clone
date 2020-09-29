const { ADD_TO_CART, REMOVE_FROM_CART, ADD_QUANTITY, REMOVE_QUANTITY, SET_FNAME } = require("./cartActionType");

export function addToCart(id){
    return{
        type:ADD_TO_CART,
        id
        
    }
}

export function removeFromCart(id){
    return{
        type:REMOVE_FROM_CART,
        id
    }
}

export function addQuantity(id){

    return {
        type:ADD_QUANTITY,
        id

    }
}

export function removeQuantity(id){

    return {
        type:REMOVE_QUANTITY,
        id

    }


}
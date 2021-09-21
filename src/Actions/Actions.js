import {ActionTypes} from "./ActionTypes";
const {ADD, SET, DELETE, REMOVE, REMOVE_ALL,SAVA_STATE, FETCH_DATA} = ActionTypes;

export const add_to_cart = (id) => {
    return {
        type: ADD,
        id
    }
}

export const delete_from_cart = (id) => {
    return {
        type: DELETE,
        id
    }
}

export const remove_product = (id) => {
    return {
        type: REMOVE,
        id
    }
}

export const remove_all_products = () => {
    return {
        type: REMOVE_ALL
    }
}

export const set_amount = (id, amount)=>{
    return {
        type: SET,
        payload: {id,amount}
    }
}
export const save_state = (cart)=>{
    return {
        type: SAVA_STATE,
        cart
    }
}


export const fetch_action = (data) =>{
    return {
        type: FETCH_DATA,
        payload: data
    }
}


import {ActionTypes} from "../Actions/ActionTypes";


const {ADD, SET, DELETE, REMOVE, REMOVE_ALL, FETCH_DATA} = ActionTypes;
const initValue = {
    totalCartAmount: 0,
    products: [],
    cart: []
};

export const Reducer = (state = initValue, action) => {
    let {totalCartAmount, cart} = state;
    const {type, id, amount} = action;
    const {payload} = action;

    switch (type){
        case ADD:
            cart.find(cart_item=>cart_item.id === id)?
                cart.find(cart_item=>cart_item.id === id).amount += 1:
                cart.push({id,amount:1});

            return {...state, totalCartAmount: totalCartAmount + 1, cart};
        case SET:

            console.log("in set case");
            console.log("id = ",payload.id, " amount = ",payload.amount);
            cart.find(e=>e.id === payload.id)?
                cart.find(e=>e.id===payload.id).amount = payload.amount:
                cart.push(payload);
            const sum = cart.map(item=>item.amount).reduce((x,y)=>x+y);
            return {
                ...state,
                totalCartAmount:sum,
                cart
            };

        case DELETE:
                cart.find(cart_item=>cart_item.id === id).amount === 1?
                    cart = cart.filter(cart_item=>cart_item.id !== id): // filter method doesn't mutate the original array
                    cart.find(cart_item=>cart_item.id === id).amount-=1;
            return {...state,totalCartAmount: totalCartAmount-1,cart};
        case FETCH_DATA:
            console.log("now fetching data");
            return {totalCartAmount:Number(0),products: action.payload, cart:[]};
        default:
            console.log("this is default case");
            return state;
    }

}
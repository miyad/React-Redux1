import {ActionTypes} from "../Actions/ActionTypes";


const {ADD, SET, DELETE, REMOVE, REMOVE_ALL,SAVA_STATE, FETCH_DATA} = ActionTypes;
const initValue = {
    totalCartAmount: 0,
    products: [],
    cart: []
};

export const Reducer = (state = initValue, action) => {
    let {totalCartAmount, cart} = state;
    const {type, id} = action;
    const {payload} = action;

    switch (type){
        case ADD:
            cart.find(cart_item=>cart_item.id === id)?
                cart.find(cart_item=>cart_item.id === id).amount += 1:
                cart.push({id,amount:1});
            localStorage.setItem("cartItems", JSON.stringify(cart));
            return {...state, totalCartAmount: totalCartAmount + 1, cart};
        case SET:
            cart.find(e=>e.id === payload.id)?
                cart.find(e=>e.id===payload.id).amount = payload.amount:
                cart.push(payload);
            localStorage.setItem("cartItems", JSON.stringify(cart));
            return {
                ...state,
                totalCartAmount: cart.length?cart.map(item=>item.amount).reduce((prev,cur)=>prev+cur):0,
                cart
            };

        case DELETE:
                cart.find(cart_item=>cart_item.id === id).amount === 1?
                    cart = cart.filter(cart_item=>cart_item.id !== id): // filter method doesn't mutate the original array
                    cart.find(cart_item=>cart_item.id === id).amount -= 1;
            localStorage.setItem("cartItems", JSON.stringify(cart));
            return {...state, totalCartAmount: totalCartAmount-1, cart};
        case REMOVE:
            cart = cart.filter(cart_item=>cart_item.id !== id);
            localStorage.setItem("cartItems", JSON.stringify(cart));
            return {
                ...state,
                totalCartAmount: cart.length? cart.map(cart_item=>cart_item.amount).reduce((prev,cur) =>prev+cur): 0,
                cart
            }
        case REMOVE_ALL:
            localStorage.setItem("cartItems", JSON.stringify([]));
            return{
                ...state,
                totalCartAmount: 0,
                cart: []
            }
        case SAVA_STATE:
            return{
                ...state,
                totalCartAmount: action.cart.length? action.cart.map(cart_item=>cart_item.amount).reduce((prev,cur)=>prev+cur):0,
                cart: action.cart

            }
        case FETCH_DATA:
            return {...state,totalCartAmount:totalCartAmount?totalCartAmount:Number(0),products: action.payload};
        default:
            return state;
    }

}
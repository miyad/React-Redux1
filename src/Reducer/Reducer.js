import {ActionTypes} from "../Actions/ActionTypes";

const {ADD,DELETE,REMOVE,REMOVE_ALL,FETCH_DATA} = ActionTypes;
const initValue = {
    totalCartAmount: 0,
    products: [

    ],
    cart: [

    ]
};

export const Reducer = (state = initValue, action) => {

    switch (action.type){
        case ADD:
            console.log("this is add case");
            return state;
        case DELETE:
            console.log("this is delete case");
            return state;
        case FETCH_DATA:
            console.log("now fetching data");
            return {totalCartAmount:Number(0),products: action.payload, cart:[]};
        default:
            console.log("this is default case");
            return state;
    }

}
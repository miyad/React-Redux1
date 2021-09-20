import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {add_to_cart,delete_from_cart} from "../../Actions/Actions";

const AddCart = ({id}) => {

    const dispatch = useDispatch();
    const {cart} = useSelector(state => state);
    const addHandler = (e) => {
        e.preventDefault();
        dispatch(add_to_cart(id));
    }
    const deleteHandler = (e) => {
        e.preventDefault();
        dispatch(delete_from_cart(id));
    }
    return (
        <div className="bg-green-500 rounded-md font-semibold text-white text-lg">
            {
                cart.find(cart_item=>cart_item.id === id)?
                    <div className="flex justify-evenly p-2">
                        <div
                            onClick={e=>deleteHandler(e)}
                            className="bg-gray-600 px-4 rounded-full cursor-pointer"
                        >
                            -
                        </div>

                        <div>
                            {cart.find((cart_item)=>cart_item.id===id)
                                ? cart.find((obj) => obj.id === id).amount
                                : 0}
                        </div>
                        <div
                            onClick={e=>addHandler(e)}
                            className="bg-gray-600 px-4 rounded-full cursor-pointer"
                        >
                            +
                        </div>
                    </div>
                    :
                <div onClick={e => addHandler(e)}
                     className={"cursor-pointer rounded-md bg-green-500 text-center p-2"}>
                    <div className="">
                        <div>Add to Cart</div>
                    </div>
                </div>
            }
        </div>
    );
};

export default AddCart;

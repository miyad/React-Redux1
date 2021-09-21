import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import deleteLogo from '../../Logo/delete.png';
import {remove_product, set_amount} from "../../Actions/Actions";

const CartItem = ({id, amount}) => {
    const dispatch = useDispatch();
    const {products, cart} = useSelector(state => state);
    const handleInputChange = (e) => {
        if(e.target.value === "0")
        {
            dispatch(remove_product(id));
            return;
        }
        const val = Number(e.target.value ? e.target.value : cart.find(item=>item.id===id).amount);


        dispatch(set_amount(id,val));
    };
    const { title, price, image } = products.find((e) => e.id === id);
    return (
        <div
            className={
                "rounded-md grid grid-cols-12 justify-start items-end my-4 p-2 bg-blue-200 text-lg"
            }
        >
            <div className="col-span-6 flex items-center justify-between">
                <div>{title}</div>
                <img src={image} className="w-20 h-20" alt={""}/>
            </div>

            <div className="col-span-3 flex flex-col">
                <div className=" flex justify-start px-3.5">
                    <div className="">${price}</div>
                </div>
                <div className="px-2 flex">
                    <div className="px-1">x</div>
                    <input
                        onChange={(e) => handleInputChange(e)}
                        value={cart.find(e=>e.id===id).amount}
                        min={0}
                        step={1}
                        type={"number"}
                        className="w-full rounded"
                    />
                </div>
            </div>
            <div className="col-span-2 ">= ${(price*amount).toFixed(2)}</div>
            <img onClick={() => dispatch(remove_product(id)) } src={deleteLogo} className="cursor-pointer col-span-1 w-7 py-2" alt={"o"}/>
        </div>
    );
};

export default CartItem;

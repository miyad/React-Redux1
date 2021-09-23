import React from 'react';
import {Link} from "react-router-dom";

import SelectedItem from '../SelectedItem/SelectedItem';
import {useDispatch} from "react-redux";
import {remove_all_products} from "../../Actions/Actions";
import {getTotal} from "../../HelperMethods/getTotal";

const Checkout = () => {
    const dispatch = useDispatch();
    const cart = JSON.parse(localStorage.getItem("cartItems"));
    const products = JSON.parse(localStorage.getItem("fakeApi"));

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="font-bold text-lg">Your Order is Placed!</div>
            <div className=" max-h-96 overflow-auto">
                {cart.map((item,index)=><SelectedItem id={item.id} amount={item.amount} key={index}/>)}
            </div>
            <div className="text-xl flex justify-between w-72 mt-2">
                <div className="">
                    <div>Total</div>
                </div>
                <div>${getTotal(cart,products)}</div>
            </div>
            <Link to="/">
                <button onClick={() => dispatch(remove_all_products())} className="bg-blue-700 font-bold text-white cursor-pointer mt-6 p-2 rounded hover:bg-black focus:ring-blue-400" >Go Home</button>
            </Link>
        </div>
    );
}

export default Checkout;

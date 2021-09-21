import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import cartLogo from "../../Logo/cart.png";
import {useDispatch, useSelector} from "react-redux";
import CartItem from "../CartItem/CartItem";
import {remove_all_products} from "../../Actions/Actions";



const Modal = () => {
    const dispatch = useDispatch();
    const {totalCartAmount, products, cart} = useSelector(state => state);
    const getTotal = () => {
        let sum = 0;
        cart.map(
            (e) =>
                (sum += Number(
                    Number(e.amount) * Number(products.find((p) => p.id === e.id).price)
                ))
        );
        return sum.toFixed(2);
    };

    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <div
                onClick={()=>setShowModal(true)}
                className="grid grid-cols-2 justify-end items-end cursor-pointer"
            >
             <img src={cartLogo} alt="cart"/>
             {totalCartAmount}
            </div>
            {showModal ? (
                <div>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 m-auto rounded-lg shadow-lg  w-5/6 content-center bg-white">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold mx-4">Cart Items</h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent  text-red-600 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        x
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative px-6 flex flex-col justify-end">
                                    <div className="my-4 text-blueGray-500 w-screen leading-relaxed">
                                        {cart.length > 0 ? (
                                            <p>Item details</p>
                                        ) : (
                                            <p>Cart is Empty!</p>
                                        )}
                                    </div>
                                    <div className="overflow-y-scroll max-h-72 md:max-h-96 min-w-60">
                                        {cart.map((product, index) => (
                                            <CartItem
                                                id={product.id}
                                                amount={product.amount}
                                                key={index}
                                            />
                                        ))}
                                    </div>
                                    {cart.length > 0 ? (
                                        <div>
                                            <div className="grid grid-cols-2 mx-4 md:grid-cols-8">
                                                <div className="md:col-span-5 flex justify-end">Total</div>
                                                <div className={" md:col-span-2 flex justify-end"}>
                                                    $ {getTotal()}
                                                </div>
                                            </div>
                                        </div>
                                    ) : null}
                                    {/*<input  onChange={(e)=>handleInputChange(e)} value={inputValue}  min={1} step={1} type={"number"} className={"bg-gray-100 outline-black w-28  mx-12"}/>*/}
                                </div>
                                {/*footer*/}

                                <div className=" p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    {cart.length > 0 ? (
                                        <div className="grid grid-cols-4">
                                            <button
                                                className={
                                                    "bg-red-500 col-span-2 p-2 mx-4  text-md rounded text-white"
                                                }
                                                onClick={() => {
                                                    if(window.confirm("Are you sure to clear the cart?"))
                                                        dispatch(remove_all_products());
                                                }}
                                            >
                                                Clear Cart
                                            </button>
                                            <Link
                                                className="bg-gray-700 mx-4 flex justify-center  col-span-2 text-md rounded text-white"
                                                to="/checkout"
                                            >
                                                <button className="rounded">Checkout</button>
                                            </Link>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black" />
                </div>
            ) : null}
        </div>
    );
};

export default Modal;

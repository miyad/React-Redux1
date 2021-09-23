import React from "react";
import {getTotal} from "../../HelperMethods/getTotal";

const SelectedItem = ({ id, amount }) => {
    const products= JSON.parse(localStorage.getItem("fakeApi"));
    const product = products.find(product => product.id === id);
    const { title, price, image } = product;

    return (
        <div
            className={
                "rounded-md grid grid-cols-5 justify-start items-end mx-4 my-4 p-2 bg-gray-300 text-lg"
            }
        >
            <div className="col-span-3 flex items-center justify-between">
                <div className="w-48">{title}</div>
                <img src={image} className="w-20 h-20"  alt={"img"}/>
            </div>

            <div className="col-span-1 flex flex-col">
                <div className=" flex justify-start px-3.5">
                    <div className="">${price}</div>
                </div>
                <div className="px-2 flex">
                    <div className="px-1">x</div>
                    <div>
                        {amount}
                    </div>
                </div>
            </div>
            <div className="col-span-1">= ${getTotal([product],products)}</div>
        </div>
    );
};

export default SelectedItem;

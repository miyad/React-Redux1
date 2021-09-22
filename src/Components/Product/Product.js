import React from 'react';
import AddCart from "../AddCart/AddCart";

const Product = ({product}) => {

    const {id, title, image, price } = product;
    let shortTitle = title.substring(0, 30);
    return (
        <div className="h-96 grid  grid-rows-1 items-start mx-8 my-12  bg-white shadow-xl rounded-lg p-6 w-64">
            <div className="font-semibold mb-2">{shortTitle}</div>
            <div className="h-5/6">
                <img src={image} className={"h-40 w-auto"}  alt={"product"}/>
            </div>
            <br />
            <div className="mb-4">$ {price}</div>
            <AddCart id={id}/>
        </div>
    );
};

export default Product;

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {FetchData} from "../../Actions/FetchData";
import Loading from "../Loading/Loading";
import Navbar from "../Navbar/Navbar";
import Product from "../Product/Product";

const Home = () => {

    const dispatch = useDispatch();
    const {products} = useSelector(state => state);

    useEffect(() => {
            dispatch(FetchData);
    }, [dispatch]);
    


    return (

        <div className={"flex flex-cols-1"} >
            <Navbar/>
            <div className={"mt-16 md:mt-24 md:py-12  flex flex-wrap justify-evenly bg-gray-100 mx-4 md:px-24"}>
            {
                products.length > 0 ?
                products.map((product,index)=><div key={index}><Product product={product}/></div>)
                : <Loading/>
            }
            </div>
        </div>
    );
};

export default Home;

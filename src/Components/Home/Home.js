import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {FetchData} from "../../Actions/FetchData";
import Loading from "../Loading/Loading";
import Navbar from "../Navbar/Navbar";

const Home = () => {

    const dispatch = useDispatch();
    const {products} = useSelector(state => state);

    useEffect(() => {
            dispatch(FetchData);
    }, [dispatch]);
    


    return (

        <div>
            <Navbar/>
            {
                products.length > 0 ?
                products.map((user,index)=><div key={index}>Address: {user.address} <br/> name: {user.name}</div>)
                : <Loading/>
            }
        </div>
    );
};

export default Home;

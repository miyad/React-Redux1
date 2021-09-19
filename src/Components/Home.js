import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Home = () => {

    const dispatch = useDispatch();
    const users = useSelector(
        state => {
            console.log("sata = ",state);
            return state;
        }
    )

    return (
        <div>
            This is home page!
            <button onClick={()=>dispatch({type:"ADD"})}>
                Click me
            </button>
            {
                users.map((user,index)=><div key={index}>Address: {user.address} <br/> name: {user.name}</div>)
            }
        </div>
    );
};

export default Home;

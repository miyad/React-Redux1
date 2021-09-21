import axios from 'axios';
import {fetch_action} from "./Actions";
export const FetchData = async(dispatch)=>{
    const url = "https://fakestoreapi.com/products";
    if(!localStorage.getItem("fakeApi")) {
        console.log("not cached");
        await axios.get(url)
            .then(response => {
                localStorage.setItem("fakeApi", JSON.stringify(response.data));
            })
            .catch(error => {
                console.log(error)
            });
    }
    dispatch(fetch_action(JSON.parse(localStorage.getItem("fakeApi"))));
}
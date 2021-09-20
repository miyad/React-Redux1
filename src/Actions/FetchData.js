import axios from 'axios';
import {fetch_action} from "./Actions";

export const FetchData = async(dispatch)=>{

    const url = "https://fakestoreapi.com/products";
    await axios.get(url)
        .then(response=>{
            console.log("data = ");
            console.log(response.data);
            dispatch(fetch_action(response.data));
        })
        .catch(error=>{
            console.log(error)});
}
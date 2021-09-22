import axios from 'axios';
import {fetch_action} from "./Actions";
function toDataUrl(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        let reader = new FileReader();
        reader.onloadend = function() {
            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}

export const FetchData = async(dispatch)=>{

    const url = "https://fakestoreapi.com/products";
    if(!localStorage.getItem("fakeApi")|| localStorage.getItem("fakeApi").length===0) {
        await axios.get(url)
            .then(response => {
                localStorage.setItem("fakeApi", JSON.stringify(response.data));
            })
            .catch(error => {
                console.log(error);
            });
    }

    dispatch(fetch_action(JSON.parse(localStorage.getItem("fakeApi"))));

   if(!localStorage.getItem("isLoaded"))
    {
        await axios.get(url)
            .then(response => {
                const {data} = response;
                let newData = [];
                data.map((item) =>(
                    toDataUrl(item.image, function(myBase64){
                        item.image = myBase64;
                        newData.push(item);
                        localStorage.setItem("fakeApi", JSON.stringify(newData));
                        return myBase64;
                    })
                ))

            })
            .catch(error => {
                console.log(error);
            });
        localStorage.setItem("isLoaded","true");
    }
}
import {ActionTypes} from "./ActionTypes";

export const fetch_action = (data) =>{
    return {
        type: ActionTypes.FETCH_DATA,
        payload: data
    }
}
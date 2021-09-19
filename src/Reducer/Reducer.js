
const initValue = [
    {
        name: "miyad",
        address: "Dhaka"
    },
    {
        name:"khairul",
        address: "Feni"
    }
]
export const Reducer = (state = initValue, action) => {

    switch (action.type){
        case "ADD":
            console.log("this is add case");
            return state;
        case "DELETE":
            console.log("this is delete case");
            return state;
        default:
            console.log("this is default case");
            return state;
    }

}
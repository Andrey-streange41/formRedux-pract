import actionTypes from "./actionsTypes";

export const incrementAction =  (payload) => {
   return { type: actionTypes.INCREMENT ,payload};
}

export const decrementAction =  (payload) => {
    return { type: actionTypes.DECREMENT ,payload};
 }

 export const resetAction =  (payload) => {
    return { type: actionTypes.RESET ,payload};
 }

 export const addTask = (payload) => {
    return { type: actionTypes.ADDTASK , payload};
 }

 export const removeTask = (payload) => {
   return { type: actionTypes.REMOVE_TASK , payload};
}

export const sendData = (payload)=>{
   return{ type: actionTypes.SEND_DATA, payload }
}
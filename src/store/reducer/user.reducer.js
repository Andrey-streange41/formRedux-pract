import actionTypes from "../../actions/actionsTypes";

const userState = {
    login: "",
    password: ""
}

export const userReducer = (oldState = userState, action) => {
    switch (action.type) {
        case actionTypes.SEND_DATA:
            return {...oldState, login: action.payload.login, password: action.payload.password}
        default:
            return oldState;
    }

}
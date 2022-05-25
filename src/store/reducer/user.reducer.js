const userState = {
    login: "",
    password: ""
}

export const userReducer = (oldState = userState, action) => {
    switch (action.type) {
        case 'login':
            return {...oldState, login: action.payload.login, password: action.payload.password}
        default:
            return oldState;
    }

}
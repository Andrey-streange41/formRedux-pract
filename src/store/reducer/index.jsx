const counterState={
    score:0
};

export const counterReducer = (oldState = counterState, action) =>{
    switch (action.type) {
        case 'increment':
            return {...oldState, score:oldState.score + 1};
        case 'decrement':
            return {...oldState, score:oldState.score - 1};
        case 'reset':
            return {...oldState,score:0}
        default:
            return oldState;;
    }
}
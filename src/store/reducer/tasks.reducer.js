import actionTypes from "../../actions/actionsTypes";

const taskState = {
  list: [],
};

export const taskReducer = (oldState = taskState, action) => {
  switch (action.type) {
    case actionTypes.ADDTASK:
      return { ...oldState, list: [...oldState.list, action.payload] };
    case actionTypes.REMOVE_TASK:
      return { ...oldState, list: oldState.list.filter(item => item.id !== action.payload.id) };
    default:
      return oldState;
  }
};

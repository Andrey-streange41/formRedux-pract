import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask ,removeTask} from "../../actions/actionCreator";

export const Tasks = (props) => {
  const [idField, setId] = useState();
  return (
    <div>
      <button
        onClick={() => {
          const add = addTask({
            title: "data",
            id: Math.random(),
            number: props.taskState.list.length,
          });
          props.dispatch(add);
        }}
      >
        add task
      </button>
      <button
        onClick={() => {
          const remove = removeTask({
            id: idField,
          });
          props.dispatch(remove)
        }}
      >
        remove task
      </button>
      <input onChange={e=>setId(e.target.value)} type="text" name="idField" />
      <h1>Content</h1>
      <ul>
        {props.taskState.list.length
          ? props.taskState.list.map((item) => (
              <li>
                <span>{item.number + 1}</span> {item.title}{" "}
              </li>
            ))
          : "empty list"}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.taskList);
  return {
    taskState: state.taskList,
  };
};

export default connect(mapStateToProps)(Tasks);

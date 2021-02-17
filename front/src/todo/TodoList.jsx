import React from "react";
import IconButton from "../template/IconButton";
import { connect } from "react-redux";
import { doneTask, removeTask } from "../reducers/todo/actions";

const TodoList = ({
  todo,
  handleMarkAsDone,
  handleMarkAsPending,
  handleRemove,
  dispatch,
}) => {
  const renderRows = () => {
    const list = todo.list || [];
    return list.map((todo) => (
      <tr key={todo._id}>
        <td className={todo.done ? "markedAsDone" : ""}>{todo.task}</td>
        <td>
          <IconButton
            style="success"
            icon="check"
            hide={todo.done}
            onClick={() => dispatch(doneTask(todo._id))}
          ></IconButton>
          <IconButton
            style="warning"
            icon="undo"
            hide={!todo.done}
            onClick={() => dispatch(doneTask(todo._id))}
          ></IconButton>
          <IconButton
            style="danger"
            icon="trash-o"
            hide={!todo.done}
            onClick={() => dispatch(removeTask(todo._id))}
          ></IconButton>
        </td>
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th> Descrição </th>
          <th className="tableActions"> Ações </th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({ todo: state.todo });

export default connect(mapStateToProps)(TodoList);

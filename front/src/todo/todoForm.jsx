import React, { useEffect } from "react";
import Grid from "../template/Grid";
import { connect } from "react-redux";
import IconButton from "../template/IconButton";

import { changeDescription, addTask, searchTask } from "../reducers/todo/actions";

const TodoForm = ({ todo, dispatch, handleAdd, handleSearch }) => {
  const { description } = todo;
  console.log(todo);

  const addToDo = task => {
      dispatch(addTask(task));
  }
  useEffect(() => {
    dispatch(searchTask()); 
  },[])

  return (
    <div role="form" className="todoForm">
      <Grid cols="12 9 10">
        <input
          placeholder="Adicione uma tarefa"
          id="description"
          className="form-control"
          onChange={(event) => dispatch(changeDescription(event.target.value))}
          value={description}
        />

        <Grid cols="12 3 2">
          <IconButton style="primary" icon="plus" onClick={() => addToDo(description)} />
          <IconButton
            style="info"
            icon="search"
            onClick={handleSearch}
          ></IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({ todo: state.todo });
export default connect(mapStateToProps)(TodoForm);

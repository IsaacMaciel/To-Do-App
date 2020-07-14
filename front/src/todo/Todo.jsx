import React from "react";

import PageHeader from "../template/pageHeader";
import TodoForm from "../todo/todoForm";
import TodoList from '../todo/TodoList';

export default () => {
  return (
    <div className="container">
      <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
      <TodoForm />
      <TodoList />
    </div>
  );
};

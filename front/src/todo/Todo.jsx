import React from "react";
import axios from "axios";

import PageHeader from "../template/pageHeader";
import TodoForm from "../todo/todoForm";
import TodoList from "../todo/TodoList";
import { useState } from "react";
import { useEffect } from "react";

const URL = "http://localhost:5000/api/todos";

export default (props) => {
    const [description, setDescription] = useState("");
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get(`${URL}?sort=-createdAt`).then((resp) => setList(resp.data));
    }, []);

    function add() {
        axios.post(URL, { description }).then();
        axios.get(`${URL}?sort=-createdAt`).then((resp) => setList(resp.data));
        refresh();
    }

    function refresh(description = "") {
        const search = description
            ? `&description__regex=/${description}/`
            : "";
        axios
            .get(`${URL}?sort=-createdAt${search}`)
            .then((resp) => setList(resp.data));
    }

    function handleChange(e) {
        setDescription(e.target.value);
    }

    function handleSearch() {
        refresh(description);
    }

    function handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`).then((resp) => refresh(description));
    }

    function handleClear() {
        axios.get(`${URL}?sort=-createdAt`).then((resp) => setList(resp.data));
        setDescription("");
    }

    function handleMarkAsDone(todo) {
        axios
            .put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then((resp) => refresh(description));
    }

    function handleMarkAsPending(todo) {
        axios
            .put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then((resp) => refresh(description));
    }

    return (
        <div className="container">
            <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
            <TodoForm
                description={description}
                handleChange={handleChange}
                handleAdd={add}
                handleSearch={handleSearch}
                handleClear={handleClear}
            />
            <TodoList
                handleMarkAsPending={handleMarkAsPending}
                handleMarkAsDone={handleMarkAsDone}
                handleRemove={handleRemove}
                list={list}
            />
        </div>
    );
};

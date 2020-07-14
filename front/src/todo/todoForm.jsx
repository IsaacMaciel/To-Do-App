import React from "react";
import Grid from "../template/Grid";
import IconButton from "../template/IconButton";

export default (props) => {
    return (
        <div role="form" className="todoForm">
            <Grid cols="12 9 10">
                <input
                    placeholder="Adicione uma tarefa"
                    id="description"
                    className="form-control"
                    onChange={props.handleChange}
                    value={props.description}
                />

                <Grid cols="12 3 2">
                    <IconButton
                        style="primary"
                        icon="plus"
                        onClick={props.handleAdd}
                    />
                    <IconButton
                        style="info"
                        icon="search"
                        onClick={props.handleSearch}
                    ></IconButton>
                    <IconButton
                        style="default"
                        icon="close"
                        onClick={props.handleClear}
                    ></IconButton>
                </Grid>
            </Grid>
        </div>
    );
};

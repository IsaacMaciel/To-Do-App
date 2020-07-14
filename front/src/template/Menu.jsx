import React from "react";

export default (props) => (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="navbar-header">
                <a href="#" className="navbar-brand">
                    <i className="fa fa-calendar-check-o"></i>To-Do-App
                </a>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/todo">
                            Tarefas
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">
                            Sobre
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
);

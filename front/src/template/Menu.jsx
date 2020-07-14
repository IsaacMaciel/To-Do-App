import React from "react";

export default (props) => (
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
    <div className="navbar-header">
        <a href="#" className="navbar-brand">
          <i className="fa fa-calendar-check-o"></i>To-Do-App
        </a>
      </div>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/todo">
              Tarefas
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">
              Sobre
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

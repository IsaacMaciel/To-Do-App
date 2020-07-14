import React from "react";

import About from "./about/About";
import Todo from "./todo/Todo";
import Menu from "./template/Menu";
import Routes from './routes';

function App() {
  return (
    <>
      <Menu />
      <Routes/>
    </>
  );
}

export default App;

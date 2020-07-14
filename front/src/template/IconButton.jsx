import React from "react";
import If from "./If";

export default (props) => (
  <If test={!props.hide}>
    <button className={"btn btn-" + props.style} onCLick={props.onCLick}>
      <i className={"fa fa-" + props.icon}></i>
    </button>
  </If>
);

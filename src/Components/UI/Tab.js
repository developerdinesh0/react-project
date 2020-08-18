import React from "react";
import { NavLink } from "react-router-dom";
const Tab = props => {
  return (
    <li className="nav-items">
      <NavLink to={props.tab.href}>{props.tab.name}</NavLink>
    </li>
  );
};
export default Tab;

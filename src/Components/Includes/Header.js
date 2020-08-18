import React from "react";
import Notifications from "react-notify-toast";

const Header = props => {
  return (
    <header>
      <div className="container-fluid">
        <Notifications />
        <div className="login_header">
          <h4>{props.lightText}</h4>
          <h3 className="login_heading">{props.boldText}</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;

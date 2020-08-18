import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="bottom_footer">
      <p className="text-center">
        {props.linkText ? props.linkText : ""}
        <Link to={props.pageName}>
          {props.pageName === "register"
            ? "Sign Up"
            : props.linkText ? "Sign In" : "Back to Sign in"}
        </Link>
      </p>
    </div>
  );
}

export default Footer;

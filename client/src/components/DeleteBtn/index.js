import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <span className="btn btn-info delete-btn" type="button" {...props} role="button" tabIndex="0">
      delete
    </span>
  );
}

export default DeleteBtn;

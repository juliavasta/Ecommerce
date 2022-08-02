import React from "react";
import { Link } from "react-router-dom";

function TextButton({ title, link, url, className, onClick }) {
  return (
    <p className={className}>
      {" "}
      {title}
      <Link to={`/${url}`}>{link}</Link>
    </p>
  );
}

export default TextButton;

import React from "react";

function formatName(props) {
  return props.user.firstName + props.user.lastName;
}

const FormatName = (props) => (
  <h1>Hello, {formatName(props)}</h1>
);

export default FormatName
import React from "react";

export default ({ handleChange }) => {
  return (
    <input
      className="search-bar"
      type="text"
      onChange={handleChange}
    />
  );
};

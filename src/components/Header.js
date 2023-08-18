import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    // <div>
    //   <div>Task Tracker Header</div>
    //   <div>{props.title}</div>
    // </div>
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClickHeader={onAdd}
      ></Button>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

//setting up types of props just like typescript
Header.prototypes = {
  title: PropTypes.string.isRequired,
};

//css in js
const headingStyle = {
  color: "red",
  backgroundColor: "black",
};

export default Header;

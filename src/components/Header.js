import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {

    const onClickHeader = () => {
        console.log("buttton click on header");
      };

  return (
    // <div>
    //   <div>Task Tracker Header</div>
    //   <div>{props.title}</div>
    // </div>
    <header className="header">
      <h1>{title}</h1>
      <Button color='green' text='Add' onClickHeader={onClickHeader}></Button>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

//setting up types of props just like typescript
Header.prototypes = {
    title: PropTypes.string.isRequired,
}

//css in js
const headingStyle = {
    color:'red',
    backgroundColor:'black',
}

export default Header;

import PropTypes from "prop-types";

const Button = ({ color, text, onClickHeader }) => {
  return (
    <button
      onClick={onClickHeader}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.protoTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

import React from "react";
import PropTypes from "prop-types";

function Button({ text, name, onClick }) {
  return (
    <button className="bg-red-500 p-4 m-3" onClick={onClick}>
      {text} - {name}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  name: "Valor defecto si no tiene name el boton",
};

export default Button;

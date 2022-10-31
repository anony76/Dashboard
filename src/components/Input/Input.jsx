import React from "react";
import "./Input.scss";
const Input = (props) => {
  const { id, type, placeholder, value, onChange, onBlur, style } = props;
  return (
    <div className="Input">
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        style={style}
      />
    </div>
  );
};

export default Input;

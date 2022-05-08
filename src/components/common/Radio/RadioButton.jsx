import React from "react";
import "./CheckBox.scss";

const RadioButton = ({ text, id, className, name, value, onChange, defaultValue, disabled }) => {
  let classes = 'form-group';
  if (className) {
    classes = className;
  }

  const inputName = name ? name : 'radio-name';
  const inputChecked = (defaultValue === 'true' || defaultValue === 'active' || defaultValue === true || defaultValue === 'yes' || defaultValue === 1) ? true : false;

  return (
    <div className={classes}>
      <label className="css-control css-radio" htmlFor={id}>
        { inputChecked ? 
          <input
            disabled = {disabled}
            type="radio"
            className="css-control-input mr-2"
            id={id}
            checked={true}
            name={inputName}
            value={value}
            onChange={(e) => onChange(e)}
          />
        : 
          <input
            disabled = {disabled}
            type="radio"
            className="css-control-input mr-2"
            id={id}
            name={inputName}
            value={value}
            onChange={(e) => onChange(e)}
          />
        }
        <span className="normal-text">{text}</span>
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default RadioButton;

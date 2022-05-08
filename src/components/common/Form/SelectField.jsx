import React from "react";
import chroma from "chroma-js";
import Select from "react-select";
import './SelectField.scss';

const fieldStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isSelected, isDisabled, isFocused }) => {
    const color = chroma('#76AEB7');
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
          ? "#76AEB7"
          : isFocused
            ? "#fff"
            : null,
      color: isDisabled
        ? "#ccc"
        : isSelected
          ? "#fff"
            ? "white"
            : "black"
          : "#76AEB7",
      cursor: isDisabled ? "not-allowed" : "default",
      ":hover": {
        color: "white",
        backgroundColor: "#76AEB7",
      },
      ":active": {
        ...styles[":active"],
        backgroundColor:
          !isDisabled && (isSelected ? "#76AEB7" : color.alpha(0.3).css()),
      },
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: "#fff",
    backgroundColor: "#76AEB7",
    borderRadius: 0,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: "#fff",
    backgroundColor: "#76AEB7",
    borderRadius: 0,
    ":hover": {
      backgroundColor: "#49868f",
      color: "white",
    },
  }),
};

const SelectField = (props) => {
  let className = props.className ? props.className : props.className ? props.className : 'mb-3 w-100';
  let defaultValue = props.defaultValue ? props.defaultValue : null;

  if ((defaultValue !== null) && (typeof defaultValue === 'object')) {
    defaultValue.color = '#76AEB7';
  }

  return (
    <React.Fragment>
      <div className={className}>
        {props.label &&
          <label htmlFor={props.id}>
            {props.label}
            {props.required && <span className="text-danger"> *</span>}
          </label>
        }

        {
          props.enabledValue ?
            <Select
              onClick={props.onClick}
              name={props.name ? props.name : ''}
              closeMenuOnSelect={true}
              value={props.value ? props.value : defaultValue}
              defaultValue={defaultValue}
              isMulti={props.multiSelect ? true : false}
              options={props.options}
              styles={fieldStyles}
              isSearchable={props.searchEnable ? true : false}
              id={props.id}
              onChange={props.onChange}
              isDisabled={props.disabled}
              menuPlacement={props.position ? props.position : 'bottom'}
            />
            :
            <Select
              onClick={props.onClick}
              menuPlacement={props.position ? props.position : 'bottom'}
              name={props.name ? props.name : ''}
              closeMenuOnSelect={true}
              defaultValue={defaultValue}
              isMulti={props.multiSelect ? true : false}
              options={props.options}
              styles={fieldStyles}
              isSearchable={props.searchEnable ? true : false}
              id={props.id}
              onChange={props.onChange}
              isDisabled={props.disabled}
            />
        }
      </div>
    </React.Fragment>
  );
};

export default SelectField;

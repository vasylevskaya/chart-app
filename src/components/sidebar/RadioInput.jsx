import React from "react";

const RadioInput = ({
  value,
  label,
  isChecked,
  onChange
}) => {
  return (
    <div className="chart-type-picker_input">
      <input
        type="radio"
        value={value}
        checked={isChecked}
        onChange={onChange}
      />
      <label>{label}</label>
    </div>
  )
}

export default RadioInput

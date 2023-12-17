import React from "react"
import "../styles/Selector.css"

const Selector = ({options, defaultValue, value, onChange}) => {
  return (
    <select
        className="selector"
        value={value}
        onChange={event => onChange(event.target.value)}
    >
        <option disabled value="">{defaultValue}</option>
        {options.map(option => 
            <option key={option.value} value={option.value}>
                {option.name}
            </option>
        )}
    </select>
  )
};

export default Selector;

import React from 'react';

const RadioButtons = ({label, options, required, name}) => {
  var requiredStar;
  if (required) {
    requiredStar = <span className="error">*</span>
  }

  return (
    <div>
      <label className="input-label"><strong>{label} {requiredStar}</strong></label>
      <ul className="radio-list">
        {Object.keys(options).map((t,i) => 
          <li key={i*-1} className="radio-unit">
            <input key={t} id={t} name={name} className="radio" type="radio" />
            <label key={i} htmlFor={t} className="radio-label">{t}</label>
          </li>
        )}
      </ul>
    </div>
  );
}

export default RadioButtons;
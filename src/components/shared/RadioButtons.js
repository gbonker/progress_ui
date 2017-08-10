import React from 'react';

const RadioButtons = ({label, options, required}) => {
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
            <label key={i} className="radio-label">
              <input key={t} name="radio-example" className="radio" type="radio" /> {t}
            </label>
          </li>
        )}
      </ul>
    </div>
  );
}

export default RadioButtons;
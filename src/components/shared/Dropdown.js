import React from 'react';

const Dropdown = ({label, options, required, inputMessage}) => {
  var requiredStar;
  var inputMessageHTML;
  if (required) {
    requiredStar = <span className="error">*</span>;
  }
  if (inputMessage) {
    inputMessageHTML = <span className="input-message">{inputMessage}</span>
  }

  return (
    <li className="input-unit">
      <label className="input-label"><strong>{label} {requiredStar}</strong></label>
      <div className="input-control">
        <select className="input-element input-element-base select" id="select-input-1">
          {Object.keys(options).map((t,i) => <option key={i} value={t}>{t}</option>)}
        </select>
        {inputMessageHTML}
      </div>
    </li>
  );
}

export default Dropdown;
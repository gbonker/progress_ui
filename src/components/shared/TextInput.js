import React from 'react';

const TextInput = ({label, required, inputMessage}) => {
  var requiredStar;
  var inputMessageHTML;
  if (required) {
    requiredStar = <span className="error">*</span>
  }
  if (inputMessage) {
    inputMessageHTML = <span className="input-message">{inputMessage}</span>
  }

  return (
    <li className="input-unit">
      <label className="input-label"><strong>{label} {requiredStar}</strong></label>
      <div className="input-control">
        <input 
          className="input-element input-element-base" 
          type="text" 
        />
        {inputMessageHTML}
      </div>
    </li>
  );
}

export default TextInput;
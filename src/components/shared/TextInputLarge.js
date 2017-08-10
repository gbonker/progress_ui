import React from 'react';

const TextInputLarge = ({label, required, inputMessage, placeholder}) => {
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
        <textarea type="text" className="input-element" placeholder={placeholder} rows="5" maxLength="4000" />
        {inputMessageHTML}
      </div>
    </li>
  );
}

export default TextInputLarge;
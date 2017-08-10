import React from 'react';

const Datepicker = ({label, required}) => {
  var requiredStar;
  if (required) {
    requiredStar = <span className="error">*</span>;
  }

  return (
    <li className="input-unit">
      <label className="input-label"><strong>{label} {requiredStar}</strong></label>
      <div className="input-control">
        <div className="input-container input-calendar">
          <span aria-hidden="true" className="glyphicons glyphicons-calendar"></span>
          <input type="text" placeholder="MM/DD/YY" className="input-element input-element-base" />
        </div>
      </div>
    </li>
  );
}

export default Datepicker;
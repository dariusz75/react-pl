import React from 'react';

import './EditEvent.css';
import { isValidNumberInput, isValidName, isValidHour, isValidMinutes } from './utilitiesAndFunctions';

const EditEvent = (props) => {

  const isFormValid = isValidName(props.name) && isValidHour(props.hour) && isValidMinutes(props.minutes);

  return <div className="edit-event">
    <div className="form-group">
      <label htmlFor="name">Task</label>
      <input
        id="name"
        className="form-control"
        type="text"
        name="name"
        value={props.name}
        onChange={(e) => props.onInputChange({ [e.target.name]: e.target.value })}
      />
    </div>
    <div className="form-group">
      <label htmlFor="hour">Hour</label>
      <input
        id="hour"
        className="form-control"
        type="tel"
        name="hour"
        value={props.hour}
        onKeyPress={(e) => isValidNumberInput(e)}
        onChange={(e) => props.onInputChange({ [e.target.name]: e.target.value })}
      />
    </div>
    <div className="form-group">
      <label htmlFor="minutes">Minutes</label>
      <input
        id="minutes"
        className="form-control"
        type="tel"
        name="minutes"
        value={props.minutes}
        onChange={(e) => props.onInputChange({ [e.target.name]: e.target.value })}
      />
    </div>
    <div className="edit-event__input-group">
      <button
        disabled={!isFormValid}
        className="btn btn-outline-light btn-lg btn-block"
        onClick={() => props.onSave()}>
        OK
      </button>
      <button
        disabled={!isFormValid}
        className="btn btn-outline-light btn-lg btn-block"
        onClick={() => props.onCancel()}>
        Cancel
      </button>
    </div>
  </div>;
};

export default EditEvent;
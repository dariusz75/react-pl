import React from 'react';

import './EditEvent.css';
import { isValidNumberInput, isValidName, isValidHour, isValidMinutes } from './utilitiesAndFunctions';

const EditEvent = (props) => {

  const isFormValid = isValidName(props.name) && isValidHour(props.hour) && isValidMinutes(props.minutes);

  return <div className="edit-event">
    <div className="edit-event__input-group">
      <label className="edit-event__input-group__label" htmlFor="name">Name</label>
      <input
        id="name"
        className="edit-event__input-group__input"
        type="text"
        name="name"
        value={props.name}
        onChange={(e) => props.onInputChange({ [e.target.name]: e.target.value })}
      />
    </div>
    <div className="edit-event__input-group">
      <label className="edit-event__input-group__label" htmlFor="hour">Hour</label>
      <input
        id="hour"
        className="edit-event__input-group__input"
        type="tel"
        name="hour"
        value={props.hour}
        onKeyPress={(e) => isValidNumberInput(e)}
        onChange={(e) => props.onInputChange({ [e.target.name]: e.target.value })}
      />
    </div>
    <div className="edit-event__input-group">
      <label className="edit-event__input-group__label" htmlFor="minutes">Minutes</label>
      <input
        id="minutes"
        className="edit-event__input-group__input"
        type="tel"
        name="minutes"
        value={props.minutes}
        onChange={(e) => props.onInputChange({ [e.target.name]: e.target.value })}
      />
    </div>
    <div className="edit-event__input-group">
      <button
        disabled={!isFormValid}
        className="edit-event__input-group__button"
        onClick={() => props.onSave()}>
        OK
      </button>
      <button
        className="edit-event__input-group__button"
        onClick={() => props.onCancel()}>
        Cancel
      </button>
    </div>
  </div>;
};

export default EditEvent;
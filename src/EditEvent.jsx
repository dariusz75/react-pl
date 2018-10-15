import React from 'react';

import './EditEvent.css';

const EditEvent = (props) => {

  return <div className="edit-event">
    <div className="edit-event__input-group">
      <label className="edit-event__input-group__label" htmlFor="name">Name</label>
      <input
        id="name"
        className="edit-event__input-group__input"
        type="text"
        name="name"
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
    <div className="edit-event__input-group">
      <label className="edit-event__input-group__label" htmlFor="hour">Hour</label>
      <input
        id="hour"
        className="edit-event__input-group__input"
        type="tel"
        name="hour"
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
    <div className="edit-event__input-group">
      <label className="edit-event__input-group__label" htmlFor="minutes">Minutes</label>
      <input
        id="minutes"
        className="edit-event__input-group__input"
        type="tel"
        name="minutes"
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
    <div className="edit-event__input-group">
      <button className="edit-event__input-group__button" onClick={() => alert('Test A')} >OK</button>
      <button className="edit-event__input-group__button" onClick={() => props.onCancel()}>Cancel</button>
    </div>
  </div>;
};

export default EditEvent;
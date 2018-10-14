import React from 'react';

import './EditEvent.css';

const EditEvent = () => {

  return <div className="edit-event">
    <div className="edit-event__input-group">
      <label className="edit-event__input-group__label" htmlFor="name">Name</label>
      <input id="name" className="edit-event__input-group__input" type="text" name="name" />
    </div>
    <div className="edit-event__input-group">
      <label className="edit-event__input-group__label" htmlFor="hour">Hour</label>
      <input id="hour" className="edit-event__input-group__input" type="tel" name="hour" />
    </div>
    <div className="edit-event__input-group">
      <label className="edit-event__input-group__label" htmlFor="minutes">Minutes</label>
      <input id="minutes" className="edit-event__input-group__input" type="tel" name="minutes" />
    </div>
    <div className="edit-event__input-group">
      <button className="edit-event__input-group__button">OK</button>
      <button className="edit-event__input-group__button">Cancel</button>
    </div>
  </div>;
};

export default EditEvent;
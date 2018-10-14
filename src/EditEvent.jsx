import React from 'react';

const EditEvent = () => {

  return <div className="edit-event">
    <div className="edit-event__input-group">
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" />
    </div>
    <div className="edit-event__input-group">
      <label htmlFor="hour">Hour</label>
      <input id="hour" type="tel" name="hour" />
    </div>
    <div className="edit-event__input-group">
      <label htmlFor="minutes">Minutes</label>
      <input id="minutes" type="tel" name="minutes" />
    </div>
    <button>OK</button>
    <button>Cancel</button>
  </div>;
};

export default EditEvent;
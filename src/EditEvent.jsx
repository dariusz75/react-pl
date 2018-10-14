import React from 'react';

const EditEvent = () => {

  return <div className="edit-event">
    <div className="edit-event__input-group">
      <label htmlFor="name" >Name</label>
      <input id="name" type="text" name="name" />
    </div>
  </div>;
};

export default EditEvent;
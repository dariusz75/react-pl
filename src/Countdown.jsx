import React from 'react';
import propTypes from 'prop-types';

import './Countdown.css';



const Countdown = (props) => (
  <div>
    <p className="countdown"><strong>{props.name}</strong> {props.hour}:{props.minutes}
      <i className="far fa-edit item-icon" onClick={() => props.onEditInit(props.id)}></i>
      <i className="fas fa-trash-alt item-icon" onClick={() => props.onRemove(props.id)}></i>
    </p>
  </div>
);

Countdown.propTypes = {
  name: propTypes.string,
  time: propTypes.string
}

export default Countdown;
import React from 'react';
import propTypes from 'prop-types';

import './Countdown.css';



const Countdown = (props) => (
  <ul className="list-group list-group-flush">
    <li className="list-group-item countdown"><strong>{props.name}</strong> {props.hour}:{props.minutes}
      <i className="far fa-edit item-icon" onClick={() => props.onEditInit(props.id)}></i>
      <i className="fas fa-trash-alt item-icon" onClick={() => props.onRemove(props.id)}></i>
    </li>
  </ul>
);

Countdown.propTypes = {
  name: propTypes.string,
  time: propTypes.string
}

export default Countdown;
import React from 'react';
import propTypes from 'prop-types';

import './Countdown.css';

const Countdown = (props) => (
  <p className="countdown"><strong>{props.name}</strong> {props.time}</p>
);

Countdown.propTypes = {
  name: propTypes.string,
  time: propTypes.string
}

export default Countdown;
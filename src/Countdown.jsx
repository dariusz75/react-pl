import React from 'react';
import propTypes from 'prop-types';

import './Countdown.css';

const Countdown = (props) => (
  <p className="countdown"><strong>{props.name}</strong> {props.hour}:{props.minutes}</p>
);

Countdown.propTypes = {
  name: propTypes.string,
  time: propTypes.string
}

export default Countdown;
import React from 'react';
import propTypes from 'prop-types';

import './Countdown.css';

const Countdown = (props) => (
  <p class="countdown"><strong>{props.name}</strong> {props.time}</p>
);

Countdown.propTypes = {
  name: propTypes.string,
  time: propTypes.string
}

export default Countdown;
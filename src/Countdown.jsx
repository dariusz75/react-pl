import React from 'react';
import propTypes from 'prop-types';


const Countdown = (props) => (
  <p><strong>{props.name}</strong> {props.time}</p>
);

Countdown.propTypes = {
  name: propTypes.string,
  time: propTypes.string
}

export default Countdown;
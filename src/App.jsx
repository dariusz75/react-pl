import React from 'react';

import Countdown from './Countdown';

const App = () => (
  <div>
    <Countdown name="Breakfast" time="8.00" />
    <Countdown name="Lunch" time="14.00" />
  </div>
);

export default App;
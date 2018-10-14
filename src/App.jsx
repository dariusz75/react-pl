import React, { Component } from 'react';

import Countdown from './Countdown';

class App extends Component {
  constructor() {
    super();

    this.state = {
      events: [
        { id: 0, name: 'Breakfast', time: '7.00' },
        { id: 1, name: 'Lunch', time: '13.00' },
        { id: 2, name: 'Afternoon Tea', time: '17.00' }
      ]
    }
  }



  render() {

    let events = this.state.events.map(el => {
      return <Countdown key={el.id} name={el.name} time={el.time} />;
    })

    return (
      <div>
        {events}
      </div>
    );
  }
}



export default App;
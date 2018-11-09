import React, { Component } from 'react';

import './App.css';
import Countdown from './Countdown';
import EditEvent from './EditEvent';

class App extends Component {
  constructor() {
    super();
    this.handleEditEvent = this.handleEditEvent.bind(this);

    this.state = {
      events: [
        { id: 0, name: 'Breakfast', hour: '7', minutes: '00' },
        { id: 1, name: 'Lunch', hour: '13', minutes: '00' },
        { id: 2, name: 'Afternoon Tea', hour: '17', minutes: '00' }
      ],
      editedEvent: {
        id: 3,
        name: '',
        hour: '',
        minutes: ''
      }
    }
  }

  handleEditEvent(val) {
    this.setState(prevState => {
      return {
        editedEvent: Object.assign(prevState.editedEvent, val)
      }
    });
    console.log(this.state.editedEvents);
  }

  render() {

    let events = this.state.events.map(el => {
      return <Countdown key={el.id} name={el.name} hour={el.hour} minutes={el.minutes} />;
    })

    return (
      <div className="app" >
        {events}
        <EditEvent
          onCancel={() => alert('Test B')}
          onInputChange={(val) => this.handleEditEvent(val)}
        />
      </div>
    );
  }
}



export default App;
import React, { Component } from 'react';
import uniqid from 'uniqid';

import './App.css';
import Countdown from './Countdown';
import EditEvent from './EditEvent';

class App extends Component {
  constructor() {
    super();
    this.handleEditEvent = this.handleEditEvent.bind(this);
    this.handleSaveEvent = this.handleSaveEvent.bind(this);
    this.handleRemoveEvent = this.handleRemoveEvent.bind(this);
    this.handleEditInit = this.handleEditInit.bind(this);
    this.handleCancelEvent = this.handleCancelEvent.bind(this);

    this.state = {
      events: [
        { id: 0, name: 'Breakfast', hour: '7', minutes: '00' },
        { id: 1, name: 'Lunch', hour: '13', minutes: '00' },
        { id: 2, name: 'Afternoon Tea', hour: '17', minutes: '00' }
      ],
      editedEvent: {
        id: uniqid(),
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
  }

  handleSaveEvent() {
    this.setState(prevState => {
      const editedEventExists = prevState.events.find(
        el => el.id === prevState.editedEvent.id
      );

      let updatedEvents;
      if (editedEventExists) {
        updatedEvents = prevState.events.map(el => {
          if (el.id === prevState.editedEvent.id) {
            return prevState.editedEvent;
          } else {
            return el;
          }
        })
      } else {
        updatedEvents = [...prevState.events, prevState.editedEvent]
      }

      return {
        events: updatedEvents,
        editedEvent: {
          id: uniqid(),
          name: '',
          hour: '',
          minutes: ''
        }
      }
    })
    /* 
    this.setState(prevState => {
      return {
        events: [...prevState.events, prevState.editedEvent],
        editedEvent: {
          id: uniqid(),
          name: '',
          hour: '',
          minutes: ''
        }
      }
    })
    */
  }

  handleRemoveEvent(id) {
    this.setState(prevState => ({
      events: prevState.events.filter(el => el.id !== id)
    }))
  }

  handleEditInit(id) {
    this.setState(prevState => ({
      editedEvent: prevState.events[id]
    }))
  }

  handleCancelEvent() {
    this.setState({
      editedEvent: { id: uniqid(), name: '', hour: '', minutes: '' }
    })
  }

  render() {

    let events = this.state.events.map(el => {
      return <Countdown
        key={el.id}
        id={el.id}
        name={el.name}
        hour={el.hour}
        minutes={el.minutes}
        onEditInit={id => this.handleEditInit(id)}
        onRemove={id => this.handleRemoveEvent(id)}
      />;
    })

    return (
      <div className="app" >
        {events}
        <EditEvent
          name={this.state.editedEvent.name}
          hour={this.state.editedEvent.hour}
          minutes={this.state.editedEvent.minutes}
          onSave={() => this.handleSaveEvent()}
          onCancel={() => this.handleCancelEvent()}
          onInputChange={(val) => this.handleEditEvent(val)}
        />
      </div>
    );
  }
}



export default App;
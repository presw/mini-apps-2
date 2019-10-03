import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getEvents = this.getEvents.bind(this);
    this.getEventsBySearchTerm = this.getEventsBySearchTerm.bind(this);
  }

  componentDidMount() {
  }

  getEvents() {
    axios.get('/events')
      .then((response) => {
        console.log(response);
      })
  }

  getEventsBySearchTerm(searchTerm) {
    axios.get(`/events?q=${searchTerm}`)
      .then((response) => {
        const { data } = response;
        console.log(data);
      })
  }

  render() {
    return (
      <div>Hello World</div> 
    )
  }
}

export default App;

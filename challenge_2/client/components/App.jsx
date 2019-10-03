import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('/api/currency/previousMonth', (req, res) => {
    })
      .then((response) => {
        const { data } = response;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      })
  };

  render() {
    return (
      <div>Hello World</div>
    )
  };
}

export default App;

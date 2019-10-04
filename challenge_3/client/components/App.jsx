import React from 'react';
import PinsSelector from './PinsSelector';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.onTableClick = this.onTableClick.bind(this);
  };

  onTableClick(e) {
    console.log(e.target.innerText);
  }

  render() {
    return (
      <div>
        <div>Bowling (or something)</div>
        <PinsSelector onTableClick={this.onTableClick} />
      </div>
    );
  };
};

export default App;

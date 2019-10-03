import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    }
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  handleOnSubmit(e) {
    e.preventDefault();
  }
  
  onSearchChange(e) {
    const searchTerm = e.target.value;
    this.setState({ searchTerm });
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <input type="text" placeholder="Historical search" onChange={this.onSearchChange}></input>
        <input type="submit"></input>
      </form>
    )
  }
}

export default Search;
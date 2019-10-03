import React from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Search from './Search';
import Results from './Results';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      resultsPerPage: 10,
    };
    this.getEvents = this.getEvents.bind(this);
    this.getEventsBySearchTerm = this.getEventsBySearchTerm.bind(this);
    this.getEventsByPaginateTest = this.getEventsByPaginateTest.bind(this);
    this.handlePaginateClick = this.handlePaginateClick.bind(this);
  }

  componentDidMount() {
    this.getEventsByPaginateTest();
  }

  getEvents() {
    axios.get('/events')
      .then((response) => {
        const { selected } = response;
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

  getEventsByPaginateTest() {
    axios.get('/events/?_page=1')
      .then((response) => {
        console.log(response.data);
      })
  };

  handlePaginateClick(data) {
    console.log(data);
  }

  render() {
    return (
      <div>
        <div>Hello World</div>
        <Search />
        <Results />
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePaginateClick}
          />
      </div>
    )
  }
}

export default App;

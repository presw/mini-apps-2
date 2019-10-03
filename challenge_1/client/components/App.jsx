import React from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import Search from './Search';
import Results from './Results';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      data: [],
      currentPage: 1,
      resultsPerPage: 10,
      pageCount: 0,
    };
    this.getEventsBySearchTerm = this.getEventsBySearchTerm.bind(this);
    this.getEventsByPaginate = this.getEventsByPaginate.bind(this);
    this.handlePaginateClick = this.handlePaginateClick.bind(this);
  }

  componentDidMount() {
    this.getEventsByPaginate();

  }

  getEventsBySearchTerm(searchTerm) {
    axios.get(`/events?q=${searchTerm}`)
      .then((response) => {
        const { data } = response;
        const totalResults = data.length;
        const { resultsPerPage } = this.state;
        const pageCount = Math.ceil(totalResults / resultsPerPage);
        this.setState({ pageCount, searchTerm });
        this.getEventsByPaginate(searchTerm, 1);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getEventsByPaginate(searchTerm, page) {
    const { currentPage } = this.state;
    axios.get(`/events?_page=${currentPage}&q=${searchTerm}`)
      .then((response) => {
        const { data } = response;
        this.setState({ data })
      })
  };

  handlePaginateClick(data) {
    const { searchTerm } = this.state;
    const { selected } = data;
    const currentPage = selected + 1;
    this.setState({ currentPage }, () => {
      this.getEventsByPaginate(searchTerm, currentPage);
    })
  }

  render() {
    const { data, pageCount } = this.state;
    return (
      <div>
        <div>Hello World</div>
        <Search getEventsBySearchTerm={this.getEventsBySearchTerm} />
        <Results results={data}/>
        <div className="test">
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePaginateClick}
            containerClassName="pagination-container"
            pageClassName="page-container"
          />
        </div>
      </div>
    )
  }
}

export default App;

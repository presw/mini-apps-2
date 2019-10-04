import React from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      labels: [],
    };
  }

  componentDidMount() {
    axios.get('/api/currency/previousMonth', (req, res) => {
    })
      .then((response) => {
        const { data } = response;
        const { bpi } = data;
        const tupleContainer = [];
        for (let date in bpi) {
          const tuple = [];
          tuple.push(date);
          tuple.push(bpi[date]);
          tupleContainer.push(tuple);
        }
        tupleContainer.sort((a, b) => {
          if (a[0] < b[0]) {
            return -1;
          } else if (a[0] > b[0]) {
            return 1;
          }
          return 0;
        });
        const labelsArray = [];
        const dataArray = [];
        for (let i = 0; i < tupleContainer.length; i += 1) {
          const tuple = tupleContainer[i];
          labelsArray.push(tuple[0]);
          dataArray.push(tuple[1]);
        }
        this.setState({ data: dataArray, labels: labelsArray });
        const currency = {
          labels: labelsArray,
          datasets: [
            {
              data: dataArray,
            },
          ],
        };
        this.setState({ currency });
      })
      .catch((error) => {
        console.log(error);
      })
  };

  render() {
    const { data, labels, currency } = this.state;
    return (
      <div>
        <div>Hello World</div>
        <Line data={currency} />
      </div>

    )
  };
}

export default App;

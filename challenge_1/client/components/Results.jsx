import React from 'react';
import Result from './Result';

const Results = (props) => {
  const { results } = props;
  return (
    <div>
      {results.map((result, index) => {
        return <Result key={index} result={result} />
      })}
    </div>
  )
}

export default Results;

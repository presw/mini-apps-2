import React from 'react';

const Result = (props) => {
  const { result } = props;
  const { date, description } = result;
  return (
    <div>
      <div>Date: {date}</div>
      <div>Description: {description}</div>
    </div>

  )
}

export default Result;

import React from 'react';

const PinsSelector = (props) => {
  const { onTableClick } = props;
  return (
    <table onClick={onTableClick}>
      <tr>
        <th>1</th>
        <th>2</th>
        <th>3</th>
      </tr>
      <tr>
        <th>4</th>
        <th>5</th>
        <th>6</th>
      </tr>
      <tr>
        <th>7</th>
        <th>8</th>
        <th>9</th>
      </tr>
      <tr>
        <th></th>
        <th>10</th>
        <th>0</th>
      </tr>
    </table>
  )
}

export default PinsSelector;
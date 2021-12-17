import React from 'react';
import Card from './Card';

const DisplayContainer = () => {
  return (
    <div className='display-container'>
      <Card
        webHeadingName='card2'
        text={`It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout The point of`}
      />
      <Card
        webHeadingName='card3'
        text={`It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout The point of`}
      />
      <Card
        webHeadingName='card4'
        text={`It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout The point of`}
      />
      <Card
        webHeadingName='card5'
        text={`It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout The point of`}
      />
    </div>
  );
};

export default DisplayContainer;

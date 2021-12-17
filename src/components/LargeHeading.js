import React, { useState } from 'react';

const LargeHeading = (props) => {
  const { webHeadingName } = props;
  //   console.log(props);
  return <div className='large-heading'>{props.webHeadingName}</div>;
};

export default LargeHeading;

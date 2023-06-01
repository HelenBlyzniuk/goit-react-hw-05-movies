import { CirclesWithBar } from 'react-loader-spinner';
import React from 'react';

const Loader = () => {
  return (
    <CirclesWithBar
      height="100"
      width="100"
      color="#4fa94d"
      wrapperStyle={{
        display: 'block',
        marginLeft: '400px',
        marginRight: 'auto',
        marginBottom: '30px',
      }}
      wrapperClass=""
      visible={true}
      outerCircleColor="blue"
      innerCircleColor="blue"
      barColor="blue"
      ariaLabel="circles-with-bar-loading"
    />
  );
};
export default Loader;

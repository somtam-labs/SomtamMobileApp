import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Home = props => (
  <Svg
    width={17}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="red"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.456 1.555a.25.25 0 0 0-.312 0l-5.25 4.2a.25.25 0 0 0-.094.196v7.019c0 .138.112.25.25.25H5.8V7.97a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v5.25h2.75a.25.25 0 0 0 .25-.25V5.95a.25.25 0 0 0-.094-.195l-5.25-4.2ZM7.206.384a1.75 1.75 0 0 1 2.187 0l5.25 4.2c.415.332.657.835.657 1.367v7.019a1.75 1.75 0 0 1-1.75 1.75h-3.5a.75.75 0 0 1-.75-.75V8.72h-2v5.25a.75.75 0 0 1-.75.75h-3.5a1.75 1.75 0 0 1-1.75-1.75V5.95c0-.531.242-1.034.657-1.366l5.25-4.2Z"
    />
  </Svg>
);

export default Home;

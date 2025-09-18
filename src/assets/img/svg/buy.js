import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Buy = props => (
  <Svg
    width={17}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.5.118a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6h-6a1 1 0 0 1 0-2h6v-6a1 1 0 0 1 1-1Z"
      fill="#fff"
    />
  </Svg>
);

export default Buy;

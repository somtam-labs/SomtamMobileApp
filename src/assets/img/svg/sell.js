import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Sell = props => (
  <Svg
    width={17}
    height={3}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5.868h14a1 1 0 1 1 0 2h-14a1 1 0 0 1 0-2Z"
      fill="#fff"
    />
  </Svg>
);

export default Sell;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Wallet = props => (
  <Svg
    width={17}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.1 2.478h12a.5.5 0 0 1 .5.5V4.13h-4.364a2 2 0 0 0-2 2v1.832a2 2 0 0 0 2 2H14.6v1.06a.5.5 0 0 1-.5.5h-12a.5.5 0 0 1-.5-.5V2.978a.5.5 0 0 1 .5-.5Zm-2 .5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8.044a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V2.978ZM10.236 5.63H14.6v2.832h-4.364a.5.5 0 0 1-.5-.5V6.13a.5.5 0 0 1 .5-.5Z"
    />
  </Svg>
);

export default Wallet;

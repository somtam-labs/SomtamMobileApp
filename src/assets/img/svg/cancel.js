import * as React from 'react';
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const Cancel = props => (
  <Svg
    width={51}
    height={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect x={0.25} width={50} height={50} rx={25} fill="url(#a)" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.83 18.58a1.125 1.125 0 0 1 1.59 0l4.83 4.83 4.83-4.83a1.126 1.126 0 1 1 1.59 1.59L26.84 25l4.83 4.83a1.127 1.127 0 0 1 .028 1.619 1.122 1.122 0 0 1-1.618-.029l-4.83-4.83-4.83 4.83a1.125 1.125 0 0 1-1.59-1.59L23.66 25l-4.83-4.83a1.125 1.125 0 0 1 0-1.59Z"
      fill="#F5F5F5"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={0.25}
        y1={25.105}
        x2={50.25}
        y2={25.105}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#6652DE" />
        <Stop offset={1} stopColor="#8170EA" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default Cancel;

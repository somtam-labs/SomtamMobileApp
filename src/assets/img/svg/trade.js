import * as React from 'react';
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const Trade = props => (
  <Svg
    width={51}
    height={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect x={0.5} width={50} height={50} rx={25} fill="url(#a)" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m31.383 15.366-.118-.104a1.25 1.25 0 0 0-1.65.104l-.104.118a1.25 1.25 0 0 0 .104 1.65l4.115 4.116H19.249l-.146.008a1.25 1.25 0 0 0 .146 2.492h17.5l.142-.008c1.017-.108 1.495-1.373.742-2.126l-6.25-6.25ZM33 27.5c0-.69-.56-1.25-1.25-1.25h-17.5l-.142.008c-1.017.108-1.495 1.373-.742 2.126l6.25 6.25.118.104c.49.381 1.2.346 1.65-.104l.104-.118a1.25 1.25 0 0 0-.104-1.65L17.27 28.75h14.481l.146-.008a1.25 1.25 0 0 0 1.104-1.242Z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={0.5}
        y1={25.105}
        x2={50.5}
        y2={25.105}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#6652DE" />
        <Stop offset={1} stopColor="#8170EA" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default Trade;

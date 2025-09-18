import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Next = props => (
  <Svg
    width={8}
    height={12}
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m.91 10.089 4.23-3.825a.4.4 0 0 0-.002-.595L.958 1.916A.904.904 0 0 1 .888.64.898.898 0 0 1 2.16.571l5.256 4.72c.399.358.4.983.002 1.343l-5.302 4.795a.898.898 0 0 1-1.27-.066.904.904 0 0 1 .065-1.274Z"
    />
  </Svg>
);

export default Next;

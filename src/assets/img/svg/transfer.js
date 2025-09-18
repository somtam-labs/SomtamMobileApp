import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Transfer = props => (
  <Svg
    width={21}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m14.957 1.16-.094-.083a1 1 0 0 0-1.32.084l-.083.094a1 1 0 0 0 .083 1.32l3.292 3.293H5.25l-.117.007a1 1 0 0 0 .117 1.993h14l.114-.006c.814-.087 1.196-1.099.593-1.701l-5-5Zm1.295 9.708a1 1 0 0 0-1-1h-14l-.114.006c-.814.087-1.196 1.098-.593 1.7l5 5 .094.084a1 1 0 0 0 1.32-.083l.083-.094a1 1 0 0 0-.083-1.32l-3.292-3.293h11.585l.117-.007a1 1 0 0 0 .883-.993Z"
      fill="#fff"
    />
  </Svg>
);

export default Transfer;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Activity = props => (
  <Svg
    width={17}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.9 14.25c0 .966.784 1.75 1.75 1.75h12.5a1.75 1.75 0 0 0 1.75-1.75V1.75A1.75 1.75 0 0 0 15.15 0H2.65A1.75 1.75 0 0 0 .9 1.75v12.5Zm1.75.25a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h12.5a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25H2.65ZM3.9 4.25c0 .414.336.75.75.75h7.5a.75.75 0 0 0 0-1.5h-7.5a.75.75 0 0 0-.75.75Zm.75 8.25a.75.75 0 0 1 0-1.5h5.5a.75.75 0 1 1 0 1.5h-5.5ZM3.9 8c0 .414.336.75.75.75h3.5a.75.75 0 0 0 0-1.5h-3.5A.75.75 0 0 0 3.9 8Z"
    />
  </Svg>
);

export default Activity;

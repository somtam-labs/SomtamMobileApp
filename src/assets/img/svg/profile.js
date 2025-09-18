import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Profile = props => (
  <Svg
    width={13}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.7 4a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm.061 3.073a4 4 0 1 0-5.123 0 6.004 6.004 0 0 0-3.431 5.142.75.75 0 0 0 1.498.07 4.5 4.5 0 0 1 8.99 0 .75.75 0 1 0 1.498-.07 6.005 6.005 0 0 0-3.432-5.142Z"
    />
  </Svg>
);

export default Profile;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Lightbulb = props => (
  <Svg
    width={12}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 6c0-2.145 1.465-4 4-4s4 1.855 4 4c0 1.259-.51 2.098-1.11 2.94l-.188.257c-.46.629-1.008 1.378-1.16 2.303H4.458c-.153-.925-.701-1.674-1.161-2.303a28.086 28.086 0 0 1-.188-.258C2.51 8.1 2 7.26 2 6Zm2.5 7v.5a1.5 1.5 0 0 0 3 0V13h-3ZM6 .5C2.535.5.5 3.131.5 6c0 1.741.74 2.902 1.39 3.81l.166.232C2.646 10.865 3 11.357 3 12v1.5a3 3 0 1 0 6 0V12c0-.643.353-1.135.944-1.958.054-.074.11-.151.166-.231C10.76 8.9 11.5 7.74 11.5 6 11.5 3.131 9.465.5 6 .5Z"
      fill="#fff"
    />
  </Svg>
);

export default Lightbulb;

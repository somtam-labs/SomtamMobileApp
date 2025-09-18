import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ExclamationIcon = (props) => (
  <Svg
    width={17}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.5 2.25a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm-8 6.5a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm9 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9.25 5.5a.75.75 0 0 0-1.5 0V9a.75.75 0 0 0 1.5 0V5.5Z"
      fill="#DC3A29"
    />
  </Svg>
)

export default ExclamationIcon
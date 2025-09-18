import * as React from "react"
import Svg, { Path } from "react-native-svg"

const TipsClose = (props) => (
  <Svg
    width={10}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.72 1.22a.75.75 0 0 1 1.06 0L5 4.44l3.22-3.22a.75.75 0 1 1 1.06 1.06L6.06 5.5l3.22 3.22a.75.75 0 1 1-1.06 1.06L5 6.56 1.78 9.78A.75.75 0 0 1 .72 8.72L3.94 5.5.72 2.28a.75.75 0 0 1 0-1.06Z"
      fill="#fff"
    />
  </Svg>
)

export default TipsClose

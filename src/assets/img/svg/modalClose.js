import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ModalClose = (props) => (
  <Svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m8.414 7 5.293-5.293A.999.999 0 1 0 12.293.293L7 5.586 1.707.293A.999.999 0 1 0 .293 1.707L5.586 7 .293 12.293a.999.999 0 1 0 1.414 1.414L7 8.414l5.293 5.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L8.414 7Z"
      fill="#2C3131"
    />
  </Svg>
)

export default ModalClose

import * as React from "react"
const RightArrow = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#666"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13 6 6 6-6 6M5 6l6 6-6 6"
    />
  </svg>
)
export default RightArrow

import * as React from "react"
const RightHam = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#555"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.75 5h8M3.75 12h13M3.75 19h18"
    />
  </svg>
)
export default RightHam

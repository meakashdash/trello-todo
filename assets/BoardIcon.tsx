import * as React from "react"
const BoardIcon = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#797979"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 3.6v16.8a.6.6 0 0 0 .6.6h16.8a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6H3.6a.6.6 0 0 0-.6.6ZM6 6v10M10 6v3M14 6v7M18 6v5"
    />
  </svg>
)
export default BoardIcon

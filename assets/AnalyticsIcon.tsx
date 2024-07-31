import * as React from "react"
const AnalyticsIcon = (props:any) => (
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
      d="M20 20H4V4"
    />
    <path
      stroke="#797979"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 16.5 12 9l3 3 4.5-4.5"
    />
  </svg>
)
export default AnalyticsIcon

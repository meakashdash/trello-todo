import * as React from "react"
const TeamIcon = (props:any) => (
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
      strokeWidth={1.5}
      d="M1 20v-1a7 7 0 1 1 14 0v1"
    />
    <path
      stroke="#797979"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13 14a5 5 0 0 1 10 0v.5"
    />
    <path
      stroke="#797979"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
  </svg>
)
export default TeamIcon

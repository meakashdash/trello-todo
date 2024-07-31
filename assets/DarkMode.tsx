import * as React from "react"
const DarkMode = (props:any) => (
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
      d="M12 2v4M12 18v4M22 12h-4M6 12H2M4.93 4.929l2.828 2.828M16.243 16.243l2.828 2.828M19.071 4.929l-2.828 2.828M7.757 16.243 4.93 19.07"
    />
    <path fill="#FFB800" d="M19.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" />
  </svg>
)
export default DarkMode

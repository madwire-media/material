import React from 'react'

const DEFAULT_SIZE = 24

export default ({
  fill = 'currentColor',
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  style = {},
  ...props
}) => (
  <svg
    viewBox={ `0 0 ${ DEFAULT_SIZE } ${ DEFAULT_SIZE }` }
    style={{ fill, width, height, ...style }}
    { ...props }
  >
    <path d="M1.5,4.77L3.57,6.84C3.2,7.82 3,8.89 3,10V20C3,21.66 4.34,23 6,23H12V21H5V20H9V12.27L15,18.27V20H16.73L19.23,22.5L20.5,21.22L2.78,3.5L1.5,4.77M12,1C9.47,1 7.18,2.04 5.55,3.72L6.96,5.14C8.23,3.82 10,3 12,3C15.87,3 19,6.13 19,10V12H15V13.18L20.5,18.67C20.81,18.19 21,17.62 21,17V10C21,5.03 16.97,1 12,1M5,12V10C5,9.46 5.06,8.94 5.17,8.44L8.73,12H5Z" />
  </svg>
)

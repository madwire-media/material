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
    <path d="M18.41,4L16,6.41V6.59L18.41,9H22V11H17.59L16,9.41V12H15C13.9,12 13,11.1 13,10V7.5H9.86C9.77,7.87 9.62,8.22 9.42,8.55L15.18,19H20C21.1,19 22,19.9 22,21V22H2V21C2,19.9 2.9,19 4,19H10.61L5.92,10.5C4.12,10.47 2.56,9.24 2.11,7.5C1.56,5.36 2.85,3.18 5,2.63C7.13,2.08 9.31,3.36 9.86,5.5H13V3C13,1.9 13.9,1 15,1H16V3.59L17.59,2H22V4H18.41M6,4.5C4.9,4.5 4,5.4 4,6.5C4,7.6 4.9,8.5 6,8.5C7.1,8.5 8,7.6 8,6.5C8,5.4 7.1,4.5 6,4.5Z" />
  </svg>
)

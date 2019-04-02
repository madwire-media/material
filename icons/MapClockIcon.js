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
    <path d="M15,12H16.5V16.25L19.36,17.94L18.61,19.16L15,17V12M23,16C23,19.87 19.87,23 16,23C13,23 10.4,21.08 9.42,18.4L8,17.9L2.66,19.97L2.5,20C2.22,20 2,19.78 2,19.5V4.38C2,4.15 2.15,3.97 2.36,3.9L8,2L14,4.1L19.34,2H19.5C19.78,2 20,2.22 20,2.5V10.25C21.81,11.5 23,13.62 23,16M9,16C9,12.83 11.11,10.15 14,9.29V6.11L8,4V15.89L9,16.24C9,16.16 9,16.08 9,16M16,11C13.24,11 11,13.24 11,16C11,18.76 13.24,21 16,21C18.76,21 21,18.76 21,16C21,13.24 18.76,11 16,11Z" />
  </svg>
)

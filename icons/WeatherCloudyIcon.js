import React from 'react'

const DEFAULT_SIZE = 24

export const WeatherCloudyIcon = ({
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
    <path d="M6,19C3.24,19 1,16.76 1,14C1,11.24 3.24,9 6,9C7,6.65 9.3,5 12,5C15.43,5 18.24,7.66 18.5,11.03L19,11C21.21,11 23,12.79 23,15C23,17.21 21.21,19 19,19H6M19,13H17V12C17,9.24 14.76,7 12,7C9.5,7 7.45,8.82 7.06,11.19C6.73,11.07 6.37,11 6,11C4.34,11 3,12.34 3,14C3,15.66 4.34,17 6,17H19C20.1,17 21,16.1 21,15C21,13.9 20.1,13 19,13Z" />
  </svg>
)

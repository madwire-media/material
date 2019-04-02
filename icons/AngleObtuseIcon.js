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
    <path d="M21,19H9.31L4.07,5.36L5.93,4.64L8.96,12.5C9.5,12.29 10.09,12.17 10.71,12.17V12.17C13.38,12.17 15.56,14.34 15.58,17H21V19M10.69,17H13.58C13.56,15.42 12.3,14.17 10.71,14.17C10.34,14.17 10,14.24 9.67,14.36L10.69,17Z" />
  </svg>
)

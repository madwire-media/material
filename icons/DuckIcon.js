import React from 'react'

const DEFAULT_SIZE = 24

export const DuckIcon = ({
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
    <path d="M8.5,5C7.67,5 7,5.67 7,6.5C7,7.33 7.67,8 8.5,8C9.33,8 10,7.33 10,6.5C10,5.67 9.33,5 8.5,5M10,2C12.76,2 15,4.24 15,7C15,8.7 14.15,10.2 12.86,11.1C14.44,11.25 16.22,11.61 18,12.5C21,14 22,12 22,12C22,12 21,21 15,21H9C9,21 4,21 4,16C4,13 7,12 6,10C2,10 2,6.5 2,6.5C3,7 4.24,7 5,6.65C5.19,4.05 7.36,2 10,2Z" />
  </svg>
)

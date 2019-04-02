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
    <path d="M6.95,14.93L11.19,9.27L19.68,2.2C20.07,1.81 20.72,1.81 21.09,2.2L21.8,2.91C22.19,3.28 22.19,3.93 21.8,4.32L14.73,12.81L9.07,17.05L6.95,14.93M8.36,17.76L6.24,15.64L3.41,17.05L2,21.29L4.12,19.17C4.32,19 4.63,19 4.83,19.17C5,19.37 5,19.68 4.83,19.88L2.71,22L6.95,20.59L8.36,17.76Z" />
  </svg>
)

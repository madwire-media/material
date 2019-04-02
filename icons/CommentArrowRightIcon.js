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
    <path d="M9,22C8.45,22 8,21.55 8,21V18H4C2.9,18 2,17.1 2,16V4C2,2.89 2.9,2 4,2H20C21.11,2 22,2.9 22,4V16C22,17.11 21.11,18 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22H9M8,9.05V11.12H12.64L10.84,12.92L12.09,14.17L16.17,10.08L12.09,6L10.84,7.25L12.64,9.05H8Z" />
  </svg>
)

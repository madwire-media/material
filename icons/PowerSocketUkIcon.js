import React from 'react'

const DEFAULT_SIZE = 24

export const PowerSocketUkIcon = ({
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
    <path d="M14.5,13.75H18V16H14.5V13.75M6,13.75H9.5V16H6V13.75M11,6H13V10H11V6M4.22,2C2.99,2 2,2.99 2,4.22V19.78C2,21 3,22 4.22,22H19.78C21.01,22 22,21.01 22,19.78V4.22C22,3 21,2 19.78,2H4.22M12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4Z" />
  </svg>
)

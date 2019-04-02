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
    <path d="M7,1C5.9,1 5,1.9 5,3V7H7V4H17V20H7V17H5V21C5,22.1 5.9,23 7,23H17C18.1,23 19,22.1 19,21V3C19,1.9 18.1,1 17,1H7M6,9C4.34,9 3,10.34 3,12C3,13.66 4.34,15 6,15C7.31,15 8.42,14.17 8.83,13H11V15H13V13H14V11H8.83C8.42,9.83 7.31,9 6,9M6,11C6.55,11 7,11.45 7,12C7,12.55 6.55,13 6,13C5.45,13 5,12.55 5,12C5,11.45 5.45,11 6,11Z" />
  </svg>
)

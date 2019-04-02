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
    <path d="M21,19V17H8V19H21M21,13V11H8V13H21M8,7H21V5H8V7M4,5V7H6V5H4M3,5C3,4.45 3.45,4 4,4H6C6.55,4 7,4.45 7,5V7C7,7.55 6.55,8 6,8H4C3.45,8 3,7.55 3,7V5M4,11V13H6V11H4M3,11C3,10.45 3.45,10 4,10H6C6.55,10 7,10.45 7,11V13C7,13.55 6.55,14 6,14H4C3.45,14 3,13.55 3,13V11M4,17V19H6V17H4M3,17C3,16.45 3.45,16 4,16H6C6.55,16 7,16.45 7,17V19C7,19.55 6.55,20 6,20H4C3.45,20 3,19.55 3,19V17Z" />
  </svg>
)

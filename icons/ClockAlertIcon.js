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
    <path d="M12,2C16.46,2 20.26,4.95 21.54,9H18V20C16.33,21.25 14.25,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M16.2,16.2L17,14.9L12.5,12.2V7H11V13L16.2,16.2M20,11H22V18H20V11M20,20H22V22H20V20Z" />
  </svg>
)

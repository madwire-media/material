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
    <path d="M11,4.5V7.5H13V4.5H11M4.91,7L3.5,8.41L5.27,10.18L6.68,8.77L4.91,7M19.09,7L17.32,8.77L18.73,10.18L20.5,8.41L19.09,7M4,11.5C4,14.36 5.5,17 8,18.43C10.5,19.86 13.5,19.86 16,18.43C18.5,17 20,14.36 20,11.5H12L4,11.5Z" />
  </svg>
)

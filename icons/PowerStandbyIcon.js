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
    <path d="M13,3H11V13H13V3M17.83,5.17L16.41,6.59C18.05,7.91 19,9.9 19,12C19,15.87 15.87,19 12,19C8.14,19 5,15.88 5,12C5,9.91 5.95,7.91 7.58,6.58L6.17,5.17C2.38,8.39 1.92,14.07 5.14,17.86C8.36,21.64 14.04,22.1 17.83,18.88C19.85,17.17 21,14.65 21,12C21,9.37 19.84,6.87 17.83,5.17Z" />
  </svg>
)

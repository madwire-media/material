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
    <path d="M17.05,14.22L19.88,17.05L22,14.93V22H14.93L17.05,19.88L14.22,17.05L17.05,14.22M12.33,18H12C7.58,18 4,16.21 4,14V17C4,19.21 7.58,21 12,21C12.39,21 12.77,21 13.14,21L14.22,19.92L12.33,18M17.54,11.89L19.29,13.64C19.73,13.21 20,12.62 20,12V9C20,10.13 19.06,11.16 17.54,11.88V11.89M4,9V12C4,14.21 7.58,16 12,16H12.45L16,12.47C14.7,12.83 13.35,13 12,13C7.58,13 4,11.21 4,9M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3Z" />
  </svg>
)

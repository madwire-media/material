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
    <path d="M15.59,9C17.7,7.74 19,5.46 19,3H17C17,5.76 14.76,8 12,8C9.24,8 7,5.76 7,3H5C5,5.46 6.3,7.74 8.41,9C5.09,11 4,15.28 6,18.6C7.97,21.92 12.27,23 15.59,21C18.91,19.04 20,14.74 18,11.42C17.42,10.43 16.58,9.59 15.59,9M12,20C9.24,20 7,17.76 7,15C7,12.24 9.24,10 12,10C14.76,10 17,12.24 17,15C17,17.76 14.76,20 12,20Z" />
  </svg>
)

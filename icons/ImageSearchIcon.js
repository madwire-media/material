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
    <path d="M15.5,2C18,2 20,4 20,6.5C20,7.38 19.75,8.21 19.31,8.9L22.39,12L21,13.39L17.88,10.32C17.19,10.75 16.37,11 15.5,11C13,11 11,9 11,6.5C11,4 13,2 15.5,2M15.5,4C14.12,4 13,5.12 13,6.5C13,7.88 14.12,9 15.5,9C16.88,9 18,7.88 18,6.5C18,5.12 16.88,4 15.5,4M7.5,14.5L4,19H18L13.5,13L10,17.5L7.5,14.5M20,20C20,21.1 19.1,22 18,22H4C2.9,22 2,21.1 2,20V6C2,4.9 2.9,4 4,4H9.5C9.18,4.77 9,5.61 9,6.5C9,10.09 11.91,13 15.5,13C16.18,13 16.84,12.89 17.46,12.7L20,15.24V20Z" />
  </svg>
)

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
    <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20C20,21.1 19.1,22 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M10.5,11C8,11 6,13 6,15.5C6,18 8,20 10.5,20C13,20 15,18 15,15.5C15,13 13,11 10.5,11M10.5,12.5C12.16,12.5 13.5,13.84 13.5,15.5C13.5,16.06 13.35,16.58 13.08,17L9,12.92C9.42,12.65 9.94,12.5 10.5,12.5M7.5,15.5C7.5,14.94 7.65,14.42 7.92,14L12,18.08C11.58,18.35 11.06,18.5 10.5,18.5C8.84,18.5 7.5,17.16 7.5,15.5Z" />
  </svg>
)

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
    <path d="M4,7C2.9,7 2,7.9 2,9V15C2,16.1 2.9,17 4,17H6C7.1,17 8,16.1 8,15V14H6V15H4V9H6V10H8V9C8,7.9 7.1,7 6,7H4M11,7C9.9,7 9,7.9 9,9V15C9,16.1 9.9,17 11,17H13C14.1,17 15,16.1 15,15V9C15,7.9 14.1,7 13,7H11M11,9H13V15H11V9M18,7C16.9,7 16,7.9 16,9V11C16,12.1 16.9,13 18,13H20V15H16V17H20C21.1,17 22,16.1 22,15V13C22,11.9 21.1,11 20,11H18V9H22V7H18Z" />
  </svg>
)

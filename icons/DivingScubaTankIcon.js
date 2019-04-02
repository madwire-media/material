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
    <path d="M19,18.5C19,19.88 17.88,21 16.5,21C15.12,21 14,19.88 14,18.5C14,17.47 14.62,16.59 15.5,16.21V6H11V7.35C12.22,7.93 13,9.15 13,10.5V22H6V10.5C6,9.15 6.78,7.93 8,7.35V6H6V4H8V3.5C8,2.67 8.67,2 9.5,2C10.33,2 11,2.67 11,3.5V4H15.5C16.6,4 17.5,4.9 17.5,6V16.21C18.38,16.59 19,17.47 19,18.5Z" />
  </svg>
)

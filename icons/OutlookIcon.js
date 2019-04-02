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
    <path d="M22,8V16C22,16.6 21.6,17 21,17H14V21L2,19.2V4.8L14,3V7H21C21.6,7 22,7.4 22,8M21,8.1L17,10.4L14,8.7V10.3L17,12L21,9.7V8.1M7.92,8.11C5.82,8.04 4.79,9.89 4.79,12.09C4.79,14.29 5.86,16.06 7.92,16.08C9.79,16.09 11,14.39 11,12.19C11,10 10.13,8.19 7.92,8.11M7.61,9.7C8.45,9.7 9.2,10.44 9.2,11.95C9.2,13.47 8.45,14.31 7.61,14.31C6.78,14.31 6.1,13.2 6.1,11.95C6.1,10.71 6.78,9.7 7.61,9.7Z" />
  </svg>
)

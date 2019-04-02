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
    <path d="M3,4C1.89,4 1,4.89 1,6V18C1,19.1 1.9,20 3,20H11V18.11L21,8.11V8C21,6.89 20.1,6 19,6H11L9,4H3M21.04,11.13C20.9,11.13 20.76,11.19 20.65,11.3L19.65,12.3L21.7,14.35L22.7,13.35C22.92,13.14 22.92,12.79 22.7,12.58L21.42,11.3C21.31,11.19 21.18,11.13 21.04,11.13M19.07,12.88L13,18.94V21H15.06L21.12,14.93L19.07,12.88Z" />
  </svg>
)

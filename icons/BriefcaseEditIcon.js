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
    <path d="M14,2C15.1,2 16,2.9 16,4V6H20C21.1,6 22,6.9 22,8L10.85,19C10.85,20.1 10.85,19.5 10.85,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2H14M14,6V4H10V6H14M21.04,12.13C20.9,12.13 20.76,12.19 20.65,12.3L19.65,13.3L21.7,15.35L22.7,14.35C22.92,14.14 22.92,13.79 22.7,13.58L21.42,12.3C21.31,12.19 21.18,12.13 21.04,12.13M19.07,13.88L13,19.94V22H15.06L21.12,15.93L19.07,13.88Z" />
  </svg>
)

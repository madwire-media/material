import React from 'react'

const DEFAULT_SIZE = 24

export const SeatLegroomReducedIcon = ({
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
    <path d="M19.97,19.2C20.15,20.16 19.42,21 18.5,21H14V18L15,14H9C7.34,14 6,12.66 6,11V3H12V9H17C18.1,9 19,9.9 19,11L17,18H18.44C19.17,18 19.83,18.5 19.97,19.2M5,12V3H3V12C3,14.76 5.24,17 8,17H12V15H8C6.34,15 5,13.66 5,12Z" />
  </svg>
)

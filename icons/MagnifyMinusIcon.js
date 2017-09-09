import React from 'react'

const DEFAULT_SIZE = 24

export const MagnifyMinusIcon = ({
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
    <path d="M9,2C12.87,2 16,5.13 16,9C16,10.57 15.5,12 14.61,13.19L15.41,14H16L22,20L20,22L14,16V15.41L13.19,14.61C12,15.5 10.57,16 9,16C5.13,16 2,12.87 2,9C2,5.13 5.13,2 9,2M5,8V10H13V8H5Z" />
  </svg>
)

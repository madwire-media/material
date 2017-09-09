import React from 'react'

const DEFAULT_SIZE = 24

export const FlaskEmptyIcon = ({
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
    <path d="M6,22C4.34,22 3,20.66 3,19C3,18.4 3.18,17.84 3.5,17.37L9,7.81V6C8.45,6 8,5.55 8,5V4C8,2.9 8.9,2 10,2H14C15.1,2 16,2.9 16,4V5C16,5.55 15.55,6 15,6V7.81L20.5,17.37C20.82,17.84 21,18.4 21,19C21,20.66 19.66,22 18,22H6Z" />
  </svg>
)

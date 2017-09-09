import React from 'react'

const DEFAULT_SIZE = 24

export const ArrowLeftBoldIcon = ({
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
    <path d="M20,9V15H12V19.84L4.16,12L12,4.16V9H20Z" />
  </svg>
)

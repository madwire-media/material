import React from 'react'

const DEFAULT_SIZE = 24

export const CursorTextIcon = ({
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
    <path d="M13,19C13,19.55 13.45,20 14,20H16V22H13.5C12.95,22 12,21.55 12,21C12,21.55 11.05,22 10.5,22H8V20H10C10.55,20 11,19.55 11,19V5C11,4.45 10.55,4 10,4H8V2H10.5C11.05,2 12,2.45 12,3C12,2.45 12.95,2 13.5,2H16V4H14C13.45,4 13,4.45 13,5V19Z" />
  </svg>
)

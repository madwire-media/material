import React from 'react'

const DEFAULT_SIZE = 24

export const BulletinBoardIcon = ({
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
    <path d="M12.04,2.5L9.53,5H14.53L12.04,2.5M4,7V20H20V7H4M12,0L17,5V5H20C21.1,5 22,5.9 22,7V20C22,21.1 21.1,22 20,22H4C2.9,22 2,21.1 2,20V7C2,5.9 2.9,5 4,5H7V5L12,0M7,18V14H12V18H7M14,17V10H18V17H14M6,12V9H11V12H6Z" />
  </svg>
)

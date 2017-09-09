import React from 'react'

const DEFAULT_SIZE = 24

export const PencilLockIcon = ({
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
    <path d="M5.5,2C4.12,2 3,3.12 3,4.5V5C2.45,5 2,5.45 2,6V10C2,10.55 2.45,11 3,11H8C8.55,11 9,10.55 9,10V6C9,5.45 8.55,5 8,5V4.5C8,3.12 6.88,2 5.5,2M5.5,3C6.33,3 7,3.67 7,4.5V5H4V4.5C4,3.67 4.67,3 5.5,3M19.66,3C19.4,3 19.16,3.09 18.97,3.28L17.13,5.13L20.88,8.88L22.72,7.03C23.11,6.64 23.11,6 22.72,5.63L20.38,3.28C20.18,3.09 19.91,3 19.66,3M16.06,6.19L5,17.25V21H8.75L19.81,9.94L16.06,6.19Z" />
  </svg>
)

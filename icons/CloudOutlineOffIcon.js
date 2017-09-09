import React from 'react'

const DEFAULT_SIZE = 24

export const CloudOutlineOffIcon = ({
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
    <path d="M7.73,10L15.73,18H6C3.79,18 2,16.21 2,14C2,11.79 3.79,10 6,10M3,5.27L5.75,8C2.56,8.15 0,10.77 0,14C0,17.31 2.69,20 6,20H17.73L19.73,22L21,20.73L4.27,4M19.35,10.03C18.67,6.59 15.64,4 12,4C10.5,4 9.15,4.43 8,5.17L9.45,6.63C10.21,6.23 11.08,6 12,6C15.04,6 17.5,8.46 17.5,11.5V12H19C20.66,12 22,13.34 22,15C22,16.13 21.36,17.11 20.44,17.62L21.89,19.07C23.16,18.16 24,16.68 24,15C24,12.36 21.95,10.22 19.35,10.03Z" />
  </svg>
)

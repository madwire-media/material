import React from 'react'

const DEFAULT_SIZE = 24

export const CashIcon = ({
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
    <path d="M3,6H21V18H3V6M12,9C13.66,9 15,10.34 15,12C15,13.66 13.66,15 12,15C10.34,15 9,13.66 9,12C9,10.34 10.34,9 12,9M7,8C7,9.1 6.1,10 5,10V14C6.1,14 7,14.9 7,16H17C17,14.9 17.9,14 19,14V10C17.9,10 17,9.1 17,8H7Z" />
  </svg>
)

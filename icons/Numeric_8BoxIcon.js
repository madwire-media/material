import React from 'react'

const DEFAULT_SIZE = 24

export const Numeric_8BoxIcon = ({
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
    <path d="M19,3C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3H19M11,17H13C14.1,17 15,16.1 15,15V13.5C15,12.67 14.33,12 13.5,12C14.33,12 15,11.33 15,10.5V9C15,7.89 14.1,7 13,7H11C9.9,7 9,7.9 9,9V10.5C9,11.33 9.67,12 10.5,12C9.67,12 9,12.67 9,13.5V15C9,16.11 9.9,17 11,17M11,13H13V15H11V13M11,9H13V11H11V9Z" />
  </svg>
)

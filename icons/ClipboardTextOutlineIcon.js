import React from 'react'

const DEFAULT_SIZE = 24

export default ({
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
    <path d="M19,4H14.82C14.25,2.44 12.53,1.64 11,2.2C10.14,2.5 9.5,3.16 9.18,4H5C3.9,4 3,4.9 3,6V20C3,21.1 3.9,22 5,22H19C20.1,22 21,21.1 21,20V6C21,4.9 20.1,4 19,4M12,4C12.55,4 13,4.45 13,5C13,5.55 12.55,6 12,6C11.45,6 11,5.55 11,5C11,4.45 11.45,4 12,4M7,8H17V6H19V20H5V6H7V8M17,12H7V10H17V12M15,16H7V14H15V16Z" />
  </svg>
)

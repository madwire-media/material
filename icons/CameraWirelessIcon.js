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
    <path d="M12,10.8C13.77,10.8 15.2,12.23 15.2,14C15.2,15.77 13.77,17.2 12,17.2C10.23,17.2 8.8,15.77 8.8,14C8.8,12.23 10.23,10.8 12,10.8M16,3.33V2C19.31,2 22,4.69 22,8H20.67C20.67,5.42 18.58,3.33 16,3.33M16,6V4.67C17.84,4.67 19.33,6.16 19.33,8H18C18,6.89 17.11,6 16,6M17,9H22V20C22,21.1 21.1,22 20,22H4C2.9,22 2,21.1 2,20V8C2,6.9 2.9,6 4,6H7.17L9,4H15V7C16.11,7 17,7.89 17,9M12,19C14.76,19 17,16.76 17,14C17,11.24 14.76,9 12,9C9.24,9 7,11.24 7,14C7,16.76 9.24,19 12,19Z" />
  </svg>
)

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
    <path d="M21,6V18C21,19.1 20.1,20 19,20H5C3.9,20 3,19.1 3,18V6C3,4.9 3.9,4 5,4H19C20.1,4 21,4.9 21,6M12,10C12,9.5 11.5,9 11,9H6.5C6,9 5.5,9.5 5.5,10V15H7V10.5H8V14H9.5V10.5H10.5V15H12V10M14.5,9C13.95,9 13.5,9.45 13.5,10V14C13.5,14.55 13.95,15 14.5,15H15.5V16.5H16.75V15H17.5C18.05,15 18.5,14.55 18.5,14V10C18.5,9.45 18.05,9 17.5,9H14.5M15,10.5H17V13.5H15V10.5Z" />
  </svg>
)

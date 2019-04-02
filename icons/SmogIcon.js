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
    <path d="M12,2C10.08,2 8.5,3.35 8.09,5.15C7.45,4.44 6.53,4 5.5,4C3.57,4 2,5.57 2,7.5H2C2,9.43 3.57,11 5.5,11H6.68V12H10.72V11H13.28V12H17.32V11H18.5C20.43,11 22,9.43 22,7.5H22C22,5.57 20.43,4 18.5,4H18.5C17.47,4 16.55,4.44 15.91,5.15C15.5,3.35 13.92,2 12,2M7.2,14L6.4,22H11L10.2,14H7.2M13.8,14L13,22H17.6L16.8,14H13.8Z" />
  </svg>
)

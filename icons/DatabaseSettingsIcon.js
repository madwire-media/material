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
    <path d="M7,22H9V24H7V22M11,22H13V24H11V22M15,22H17V24H15V22M12,3C16.42,3 20,4.79 20,7C20,9.21 16.42,11 12,11C7.58,11 4,9.21 4,7C4,4.79 7.58,3 12,3M4,9C4,11.21 7.58,13 12,13C16.42,13 20,11.21 20,9V12C20,14.21 16.42,16 12,16C7.58,16 4,14.21 4,12V9M4,14C4,16.21 7.58,18 12,18C16.42,18 20,16.21 20,14V17C20,18.19 18.95,19.27 17.29,20H6.71C5.05,19.27 4,18.19 4,17V14Z" />
  </svg>
)

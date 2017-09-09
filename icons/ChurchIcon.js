import React from 'react'

const DEFAULT_SIZE = 24

export const ChurchIcon = ({
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
    <path d="M11,2H13V4H15V6H13V9.4L22,13V15L20,14.2V22H14V17C14,15.9 13.1,15 12,15C10.9,15 10,15.9 10,17V22H4V14.2L2,15V13L11,9.4V6H9V4H11V2M6,20H8V15L7,14L6,15V20M16,20H18V15L17,14L16,15V20Z" />
  </svg>
)

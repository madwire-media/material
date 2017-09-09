import React from 'react'

const DEFAULT_SIZE = 24

export const Signal_3gIcon = ({
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
    <path d="M11,16.5V14.25C11,13 10,12 8.75,12C10,12 11,11 11,9.75V7.5C11,5.84 9.66,4.5 8,4.5H2V7.5H8V10.5H5V13.5H8V16.5H2V19.5H8C9.66,19.5 11,18.16 11,16.5M22,16.5V10.5H17.5V13.5H19V16.5H16V7.5H22V4.5H16C14.34,4.5 13,5.84 13,7.5V16.5C13,18.16 14.34,19.5 16,19.5H19C20.66,19.5 22,18.16 22,16.5Z" />
  </svg>
)

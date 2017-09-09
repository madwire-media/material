import React from 'react'

const DEFAULT_SIZE = 24

export const NaturePeopleIcon = ({
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
    <path d="M4.5,11C5.33,11 6,10.33 6,9.5C6,8.67 5.33,8 4.5,8C3.67,8 3,8.67 3,9.5C3,10.33 3.67,11 4.5,11M22.17,9.17C22.17,5.3 19.04,2.17 15.17,2.17C11.3,2.17 8.17,5.3 8.17,9.17C8.17,12.64 10.69,15.5 14,16.06V20H6V17H7V13C7,12.45 6.55,12 6,12H3C2.45,12 2,12.45 2,13V17H3V22H19V20H16V16.12C19.47,15.71 22.17,12.76 22.17,9.17Z" />
  </svg>
)

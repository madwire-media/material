import React from 'react'

const DEFAULT_SIZE = 24

export const ChairSchoolIcon = ({
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
    <path d="M22,5V7H17L13.53,12H16V14H14.46L18.17,22H15.97L15.04,20H6.38L5.35,22H3.1L7.23,14H7C6.55,14 6.17,13.7 6.04,13.3L2.87,3.84L3.82,3.5C4.34,3.34 4.91,3.63 5.08,4.15L7.72,12H12.1L15.57,7H12V5H22M9.5,14L7.42,18H14.11L12.26,14H9.5Z" />
  </svg>
)

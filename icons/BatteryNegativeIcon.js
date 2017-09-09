import React from 'react'

const DEFAULT_SIZE = 24

export const BatteryNegativeIcon = ({
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
    <path d="M11.67,4C12.4,4 13,4.6 13,5.33V20.67C13,21.4 12.4,22 11.67,22H2.33C1.6,22 1,21.4 1,20.67V5.33C1,4.6 1.6,4 2.33,4H4V2H10V4H11.67M15,12H23V14H15V12M3,13H11V6H3V13Z" />
  </svg>
)

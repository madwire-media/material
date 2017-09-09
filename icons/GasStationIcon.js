import React from 'react'

const DEFAULT_SIZE = 24

export const GasStationIcon = ({
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
    <path d="M18,10C17.45,10 17,9.55 17,9C17,8.45 17.45,8 18,8C18.55,8 19,8.45 19,9C19,9.55 18.55,10 18,10M12,10H6V5H12M19.77,7.23L19.78,7.22L16.06,3.5L15,4.56L17.11,6.67C16.17,7 15.5,7.93 15.5,9C15.5,10.38 16.62,11.5 18,11.5C18.36,11.5 18.69,11.42 19,11.29V18.5C19,19.05 18.55,19.5 18,19.5C17.45,19.5 17,19.05 17,18.5V14C17,12.89 16.1,12 15,12H14V5C14,3.89 13.1,3 12,3H6C4.89,3 4,3.89 4,5V21H14V13.5H15.5V18.5C15.5,19.88 16.62,21 18,21C19.38,21 20.5,19.88 20.5,18.5V9C20.5,8.31 20.22,7.68 19.77,7.23Z" />
  </svg>
)

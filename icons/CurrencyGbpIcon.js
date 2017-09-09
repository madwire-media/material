import React from 'react'

const DEFAULT_SIZE = 24

export const CurrencyGbpIcon = ({
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
    <path d="M6.5,21V19.75C7.44,19.29 8.24,18.57 8.81,17.7C9.38,16.83 9.67,15.85 9.68,14.75L9.66,13.77L9.57,13H7V11H9.4C9.25,10.17 9.16,9.31 9.13,8.25C9.16,6.61 9.64,5.33 10.58,4.41C11.5,3.5 12.77,3 14.32,3C15.03,3 15.64,3.07 16.13,3.2C16.63,3.32 17,3.47 17.31,3.65L16.76,5.39C16.5,5.25 16.19,5.12 15.79,5C15.38,4.9 14.89,4.85 14.32,4.84C13.25,4.86 12.5,5.19 12,5.83C11.5,6.46 11.29,7.28 11.3,8.28L11.4,9.77L11.6,11H15.5V13H11.79C11.88,14 11.84,15 11.65,15.96C11.35,17.16 10.74,18.18 9.83,19H18V21H6.5Z" />
  </svg>
)

import React from 'react'

const DEFAULT_SIZE = 24

export const StethoscopeIcon = ({
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
    <path d="M19,8C19.56,8 20,8.43 20,9C20,9.55 19.55,10 19,10C18.43,10 18,9.55 18,9C18,8.43 18.43,8 19,8M2,2V11C2,13.96 4.19,16.5 7.14,16.91C7.76,19.92 10.42,22 13.5,22C17.09,22 20,19.09 20,15.5V11.81C21.16,11.39 22,10.29 22,9C22,7.34 20.66,6 19,6C17.34,6 16,7.34 16,9C16,10.29 16.84,11.4 18,11.81V15.41C18,17.91 16,19.91 13.5,19.91C11.5,19.91 9.82,18.7 9.22,16.9C12,16.3 14,13.8 14,11V2H10V5H12V11C12,13.21 10.21,15 8,15C5.79,15 4,13.21 4,11V5H6V2H2Z" />
  </svg>
)
